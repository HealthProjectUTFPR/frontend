<template>
  
  <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
    <el-select v-model="value" filterable placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    
    <el-table v-loading="loading" :data="tableData">
      
      <el-table-column type="expand">
        
        <template #default="props" >
          
          <!-- Pre e Pos-->
          
          <section class="container wrap">
           
            <div class= "pre_pos_div ">

              <div class= "pre_style " >
                <h1>Pré</h1>
                <h2>Horario</h2>
                <p>{{ moment(props.row.horarioPre ).format("HH:mm")}}</p>
                <h2>PAS(mmHg) </h2>  
                <p>{{ props.row.pasPre }}</p>  
                <h2>PAD(mmHg)</h2>   
                <p>{{ props.row.padPre }}</p>
                <h2>Glicemia </h2> 
                <p> {{ props.row.glicemiaPre }}</p>
                <h2>PSE-s </h2>  
                <p>{{ props.row.pseEPre }}</p>
              </div>
              
              <div class= "pos_style" >
                <h1>Pós</h1>
                <h2>Horario</h2>
                <p>{{ moment(props.row.horarioPos ).format("HH:mm")}}</p>
                <h2>PAS(mmHg) </h2>  
                <p>{{ props.row.pasPos }}</p>  
                <h2>PAD(mmHg)</h2>   
                <p>{{ props.row.padPos }}</p>
                <h2>Glicemia </h2> 
                <p> {{ props.row.glicemiaPos }}</p>
                <h2>PSE-s </h2>  
                <p>{{ props.row.pseEPos }}</p>
              </div>

            </div>

          </section>

          <!-- Informaçoes gerais-->

          <section class="container wrap">

          <div class= "info_gerais" >
              <h1>Informações Gerais</h1>
              <h2>Horario total de Treino</h2>  
              <p>{{ props.row.horarioTreino }}</p>
              <h2>Observação </h2>  
              <div class = "text_box">
                <p>{{ props.row.observacao }}</p>

              </div>
          </div>
          </section>
          <!-- Botões Editar e Deletar-->
      
        
            <section class="container wrap">
              
              <div class = "edit_delet">
               
                <el-button type="primary" round size="medium" @click="getEntity(props.row)" >Editar</el-button>
                <el-popconfirm title="Tem certeza de que deseja excluir este item?" confirm-button-text='OK'
                cancel-button-text='Cancelar' @confirm="handleDelete(props.$index, props.row)">
                <el-button  slot="reference" size="medium" type="danger" round >
                  Deletar
                </el-button>
              </el-popconfirm>  
            </div>
          </section>

        </template>

      </el-table-column>
        
      <el-table-column label="DATA">
        <template #default="props">
          <h3>{{ moment(props.row.date).format("DD/MM/YYYY") }}</h3>
          
        </template> 
      </el-table-column>
      
      <el-table-column align="right">
        <template slot="header">
          <el-button size="mini" type="primary" @click="addNewEntity()">
            Adicionar
          </el-button>
        </template>
      </el-table-column>
    
    </el-table>

  <!-- Adicao de um novo treino -->
  <el-dialog 
        title="Adicionar novo registro de treino"
        :visible.sync="dialogFormVisible"
        :fullscreen="window.width < 768 ? true : false"
        center
      >
        <el-form 
          ref="ruleForm"
          :model="form" 
          :rules="rules">          
          <div>            
            <!-- Data -->
            <el-form-item label="Data" prop="date" required>  

              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="DD/MM/AAAA"
                size="large"
                style="width: 100%"
                format="dd/MM/yyyy"
              />
            </el-form-item>
            
            <!-- Pre treino -->
            <el-form-item> 
              <el-divider content-position="left">Dados Pré Treino</el-divider>

              <!-- Hora pre treino -->
              <el-form-item label="Hora pré treino" prop="date">
                <el-time-picker
                  v-model.number="form.horarioPre"
                  placeholder="HH:MM:SS"
                  type="date"
                  format="HH:mm:ss"
                  style="width: 100%"
                  :default-time="defaultTime"
                />
              </el-form-item>

              <!-- Informacoes do exame -->
              <el-form-item label="PAS(mmHg)" prop="pasPre">
                <el-row class="row" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pasPre" 
                      placeholder="PAS(mmHg)" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            
              <el-form-item label="PAD(mmHg)" prop="padPre">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.padPre" 
                      placeholder="PAD(mmHg)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="PES" prop="pseEPre">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pseEPre" 
                      placeholder="PSE-s" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="Glicemia(mg/dL)" prop="glicemiaPre">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.glicemiaPre" 
                      placeholder="Glicemia(mg/dL)" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form-item>
  
            <!-- Pos treino -->
            <el-form-item>
              <el-divider content-position="left">Dados Pós Treino</el-divider>
              
              <!-- Hora pos treino -->
              <el-form-item label="Hora pós treino" prop="date">
                <el-time-picker
                  v-model.number="form.horarioPos"
                  placeholder="HH:MM:SS"
                  type="date"
                  format="HH:mm:ss"
                  style="width: 100%"
                />
              </el-form-item>

              <!-- Informacoes do exame -->
              <el-form-item label="PAS(mmHg)" prop="pasPos">
                <el-row class="row" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pasPos" 
                      placeholder="PAS(mmHg)" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            
              <el-form-item label="PAD(mmHg)" prop="padPos">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.padPos" 
                      placeholder="PAD(mmHg)" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="PES" prop="pseEPos">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pseEPos" 
                      placeholder="PSE-s" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="Glicemia(mg/dL)" prop="glicemiaPos">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.glicemiaPos" 
                      placeholder="Glicemia(mg/dL)" 
                      type="number"
                      min="0"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form-item>
            
            <!-- Tempo total do treino -->
            <el-form-item label="Tempo total do treino(min)">
              <el-input 
                v-model="form.horarioTreino"
                placeholder="Tempo total do treino"
                type="number"
                min="0"
              >
              </el-input>
            </el-form-item>
  
            <!-- Observacao -->
            <el-form-item>
              <el-divider content-position="left">Observação</el-divider>
              <el-input v-model="form.observacao" type="textarea" placeholder="Observação" />
            </el-form-item>
          </div>
        </el-form>
        
        <!-- Botoes no fim do modal -->
        <div class="mt-10 flex w-full justify-center">
          <el-button 
            icon="el-icon-error" 
            @click="dialogFormVisible = false"
            >
              Cancelar
            </el-button>
          <el-button 
            type="primary" 
            icon="el-icon-success" 
            @click="handleConfirm()"
          >
            Confirmar
          </el-button>
        </div>
        <span slot="footer" class="dialog-footer">
        </span>
      </el-dialog>


  </div>

