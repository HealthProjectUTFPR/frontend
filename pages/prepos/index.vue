

<template>
  <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
    <el-table v-loading="loading" :data="tableData">
      <el-table-column label="DATA" prop="date" />
      <el-table-column label="horarioPre" prop="horarioPre" />
      <el-table-column label="padPre" prop="padPre" />
      <el-table-column label="pasPre" prop="pasPre" />
      <el-table-column label="glicemiaPre" prop="glicemiaPre" />
      <el-table-column label="pseEPre" prop="pseEPre" />
      <el-table-column label="horarioPos" prop="horarioPos" />
      <el-table-column label="padPos" prop="padPos" />
      <el-table-column label="pasPos" prop="pasPos" />
      <el-table-column label="glicemiaPos" prop="glicemiaPos" />
      <el-table-column label="pseEPos" prop="pseEPos" />
      <el-table-column label="horarioTreino" prop="horarioTreino" />
      <el-table-column label="observacao" prop="observacao" />
      <el-table-column align="right">
        <template slot="header">
          <el-button size="mini" type="primary" @click="addNewEntity()">
            Adicionar
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
  