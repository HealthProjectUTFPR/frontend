<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center"
          ><strong
            >Bateria Funcional de Rikli e Jones (Bateria de Fullerron/Senior
            test)</strong
          ></span
        >
      </div>
      <div class="px-6 py-3">
        <div class="mb-3 flex flex-col">
          <span
            ><i
              >Materiais: Cadeira (43 cm), cronômetro, fita métrica, fita
              adesiva e régua</i
            ></span
          >
        </div>
      </div>
    </template>

    <div class="px-6 py-3">
      <div class="mb-3 flex flex-col">
        <span> <b>Idade: </b> {{ idade }} </span>
        <span> <b>Gênero:</b> {{ genero }} </span>
      </div>
    </div>

    <el-form
      ref="bateriaFunc"
      :rules="rules"
      :model="bateriaFunc"
      label-position="top"
    >
      <el-form-item
        label="1. Sentar e levantar (30 segundos)"
        prop="sitAndDown"
      >
        <el-input
          v-model.number="bateriaFunc.sitAndDown"
          placeholder=""
          type="number"
          min="0"
          step="1"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="2. Flexão de cotovelos (30 segundos)"
        prop="elbowFlexion"
      >
        <el-input
          v-model.number="bateriaFunc.elbowFlexion"
          placeholder=""
          type="number"
          min="0"
          step="1"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="3. Marcha estacionária (2 minutos)"
        prop="marchWouldPark"
      >
        <el-input
          v-model.number="bateriaFunc.marchWouldPark"
          placeholder=""
          type="number"
          min="0"
          step="1"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="4. Sentar e alcançar os pés"
        prop="sitAndReachYourFeet"
      >
        <el-input
          v-model.number="bateriaFunc.sitAndReachYourFeet"
          placeholder=""
          type="number"
          step="0.1"
        ></el-input>
      </el-form-item>

      <el-form-item label="5. Alcançar as costas" prop="reachTheBack">
        <el-input
          v-model.number="bateriaFunc.reachTheBack"
          placeholder=""
          type="number"
          step="0.1"
        ></el-input>
      </el-form-item>

      <el-form-item label="6. TUG (2,5 mestros ou 3 metros)" prop="tug">
        <el-input
          v-model.number="bateriaFunc.tug"
          placeholder=""
          type="number"
          step="0.1"
        ></el-input>
      </el-form-item>
    </el-form>

    <div class="mt-10 flex w-full justify-center">
      <el-button type="primary" icon="el-icon-success" @click="add()">
        Checar resultados
      </el-button>
    </div>

    <div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="result" label="Resultado" width="100">
        </el-table-column>
        <el-table-column prop="percent" label="Percentil" width="100">
        </el-table-column>
        <el-table-column prop="classif" label="Classificação">
        </el-table-column>
      </el-table>
    </div>

    <div class="mt-10 flex w-full justify-center">
      <el-button type="primary" icon="el-icon-success" @click="submitForm()">
        Salvar resultados
      </el-button>
    </div>
  </el-card>
</template>

