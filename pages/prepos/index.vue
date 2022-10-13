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
  
  export default {
    data() {
      return {
        tableData: [],
        loading: false,
        dialogFormVisible: false,
        form: {
          name: '',
          date: "Date",
          horarioPre: "Date",
          pasPre: "number",
          padPre: "number",
          pseEPre: "number",
          glicemiaPre: "number",
          horarioPos: "Date",
          pasPos: "number",
          padPos: "number",
          pseEPos: "number",
          glicemiaPos: "number",
          horarioTreino: "number",
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
      this.fetchData();
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
  