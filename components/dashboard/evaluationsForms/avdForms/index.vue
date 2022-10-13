<template>
    <el-card class="box-card">
      <template #header>
        <div class="flex h-full w-full justify-center">
          <span class="text-center font-extrabold uppercase">INDEPENDÊNCIA NAS ATIVIDADES DE VIDA DIÁRIA (AVD)</span>
        </div>
      </template>
  
      <div class="px-6 py-3">
        <div class="mb-3 flex flex-col">
            <b><span>1. Banho - Banho de leito, Banheira ou Chuveiro</span></b>
            <span v-if="value1===1">Não recebe assistência</span>
            <span v-if="value1===2">Recebe assistência apenas para uma parte do corpo</span>
            <span v-if="value1===3">Recebe assistência em mais de uma parte do corpo</span>
            <template>
              <div class="block">
                <span class="demonstration"></span>
                <el-slider
                  v-model="value1" max="3"
                  :step="1"
                  show-stops
                  input>
                </el-slider>
              </div>
            </template>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>2. Vestir - pega roupa no armário e veste, incluindo roupas íntimas, roupas externas e fechos e cintos</span></b>
          <span v-if="value2===1">Não recebe assistência</span>
          <span v-if="value2===2">Recebe assistência apenas para amarrar os sapatos</span>
          <span v-if="value2===3">Recebe assistência para pegar as roupas ou para vestir-se ou permanece parcial ou totalmente despido</span>
          <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-slider
                v-model="value2" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
            </div>
          </template>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>3. Ir ao banheiro - Dirige-se ao banheiro para urinar ao evacuar: faz sua higiene e se veste depois</span></b>
          <span v-if="value3===1">Não recebe assistência(pode utilizar objetos de apoio, comadre ou urinol à noite, asvaziando pela manhã)</span>
          <span v-if="value3===2">Recebe assistência para ir ao banheiro ou para higienizar-se ou para vestir-se após as eliminações ou para usar o urinol à noite</span>
          <span v-if="value3===3">Recebe assistência em mais de uma parte do corpo</span>
          <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-slider
                v-model="value3" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
            </div>
          </template>
        </div>
  
        <div class="mb-3 flex flex-col">
            <b><span>4. Transferência - movimentação e locomoção</span></b>
            <span v-if="value4===1">Deita-se e levanta-se da cama ou da cadeira sem assistência(pode utilizar um objeto de apoio como bengala ou andador)</span>
            <span v-if="value4===2">Deita-se e levanta-se da cama ou da cadeira com auxílio</span>
            <span v-if="value4===3">Não sai da cama</span>
            <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-slider
                v-model="value4" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
            </div>
          </template>
        </div>
  
        <div class="mb-3 flex flex-col">
            <b><span>5. Continência - Controle sobre as funções</span></b>
            <span v-if="value5===1">Tem controle sobre as funções de urinar e evacuar</span>
            <span v-if="value5===2">Perdas urinárias ou fecais ocasionais("acidentes")</span>
            <span v-if="value5===3">Supervisão para controlar urina e fezes, utiliza cateterismo ou é incontinente</span>
            <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-slider
                v-model="value5" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
            </div>
          </template>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>6. Alimentação - assistência para ingerir</span></b>
          <span v-if="value6===1">Não recebe assistência</span>
          <span v-if="value6===2">Assistência apenas para cortar carne ou passar manteiga no pão</span>
          <span v-if="value6===3">Recebe assistência para se alimentar ou é alimentado parcial ou totalmente por sonda enteral ou parenteral</span>
          <template>
            <div class="block">
              <span class="demonstration"></span>
              <el-slider
                v-model="value6" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
            </div>
          </template>
        </div>
  
        <div>
          <strong class="mr-2">TOTAL:</strong>
          {{ total }}
        </div>
  
        <el-divider content-position="center">Descrição</el-divider>
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="number"
                label="Index AVD"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="Tipo de Classificação"
                width="925">
              </el-table-column>
            </el-table>
          </template>
  
          <div class="mt-10 flex w-full justify-center">
            <el-button
                type="primary"
                icon="el-icon-success"
                @click="submitForm()"
                >Salvar
            </el-button>
        </div>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
    provide() {
    },
    data() {
      return {
        value1: 0, 
        value2: 0, 
        value3: 0, 
        value4: 0, 
        value5: 0, 
        value6: 0,
        tableData: [{
          number: '0',
          name: 'Independente nas seis funções(banhar-se, vestir-se, alimentação, ir ao banheiro, transferência e continência)',
        }, {
          number: '1',
          name: 'Independente em cinco funções e dependente em uma função'
        }, {
          number: '2',
          name: 'Independente em quatro funções e dependente em duas funções'
        }, {
          number: '3',
          name: 'Independente em três funções e dependente em três funções'
        }, {
          number: '4',
          name: 'Independente em duas funções e dependente em quatro funções'
        }, {
          number: '5',
          name: 'Independente em uma função e dependente em cinco funções'
        }, {
          number: '6',
          name: 'Dependente para todas as funções'
          }
        ]
      };
    },
    computed:{
      total(){
        return this.value1 + this.value2 + this.value3 + this.value4 + this.value5 + this.value6
      }
    }
};
  </script>