</template>

<script>
  import moment from 'moment';
  
  export default {
    name: "MonitoramentoPrePos",
    
    layout : "navAlunos", 
    data() {
      return {
        window: {
          width: 768,
          height: 768,
        },
        tableData: [],
        alunos: [],
        idAluno: "",
        value: "",
        options: [],
        defaultTime: "", 
        loading: false,
        dialogFormVisible: false,
        form: {
          date: "date",
          horarioPos : "date",
          horarioPre : "date",
          pasPre : "number",
          pasPos : "number",
          padPre: "number",
          padPos: "number",
          glicemiaPre: "number",
          glicemiaPos: "number",
          horarioTreino: "number",
          pseEPre: "number",
          pseEPos: "number",
          observacao: "string",
          student: [],
        },
        rules: {
          date: [
          
          ],
        },
      }
    },
    watch: {
      alunos() {
        this.setalunos()
      },
      value(){
        this.fetchData()
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.getStudents();
      this.test();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      
      moment,

      async getStudents() {
        const { data } = await this.$axios.get('http://localhost:3333/student/index');
        this.alunos = data;  
      },
      setalunos (){
        this.alunos.forEach(aluno => {
          this.options.push({
          label: aluno.name,
          value: aluno.id,
        })
        });
      },
      async fetchData() {
        this.loading = true;
        try {
          const { data } = await this.$axios.get(`/prepos/student/${this.value}`);
          this.tableData = data.data;       
        } catch (e) {
          this.$notify.error({
            title: 'Erro',
            message: 'Não foi possível carregar'
          });
        } finally {
          this.loading = false;
        }
      },
      getEntity(row) {
        this.form = { ...row };
        this.dialogFormVisible = true
      },
      addNewEntity() {
        this.resetForm();
        this.dialogFormVisible = true
      },
      filterHandler(value, row, column) {
        const { property } = column;
        return row[property] === value;
      },
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      handleConfirm() {
        if (this.form.id) {
          this.handleEdit();
        } else {
          this.handleCreate();
        }
      },
      handleCreate() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            try {
              await this.$axios.post("/prepos/create", 
              {
                date: this.form.date,
                horarioPre: this.form.horarioPre,
                horarioPos: this.form.horarioPos,
                pasPre: Number(this.form.pasPre),
                pasPos: Number(this.form.pasPos),
                padPre: Number(this.form.padPre),
                padPos: Number(this.form.padPos),
                glicemiaPre: Number(this.form.glicemiaPre),
                glicemiaPos: Number(this.form.glicemiaPos),
                pseEPre: Number(this.form.pseEPre),
                pseEPos: Number(this.form.pseEPos),
                horarioTreino: Number(this.form.horarioTreino),
                observacao: this.form.observacao,
                studentId: this.value
              }
              );
              this.$notify.success({
                title: 'Sucesso',
                message: 'monitoramento criada com sucesso!'
              });
              this.dialogFormVisible = false;
              this.fetchData();
            
            } catch (e) {
              this.$notify.error({
                title: 'Erro',
                message: 'Não foi possível criar o monitoramento'
              });
            }
          }
          else {
            this.$notify.error({
              title: 'Erro',
              message: 'Preencha os campos corretamente'
            });
          }
        });
      },
  
      handleEdit() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            try {
              await this.$axios.patch(`/prepos/update/${this.form.id}`, this.form);
              this.$notify.success({
                title: 'Sucesso',
                message: 'Categoria atualizada com sucesso!'
              });
              this.resetForm();
              this.dialogFormVisible = false;
              this.fetchData();
            } catch (e) {
              this.$notify.error({
                title: 'Erro',
                message: 'Não foi possível atualizar'
              });
            }
          }
          else {
            this.$notify.error({
              title: 'Erro',
              message: 'Preencha os campos corretamente'
            });
          }
        });
      },
  
      async handleDelete(index, row) {
        try {
          await this.$axios.delete(`/prepos/delete/${row.id}`);
          this.$notify.success({
            title: 'Sucesso',
            message: 'Deletado com sucesso'
          });
          this.tableData.splice(index, 1);
        } catch (e) {
          this.$notify.error({
            title: 'Erro',
            message: 'Não foi possível deletar'
          });
        }
      },  
      resetForm() {
        this.form = {
        }
      }
    },
  }
