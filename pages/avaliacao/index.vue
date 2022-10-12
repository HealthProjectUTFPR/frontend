<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="flex h-full w-full justify-between items-center">
          <span class="text-center w-full font-black"
            >HISTÓRICO DE AVALIAÇÕES</span
          >
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            @click="outerVisible = true"
          >
            CRIAR
          </el-button>
        </div>
      </template>

      <el-table :data="tableData" style="width: 100%" size="small">
        <el-table-column
          prop="data"
          label="Data"
          align="center"
          header-align="center"
        ></el-table-column>
        <el-table-column
          prop="avaliacao"
          label="Avaliação"
          align="center"
          header-align="center"
        ></el-table-column>
        <el-table-column
          prop="resultado"
          label="Resultado"
          align="center"
          header-align="center"
        ></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <div class="flex flex-col md:flex-row items-center justify-center">
              <el-tooltip effect="dark" content="Editar" placement="bottom">
                <el-button
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  class="m-0"
                ></el-button>
              </el-tooltip>

              <el-tooltip effect="dark" content="Remover" placement="bottom">
                <el-button
                  class="md:m-0 mt-1"
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleOpenModalDelete(scope.$index, scope.row)"
                ></el-button>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- CAIXA PARA CRIAR AVALIAÇÃO -->
    <el-dialog
      title="Escolha uma Avaliação"
      :visible.sync="outerVisible"
      :fullscreen="window.width < 768 ? true : false"
      center
    >
      <div
        class="
          flex
          justify-between
          flex-col
          gap-4
          md:max-h-[50vh] md:overflow-y-scroll
        "
      >
        <el-button @click="outerVisible = true">
          Avaliação de Fragilidade
        </el-button>

        <el-button @click="outerVisible = true">
          Independência nas Atividades Diárias
        </el-button>

        <el-button @click="outerVisible = true">
          Avaliação de Equilíbrio
        </el-button>

        <el-button @click="outerVisible = true">Mini Cognição</el-button>

        <el-button @click="outerVisible = true">
          Escala de Depressão Geriátrica
        </el-button>

        <el-button @click="outerVisible = true">
          Avaliação de Sarcopenia
        </el-button>

        <el-button @click="outerVisible = true">Bateria Funcional</el-button>

        <el-button @click="outerVisible = true">
          Capacidade Cardiorrespiratória
        </el-button>

        <el-button @click="outerVisible = true">
          Composição Corporal
        </el-button>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false"
          >Fechar</el-button
        >
      </div>
    </el-dialog>

    <!-- CAIXA PARA DELETAR AVALIAÇÃO -->
    <el-dialog
      :visible.sync="openDeleteModal"
      class="m-[30px]"
      :width="window.width < 768 ? '90%' : '50%'"
      center
    >
      <span slot="title">Deseja realmente remover esta avaliação?</span>

      <p class="text-center text-xs">
        A avaliação {{ evaluationToBeDeleted?.row?.avaliacao }}, realizada no
        dia {{ evaluationToBeDeleted?.row?.data }}, será ocultada após clicar no
        botão Deletar.
      </p>

      <div slot="footer" class="dialog-footer flex justify-center gap-[10px]">
        <el-button type="danger" plain @click="handleDelete()">
          Deletar
        </el-button>
        <el-button type="primary" @click="openDeleteModal = false">
          Cancelar
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EvaluationIndex',
  components: {},
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      tableData: [
        {
          data: '12/10/2022',
          avaliacao: 'Sarcopenia',
          resultado: 'Com Sarcopenia',
        },
        {
          data: '12/01/2022',
          avaliacao: 'Sarcopenia',
          resultado: 'Sem Sarcopenia',
        },
      ],
      outerVisible: false,
      openDeleteModal: false,
      evaluationToBeDeleted: {},
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return 'teste'
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    goToSarcopenia() {
      this.$router.push('/evaluation/create/sarcopenia')
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleOpenModalDelete(index, row) {
      this.openDeleteModal = true
      this.evaluationToBeDeleted = {
        index,
        row,
      }
    },
    handleDelete() {
      console.log(this.evaluationToBeDeleted)
    },
  },
}
</script>

<style scoped>
.el-button {
  margin: 4px 0;
}

@media only screen and (min-width: 768px) {
  .el-button {
    margin: 0 4px;
  }
}
</style>
