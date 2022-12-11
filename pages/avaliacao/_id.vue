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
            Criar
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-data-analysis"
            @click="$router.push('/avalgraficos/')"
          >
            Ver desempenho
          </el-button>
        </div>
      </template>

      <el-table :data="tableData" style="width: 100%" size="small">
        <el-table-column
          prop="data"
          label="Data"
          align="center"
          header-align="center"
          sortable
          :filters="dataFilterValues"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column
          prop="avaliacao"
          label="Avaliação"
          align="center"
          header-align="center"
          sortable
          :filters="evalutationFilterValues"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column
          prop="resultado"
          label="Resultado"
          align="center"
          header-align="center"
          sortable
          :filters="resultFilterValues"
          :filter-method="filterHandler"
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
                  @click="handleEdit(scope.row)"
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

        <el-button @click="$router.push('/avaliacao/criar/equilibrio')">
          Avaliação de Equilíbrio
        </el-button>

        <el-button @click="outerVisible = true">Mini Cognição</el-button>

        <el-button @click="outerVisible = true">
          Escala de Depressão Geriátrica
        </el-button>

        <el-button @click="$router.push('/avaliacao/criar/sarcopenia')">
          Avaliação de Sarcopenia
        </el-button>

        <el-button @click="outerVisible = true">Bateria Funcional</el-button>

        <el-button
          @click="
            $router.push('/avaliacao/criar/capacidadeCardiorrespiratoria')
          "
        >
          Capacidade Cardiorrespiratória
        </el-button>

        <el-button @click="$router.push('/avaliacao/criar/composicaoCorporal')">
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
import getEditRouter from '@/helpers/getEditRouter';
import formatDate from '@/helpers/formatDate';

export default {
  name: 'EvaluationIndex',
  components: {},
  data() {
    return {
      studentId: '',
      window: {
        width: 0,
        height: 0,
      },
      tableData: [],
      outerVisible: false,
      openDeleteModal: false,
      evaluationToBeDeleted: {},
    };
  },
  computed: {
    dataFilterValues() {
      const values = [...new Set(this.tableData.map(({ data }) => data))];

      return values.map((item) => ({ text: item, value: item }));
    },
    evalutationFilterValues() {
      const values = [
        ...new Set(this.tableData.map(({ avaliacao }) => avaliacao)),
      ];

      return values.map((item) => ({ text: item, value: item }));
    },
    resultFilterValues() {
      const values = [
        ...new Set(this.tableData.map(({ resultado }) => resultado)),
      ];

      return values.map((item) => ({ text: item, value: item }));
    },
  },
  async mounted() {
    this.studentId = this.$route.params.id;
    sessionStorage.setItem('id', this.studentId);

    await this.handleGetEvaluations();

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    filterHandler(value, row, column) {
      const { property } = column;
      return row[property] === value;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    handleOpenModalDelete(index, row) {
      this.openDeleteModal = true;
      this.evaluationToBeDeleted = {
        index,
        row,
      };
    },
    handleEdit(row) {
      this.$router.push(`${row.to}/${row.id}`);
    },
    async handleDelete() {
      this.openDeleteModal = false;
      await this.$axios.delete(
        `/evaluation/${this.evaluationToBeDeleted.row.id}`,
      );
      await this.handleGetEvaluations();
    },

    async handleGetEvaluations() {
      const { data: list } = await this.$axios.get('/evaluation', {
        params: {
          studentId: this.studentId,
          page: 1,
          limit: 20,
          orderBy: 'updatedAt',
        },
      });
      this.tableData = list.data.map((it) => ({
        id: it.id,
        avaliacao: getEditRouter(it.name).evaluationName,
        data: formatDate(it.date),
        resultado: it.result,
        to: getEditRouter(it.name).to,
      }));
    },
  },
};
</script>
.el-button {

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