</script>
  
<style>

  h1{
    font-size: 25px;
    font-weight: bold;
  }

  p{
    color: rgba(44, 54, 50, 0.767);
  }


  h2{
    font-size: 17px;
    font-weight: bold;
    
  }
  
  h3{
    font-size: 20px;
    
  }

  @media only screen and (max-device-width: 507px) {
    h3{
      font-size: 17px;
      
    }
  }

  @media only screen and (max-device-width: 432px) {
    h3{
      font-size: 15px;
      
    }
  }

  @media only screen and (max-device-width: 395px) {
    h3{
      font-size: 13px;
      
    }
  }
  
  @media only screen and (max-device-width: 375px) {
    h3{
      font-size: 20px;
    }
  }

  @media only screen and (max-device-width: 361px) {
    h3{
      font-size: 18px;

    }
  }
  @media only screen and (max-device-width: 338px) {
    h3{
      font-size: 16px;

    }
  }
  .text_box{
    margin-left: 10%;
    margin-right: 5%;
    clear: both;
    width: 80%;
    font-size: larger;
    display: flex;
    text-align: justify;
    justify-content: center;
    align-items: center;

  }

  .pre_pos_div{
    margin: 5px;
    float: left;
    display: flex;
    flex: 1;
    flex-direction:row;
    text-align: center;
    

  }

  .edit_delet{
    text-align: center;
    flex: 1;
  }

  .pos_style{
    margin: 5px;
    float: right;

    flex: 1;
    text-align: center;
    

  }

  .pre_style{
    
    margin: 5px;
    float: left;
    flex: 1;
    text-align: center;
    
    

  }

  .info_gerais{
    margin: 5px;
    width: 160px;
    flex: 1;
    flex-direction:row;
    text-align: center;
    
  }
  .wrap {
    flex-wrap: wrap;
  }

  .container {
  
    margin: 0 auto;
    display: flex;
  
  }

  .el-button {
    margin: 4px 0;
  }

  @media only screen and (min-width: 768px) {
    .el-button {
      margin: 0 4px;
    }
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
