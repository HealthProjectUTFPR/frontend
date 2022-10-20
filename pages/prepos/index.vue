

<template>
  
  <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
    
    <el-table v-loading="loading" :data="tableData">
      
      <el-table-column type="expand">
        
        <template #default="props" >

          <!-- Pre e Pos-->
          
          <section class="container wrap">
           
            <div class= "scrool_div ">


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
               
                <el-button type="primary" round size="mini" @click="getEntity(props.row)" >Editar</el-button>
                <el-popconfirm title="Tem certeza de que deseja excluir este item?" confirm-button-text='OK'
                cancel-button-text='Cancelar' @confirm="handleDelete(props.$index, props.row)">
                <el-button  slot="reference" size="mini" type="danger" round >
                  Deletar
                </el-button>
              </el-popconfirm>  
            </div>
          </section>

        </template>

      </el-table-column>
        
      <el-table-column label="DATA">
        <template #default="props">
          <h3>{{ moment(props.row.date).format("DD/MM/YYYY HH:mm") }}</h3>
          
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

    <!-- Modal -->
      <el-dialog :title="`${form.id ? 'Editar' : 'Adicionar novo'} registro`" :visible.sync="dialogFormVisible">
        <el-form ref="ruleForm" :model="form" :rules="rules">
          
          <!-- Nome do registro -->
          <el-form-item label="Nome do treino" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-col>
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Data inicial"
              />
            </el-col>
          </el-form-item>
          
          <!-- Pre treino -->
          <el-form-item> Pré Treino </el-form-item>

          <!-- Data e Hora -->
          <el-form-item>
            <el-col>
              <el-time-picker 
                v-model="form.date2"
                placeholder="Horário"
              />
            </el-col>
          </el-form-item>

          <!-- Informacoes do exame -->
          <el-form-item>
            <el-col>
              <el-input v-model="form.pasPre" placeholder="PAS(mmHg)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.padPre" placeholder="PAD(mmHg)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.pseEPre" placeholder="PSE-s" autocomplete="off" style="width:auto"></el-input>
            </el-col>
            <el-col>
              <el-input v-model="form.glicemiaPre" placeholder="Glicemia(mg/dL)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.horarioPre" placeholder="Inicio do treino(min)" autocomplete="off" style="width:auto"></el-input>
            </el-col>
          </el-form-item>

          <!-- Pos treino -->
          <el-form-item> Pós Treino </el-form-item>

          <!-- Data e Hora -->
          <el-form-item>
            <el-col>
              <el-time-picker 
                v-model="form.date3"
                placeholder="Horário"
              />
            </el-col>
          </el-form-item>

          <!-- Informacoes do exame -->
          <el-form-item>
            <el-col>
              <el-input v-model="form.pasPos" placeholder="PAS(mmHg)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.padPos" placeholder="PAD(mmHg)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.pseEPos" placeholder="PSE-s" autocomplete="off" style="width:auto"></el-input>
            </el-col>
            <el-col>
              <el-input v-model="form.glicemiaPos" placeholder="Glicemia(mg/dL)" autocomplete="off" style="width:auto"></el-input>
              <el-input v-model="form.horarioPos" placeholder="Inicio do treino(min)" autocomplete="off" style="width:auto"></el-input>
            </el-col>
          </el-form-item>
          
          <!-- Tempo total do treino -->
          <el-form-item label="Tempo total do treino(min)">
            <el-input v-model="form.horarioTreino" autocomplete="off" style="width:240px"></el-input>
          </el-form-item>

          <!-- Observacao -->
          <el-form-item>
            <el-input v-model="form.desc" type="textarea" placeholder="Observação" />
          </el-form-item>
        </el-form>
        
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" plain @click="dialogFormVisible = false">Cancelar</el-button>
          <el-button type="success" plain @click="handleConfirm()">Confirmar</el-button>
        </span>
      </el-dialog>


  </div>

</template>

<script>
  import moment from 'moment';

  export default {
    data() {
      return {
        tableData: [],
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
        },
        rules: {
          date: [
            { required: true, message: 'O campo nome é obrigatório!', trigger: 'blur' },
            { min: 3, max: 70, message: 'O nome deve ser de no mínimo 3 carácteres e no máximo 70', trigger: 'blur' }
          ],
        },
      }
    },
  
    mounted() {
      this.fetchData();
    },
  
    methods: {
      moment,
      async fetchData() {
        this.loading = true;
        try {
          const { data } = await this.$axios.get("/prepos/get");
          this.tableData = data;
          
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
              await this.$axios.post("/prepos/create", this.form);
              this.$notify.success({
                title: 'Sucesso',
                message: 'Categoria criada com sucesso!'
              });
              this.dialogFormVisible = false;
              this.fetchData();
            } catch (e) {
              this.$notify.error({
                title: 'Erro',
                message: 'Não foi possível criar a categoria'
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
          name: '',
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  }

  .info_gerais::-webkit-scrollbar{
    width: 3px;
  }

  .info_gerais::-webkit-scrollbar-thumb{
    background-color: gray;
    border-radius: 10px;
  }

  .pos_style::-webkit-scrollbar{
    width: 3px;
  }

  .pos_style::-webkit-scrollbar-thumb{
    background-color: gray;
    border-radius: 10px;
  }

  .scrool_div::-webkit-scrollbar{
    width: 3px;
  }

  .scrool_div::-webkit-scrollbar-thumb{
    background-color: gray;
    border-radius: 10px

  }


  .scrool_div{
    margin: 5px;
    float: left;
    height: 200px;
    display: flex;
    flex: 1;
    flex-direction:row;
    text-align: center;
    overflow-y: scroll;

  }

  .edit_delet{
    text-align: center;
    flex: 1;
  }

  .pos_style{
    margin: 5px;
    float: right;
    width: 160px;
    height: 200px;
    flex: 1;
    text-align: center;
    

  }

  .pre_style{
    
    margin: 5px;
    float: left;
    width: 160px;
    height: 200px;
    flex: 1;
    text-align: center;
    
    

  }

  .info_gerais{
    margin: 5px;
    float: left;
    width: 160px;
    height: 200px;
    flex: 1;
    flex-direction:row;
    text-align: center;
    overflow-y: scroll;
    
  }
  .wrap {
	  flex-wrap: wrap;
  }

  .container {
  
    margin: 0 auto;
    display: flex;
  
  }

</style>