<script>
import description from '@/components/dashboard/evaluationsForm/batForm/description.js'
export default {
  name: 'BatForm',
  data() {
    return {
      teste: 18,
      indiceTable1: 18,
      indiceTable2: 18,
      indiceTable3: 18,
      indiceTable4: 18,
      indiceTable5: 18,
      indiceTable6: 18,
      resultTable1: '',
      resultTable2: '',
      resultTable3: '',
      resultTable4: '',
      resultTable5: '',
      resultTable6: '',
      genero: 'mulher',
      idade: 92,
      result: '',
      percent: '',
      classif: '',
      tableData: [],
      bateriaFunc: {
        sitAndDown: '',
        elbowFlexion: '',
        marchWouldPark: '',
        sitAndReachYourFeet: '',
        reachTheBack: '',
        tug: '',
      },
      rules: {},
    }
  },
  methods: {
    gerarPercentil() {
      if (this.genero === 'homem') {
        let i = 0;
        let temp1 = 60;
        let temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.sitAndDown >= description.sentarLevantarHomem.dados[i]){
                this.indiceTable1 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.elbowFlexion >= description.flexaoCotoveloHomem.dados[i]){
                this.indiceTable2 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.marchWouldPark >= description.marchaEstacionariaHomem.dados[i]){
                this.indiceTable3 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.sitAndReachYourFeet >= description.sentarAlcancarHomem.dados[i]){
                this.indiceTable4 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.reachTheBack >= description.alcancarCostasHomem.dados[i]){
                this.indiceTable5 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        if (this.idade >= 60 && this.idade <= 64) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.sessentaAsessentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 65 && this.idade <= 69) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.sessentaecincoAsessentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 70 && this.idade <= 74) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.setentaAsetentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 75 && this.idade <= 79) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.setentaecincoAsetentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 80 && this.idade <= 84) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.oitentaAoitentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 85 && this.idade <= 89) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.oitentaecincoAoitentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 90 && this.idade <= 94) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.homemTUG.noventaAnoventaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        }
      } else {
        let i = 0;
        let temp1 = 60;
        let temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.sitAndDown >= description.sentarLevantarMulher.dados[i]){
                this.indiceTable1 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.elbowFlexion >= description.flexaoCotoveloMulher.dados[i]){
                this.indiceTable2 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.marchWouldPark >= description.marchaEstacionariaMulher.dados[i]){
                this.indiceTable3 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.sitAndReachYourFeet >= description.sentarAlcancarMulher.dados[i]){
                this.indiceTable4 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        i = 0;
        temp1 = 60;
        temp2 = 64;
        for(let j = 0; j < 7; j++){
          if(this.idade >= temp1 && this.idade <= temp2){
            for(i; i < 19 + i; i++){
              if(this.bateriaFunc.reachTheBack >= description.alcancarCostasMulher.dados[i]){
                this.indiceTable5 = i - (19 * j) + 1
                break;
              }
            }
          }
          i += 19
          temp1 += 5
          temp2 += 5
        }
        if (this.idade >= 60 && this.idade <= 64) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.sessentaAsessentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 65 && this.idade <= 69) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.sessentaecincoAsessentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 70 && this.idade <= 74) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.setentaAsetentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 75 && this.idade <= 79) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.setentaecincoAsetentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 80 && this.idade <= 84) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.oitentaAoitentaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 85 && this.idade <= 89) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.oitentaecincoAoitentaenove[i]
            ) {
              this.indiceTable6 = i
            }
          }
        } else if (this.idade >= 90 && this.idade <= 94) {
          for (let i = 0; i < 19; i++) {
            if (
              this.bateriaFunc.tug >=
              description.mulherTUG.noventaAnoventaequatro[i]
            ) {
              this.indiceTable6 = i
            }
          }
        }
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable1
        ] < 30
      ) {
        this.resultTable1 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable1
        ] < 55
      ) {
        this.resultTable1 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable1
        ] <= 70
      ) {
        this.resultTable1 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable1
        ] > 70
      ) {
        this.resultTable1 = 'ÓTIMO'
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable2
        ] < 30
      ) {
        this.resultTable2 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable2
        ] < 55
      ) {
        this.resultTable2 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable2
        ] <= 70
      ) {
        this.resultTable2 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable2
        ] > 70
      ) {
        this.resultTable2 = 'ÓTIMO'
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable3
        ] < 30
      ) {
        this.resultTable3 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable3
        ] < 55
      ) {
        this.resultTable3 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable3
        ] <= 70
      ) {
        this.resultTable3 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable3
        ] > 70
      ) {
        this.resultTable3 = 'ÓTIMO'
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable4
        ] < 30
      ) {
        this.resultTable4 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable4
        ] < 55
      ) {
        this.resultTable4 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable4
        ] <= 70
      ) {
        this.resultTable4 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable4
        ] > 70
      ) {
        this.resultTable4 = 'ÓTIMO'
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable5
        ] < 30
      ) {
        this.resultTable5 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable5
        ] < 55
      ) {
        this.resultTable5 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable5
        ] <= 70
      ) {
        this.resultTable5 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable5
        ] > 70
      ) {
        this.resultTable5 = 'ÓTIMO'
      }
      if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable6
        ] < 30
      ) {
        this.resultTable6 = 'RUIM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable6
        ] < 55
      ) {
        this.resultTable6 = 'REGULAR'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable6
        ] <= 70
      ) {
        this.resultTable6 = 'BOM'
      } else if (
        description.sentarLevantarHomem.classificacao_percentil[
          this.indiceTable6
        ] > 70
      ) {
        this.resultTable6 = 'ÓTIMO'
      }
    },
    add() {
      if(this.bateriaFunc.sitAndDown === '' || this.bateriaFunc.elbowFlexion === '' || 
         this.bateriaFunc.marchWouldPark === '' || this.bateriaFunc.sitAndReachYourFeet === '' || 
         this.bateriaFunc.reachTheBack === '' || this.bateriaFunc.tug === ''){
        console.log('erro')
        return
      }
      this.gerarPercentil()
      if (this.genero === 'homem') {
        this.tableData.push({
          result: this.bateriaFunc.sitAndDown,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable1
            ],
          classif: this.resultTable1,
        })
        this.tableData.push({
          result: this.bateriaFunc.elbowFlexion,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable2
            ],
          classif: this.resultTable2,
        })
        this.tableData.push({
          result: this.bateriaFunc.marchWouldPark,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable3
            ],
          classif: this.resultTable3,
        })
        this.tableData.push({
          result: this.bateriaFunc.sitAndReachYourFeet,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable4
            ],
          classif: this.resultTable4,
        })
        this.tableData.push({
          result: this.bateriaFunc.reachTheBack,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable5
            ],
          classif: this.resultTable5,
        })
        this.tableData.push({
          result: this.bateriaFunc.tug,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable6
            ],
          classif: this.resultTable6,
        })
      } else {
        this.tableData.push({
          result: this.bateriaFunc.sitAndDown,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable1
            ],
          classif: this.resultTable1,
        })
        this.tableData.push({
          result: this.bateriaFunc.elbowFlexion,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable2
            ],
          classif: this.resultTable2,
        })
        this.tableData.push({
          result: this.bateriaFunc.marchWouldPark,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable3
            ],
          classif: this.resultTable3,
        })
        this.tableData.push({
          result: this.bateriaFunc.sitAndReachYourFeet,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable4
            ],
          classif: this.resultTable4,
        })
        this.tableData.push({
          result: this.bateriaFunc.reachTheBack,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable5
            ],
          classif: this.resultTable5,
        })
        this.tableData.push({
          result: this.bateriaFunc.tug,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable6
            ],
          classif: this.resultTable6,
        })
      }

      this.bateriaFunc.sitAndDown = ''
      this.bateriaFunc.elbowFlexion = ''
      this.bateriaFunc.marchWouldPark = ''
      this.bateriaFunc.sitAndReachYourFeet = ''
      this.bateriaFunc.reachTheBack = ''
      this.bateriaFunc.tug = ''
    },
    submitForm() {
      const data = {
        sitAndDown: {
          result: this.bateriaFunc.sitAndDown,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable1
            ],
          classif: this.resultTable1,
        },
        elbowFlexion: {
          result: this.bateriaFunc.elbowFlexion,
          percent:
            description.sentarLevantarHomem.classificacao_percentil[
              this.indiceTable2
            ],
          classif: this.resultTable2,
        },
        marchWouldPark: {
          result: this.bateriaFunc.marchWouldPark,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable3
            ],
          classif: this.resultTable3,
        },
        sitAndReachYourFeet: {
          result: this.bateriaFunc.sitAndReachYourFeet,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable4
            ],
          classif: this.resultTable4,
        },
        reachTheBack: {
          result: this.bateriaFunc.reachTheBack,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable5
            ],
          classif: this.resultTable5,
        },
        tug: {
          result: this.bateriaFunc.tug,
          percent:
            description.sentarLevantarMulher.classificacao_percentil[
              this.indiceTable6
            ],
          classif: this.resultTable6,
        },
      }

      console.log(data)
      console.log(this.teste)
      console.log(this.indiceTable3)
      
    },
  },
}
</script>
