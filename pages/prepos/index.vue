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

  export default {
    components: {},
    data() {
      return {
        window: {
          width: 768,
          height: 768,
        },
        tableData: [],
        defaultTime: "",
        loading: false,
        dialogFormVisible: false,
        form: {
          date: "Date",
          horarioPre: "Date",
          horarioPos: "Date",
          pasPre: 0,
          pasPos: 0,
          padPre: 0,
          padPos: 0,
          glicemiaPre: 0,
          glicemiaPos: 0,
          pseEPre: 0,
          pseEPos: 0,
          horarioTreino: 0,
          observacao: "string"
        },
        rules: {

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
          const { data } = await this.$axios.get("/prepos/list");
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
                studentId: "9e8f2113-0651-4da4-ba26-1f93fe78071a"
              }
              );
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
