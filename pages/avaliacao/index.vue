<template>
  <div>
    <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-between items-center	">
          <span class="text-center w-full font-black">HISTÓRICO DE AVALIAÇÕES</span>
        <el-button
          type="primary"
          icon="el-icon-circle-plus"
          @click="outerVisible = true"
          >
          CRIAR
        </el-button>
      </div>
    </template>

    <el-table
      :data="tableData"
      style="width: 100%"
      
    >
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
      <el-table-column
        
      >
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
                @click="handleDelete(scope.$index, scope.row)"></el-button>
            </el-tooltip>
          </div>
      </template>

      </el-table-column>
    </el-table>
  </el-card>

  <el-dialog title="Escolha uma avaliação para fazer" :visible.sync="outerVisible">
    <div class="flex justify-between items-baseline flex-col">
      <div class="flex flex-col gap-4 w-full">
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Avaliação de fragilidade
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Independência nas atividades diárias
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Avaliação de equilíbrio
        </el-button>
      </div>

      <div class="flex flex-col gap-4 mt-4 w-full">
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Mini cognição
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Escala de depressão geriátrica
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Avaliação de sarcopênia
        </el-button>
      </div>

      <div class="flex flex-col gap-4 mt-4 w-full">
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
         Bateria funcional
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Capacidade cardio respiratória
        </el-button>
    
        <el-button
          type="secondary"
          @click="outerVisible = true"
          >
          Composição corporal
        </el-button>
      </div>

  </div>


    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Fechar</el-button>
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
      tableData: [{
        data: '2016-05-03',
        avaliacao: 'Tom',
        pontuacao: 'No. 189, Grove St, Los Angeles',
        resultado: 'No. 189, Grove St, Los Angeles'

      }, {
        data: '2016-05-02',
        avaliacao: 'Tom',
        resultado: 'No. 189, Grove St, Los Angeles',
        pontuacao: 'No. 189, Grove St, Los Angeles'
      }, {
        data: '2016-05-04',
        avaliacao: 'Tom',
        resultado: 'No. 189, Grove St, Los Angeles',
        pontuacao: 'No. 189, Grove St, Los Angeles'
      }, {
        data: '2016-05-01',
        avaliacao: 'Tom',
        resultado: 'No. 189, Grove St, Los Angeles',
        pontuacao: 'No. 189, Grove St, Los Angeles',
      }],
      outerVisible: false,
        innerVisible: false
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      return 'teste';
    },
    goToSarcopenia() {
      this.$router.push('/evaluation/create/sarcopenia');
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
};
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