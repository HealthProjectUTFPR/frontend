<template>
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
      <el-table v-loading="loading" :data="tableData">
        <el-table-column label="Nome" prop="name" />
        <el-table-column align="right">
          <template slot="header">
            <el-button size="mini" type="primary" @click="addNewEntity()">
              Novo Registro
            </el-button>

          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="getEntity(scope.row)">Editar</el-button>
            <el-popconfirm title="Tem certeza de que deseja excluir este item?" confirm-button-text='OK'
              cancel-button-text='Cancelar' @confirm="handleDelete(scope.$index, scope.row)">
              <el-button slot="reference" size="mini" type="danger">
                Deletar
              </el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

  <!-- Adicao de um novo treino -->
      <el-dialog 
        title="Adicionar novo registro de treino"
        :visible.sync="dialogFormVisible"
        center
      >
        <el-form 
          ref="ruleForm"
          :class="form-inline"
          :model="form" 
          :rules="rules">          
          <div>
            <!-- Nome do registro -->
            <el-form-item 
              prop="name"
              label="Nome do treino" 
            >
              <el-input v-model="form.name" 
                autocomplete="off"
                placeholder="Treino"  
                type="string"
                size="large"
                style="width: 100%"
              >
              </el-input>
            </el-form-item>
            
            <!-- Data -->
            <el-form-item label="Data" prop="date" required>
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  placeholder="XX/XX/XXXX"
                  size="large"
                  style="width: 100%"
                  format="dd/MM/yyyy"
              >
              </el-date-picker>
            </el-form-item>
            
            <!-- Pre treino -->
            <el-form-item> 
              <el-divider content-position="left">Dados Pré Treino</el-divider>

              <!-- Data e Hora -->
              <el-form-item label="Tempo" prop="time">
                <el-input
                  v-model.number="form.time"
                  placeholder="Tempo"
                  type="number"
                  min="0"
                  step=".01"
                ></el-input>
              </el-form-item>

              <!-- Informacoes do exame -->
              <el-form-item label="PAS(mmHg)" prop="pasmmhg">
                <el-row class="row" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pasPre" 
                      placeholder="PAS(mmHg)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            
              <el-form-item label="PAD(mmHg)" prop="padmmhg">
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

              <el-form-item label="PES" prop="pses">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pseEPre" 
                      placeholder="PSE-s" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="Glicemia(mg/dL)" prop="glicemiamgdL">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.glicemiaPre" 
                      placeholder="Glicemia(mg/dL)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form-item>
  
            <!-- Pos treino -->
            <el-form-item>
              <el-divider content-position="left">Dados Pós Treino</el-divider>
              
              <!-- Data e Hora -->
              <el-form-item label="Tempo" prop="time">
                <el-input
                  v-model.number="form.time"
                  placeholder="Tempo"
                  type="number"
                  min="0"
                  step=".01"
                ></el-input>
              </el-form-item>

              <!-- Informacoes do exame -->
              <el-form-item label="PAS(mmHg)" prop="pasmmhg">
                <el-row class="row" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pasPos" 
                      placeholder="PAS(mmHg)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            
              <el-form-item label="PAD(mmHg)" prop="padmmhg">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.padPos" 
                      placeholder="PAD(mmHg)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="PES" prop="pses">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.pseEPos" 
                      placeholder="PSE-s" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>

              <el-form-item label="Glicemia(mg/dL)" prop="glicemiamgdL">
                <el-row class="row-bg" justify="space-evenly">
                  <el-col class="col-md-6 mb-3">
                    <el-input v-model="form.glicemiaPos" 
                      placeholder="Glicemia(mg/dL)" 
                      type="number"
                      min="0"
                      step=".01"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form-item>
            
            <!-- Tempo total do treino -->
            <el-form-item label="Tempo total do treino(min)">
              <el-input v-model="form.horarioTreino" autocomplete="off" style="width:240px"></el-input>
            </el-form-item>
  
            <!-- Observacao -->
            <el-form-item>
              <el-divider content-position="left">Observação</el-divider>
              <el-input v-model="form.desc" type="textarea" placeholder="Observação" />
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
  
  export default {
    data() {
      return {
        window: {
          width: 0,
          height: 0,
        },
        tableData: [],
        loading: false,
        dialogFormVisible: false,
        form: {
          name: '',
          date: "Date",
          horarioPre: "time",
          pasPre: "number",
          padPre: "number",
          pseEPre: "number",
          glicemiaPre: "number",
          horarioPos: "time",
          pasPos: "number",
          padPos: "number",
          pseEPos: "number",
          glicemiaPos: "number",
          horarioTreino: "time",
          observacao: "string"
        },
        rules: {
          name: [
            { required: true, message: 'O campo nome é obrigatório!', trigger: 'blur' },
            { min: 3, max: 70, message: 'O nome deve ser de no mínimo 3 carácteres e no máximo 70', trigger: 'blur' }
          ],
        },
      }
    },

    mounted() {
    window.addEventListener('resize', this.handleResize);
    },

    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
  
    methods: {
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
