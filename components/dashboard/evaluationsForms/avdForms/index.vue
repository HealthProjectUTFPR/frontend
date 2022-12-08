<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase">INDEPENDÊNCIA NAS ATIVIDADES DE VIDA DIÁRIA (AVD)</span>
      </div>
    </template>

    <div class="px-6 py-3">
      <div class="mb-3 flex flex-col">
        <el-form
            ref="data"
            :rules="rules"
            :model="data"
            label-position="top"
        >
          <el-form-item label="1. Banho - Banho de leito, Banheira ou Chuveiro" prop="bath">
            <span v-if="data.bath===1">Não recebe assistência</span>
            <span v-if="data.bath===2">Recebe assistência apenas para uma parte do corpo</span>
            <span v-if="data.bath===3">Recebe assistência em mais de uma parte do corpo</span>
            <el-slider
                v-model="data.bath" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="2. Vestir - pega roupa no armário e veste, incluindo roupas íntimas, roupas externas e fechos e cintos" prop="dress">
            <span v-if="data.dress===1">Não recebe assistência</span>
            <span v-if="data.dress===2">Recebe assistência apenas para amarrar os sapatos</span>
            <span v-if="data.dress===3">Recebe assistência para pegar as roupas ou para vestir-se ou permanece parcial ou totalmente despido</span>
            <el-slider
                v-model="data.dress" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="3. Ir ao banheiro - Dirige-se ao banheiro para urinar ao evacuar: faz sua higiene e se veste depois" prop="bathroom">
            <span v-if="data.bathroom===1">Não recebe assistência(pode utilizar objetos de apoio, comadre ou urinol à noite, asvaziando pela manhã)</span>
            <span v-if="data.bathroom===2">Recebe assistência para ir ao banheiro ou para higienizar-se ou para vestir-se após as eliminações ou para usar o urinol à noite</span>
            <span v-if="data.bathroom===3">Recebe assistência em mais de uma parte do corpo</span>
            <el-slider
                v-model="data.bathroom" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="4. Transferência - movimentação e locomoção" prop="transfer">
            <span v-if="data.transfer===1">Deita-se e levanta-se da cama ou da cadeira sem assistência(pode utilizar um objeto de apoio como bengala ou andador)</span>
            <span v-if="data.transfer===2">Deita-se e levanta-se da cama ou da cadeira com auxílio</span>
            <span v-if="data.transfer===3">Não sai da cama</span>
            <el-slider
                v-model="data.transfer" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="5. Continência - Controle sobre as funções" prop="salute">
            <span v-if="data.salute===1">Tem controle sobre as funções de urinar e evacuar</span>
            <span v-if="data.salute===2">Perdas urinárias ou fecais ocasionais("acidentes")</span>
            <span v-if="data.salute===3">Supervisão para controlar urina e fezes, utiliza cateterismo ou é incontinente</span>
            <el-slider
                v-model="data.salute" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="6. Alimentação - assistência para ingerir" prop="feeding">
            <span v-if="data.feeding===1">Tem controle sobre as funções de urinar e evacuar</span>
            <span v-if="data.feeding===2">Perdas urinárias ou fecais ocasionais("acidentes")</span>
            <span v-if="data.feeding===3">Supervisão para controlar urina e fezes, utiliza cateterismo ou é incontinente</span>
            <el-slider
                v-model="data.feeding" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      <strong class="mr-2">TOTAL:</strong>
      {{ total }}
    </div>

    <el-divider content-position="center">Descrição</el-divider>
    <el-alert
      :title="`${total} PONTOS`"
      :type="getTotalMsg().type"
      :description="getTotalMsg().description"
      show-icon
      :closable="false">
    </el-alert>

    <div class="mt-10 flex w-full justify-center">
      <el-button
          v-if="getTotalMsg()===0"
          disabled
          type="primary"
          icon="el-icon-success"
          >Salvar
      </el-button>
      <el-button
          v-else
          type="primary"
          icon="el-icon-success"
          @click="submitForm()"
          >Salvar
      </el-button>
    </div>
  </el-card>
</template>

<script>
import descriptions from '@/components/dashboard/evaluationsForms/avdForms/descriptions';

export default {
  provide() {
  },
  data() {
    return {
      studentId: '32047538-7289-4eb1-b0ce-82b3740e074b',
      type: '',
      data: {
        date : '',
        bath : 0,
        dress : 0,
        bathroom : 0,
        transfer : 0,
        salute : 0,
        feeding : 0,
        result : 0
      }
    };
  },
  computed:{
    total(){
      return this.data.bath + this.data.dress + this.data.bathroom + this.data.transfer + this.data.salute + this.data.feeding 
    },      
  },
  methods: {
    getTotalMsg() {
      if(this.data.bath === 1 &&  this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding === 1)
       return { description: descriptions['group-1'][0], type: 'success' };
      if((this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding > 1) ||
      (this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute > 1 && this.data.feeding === 1)||
      (this.data.bath === 1 && this.data.dress  === 1 && this.data.bathroom === 1 && this.data.transfer > 1 && this.data.salute === 1 && this.data.feeding === 1)||
      (this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom > 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding === 1)||
      (this.data.bath === 1 && this.data.dress > 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding === 1)||
      (this.data.bath > 1 &&  this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding === 1))
       return { description: descriptions['group-2'][0], type: 'success' };
       if((this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute > 1 && this.data.feeding > 1) ||
      (this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer > 1 && this.data.salute === 1 && this.data.feeding > 1)||
      (this.data.bath === 1 && this.data.dress  === 1 && this.data.bathroom === 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding === 1)||
      (this.data.bath ===1 && this.data.dress === 1 && this.data.bathroom > 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress  === 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding === 1)||
      (this.data.bath ===1 &&  this.data.dress === 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute === 1 && this.data.feeding === 1)||
      (this.data.bath > 1 && this.data.dress  === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  === 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute > 1 && this.data.feeding === 1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom === 1 && this.data.transfer === 1 && this.data.salute === 1 && this.data.feeding ===1))
       return { description: descriptions['group-3'][0], type: 'success' };
       if((this.data.bath === 1 && this.data.dress === 1 && this.data.bathroom === 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1) ||
      (this.data.bath === 1 && this.data.dress ===1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath === 1 && this.data.dress  ===1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress ===1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath ===1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath ===1 &&  this.data.dress > 1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath ===1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute ===1 && this.data.feeding ===1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom ===1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer ===1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding ===1))
       return { description: descriptions['group-4'][0], type: 'success' };
       if((this.data.bath ===1 && this.data.dress ===1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1) ||
      (this.data.bath === 1 && this.data.dress > 1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath === 1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath ===1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath > 1 &&  this.data.dress ===1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  ===1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute ===1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom ===1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding ===1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute ===1 && this.data.feeding ===1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer ===1 && this.data.salute > 1 && this.data.feeding ===1))
       return { description: descriptions['group-5'][0], type: 'success' };
       if((this.data.bath === 1 && this.data.dress > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1) ||
      (this.data.bath >  1 && this.data.dress === 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath >  1 && this.data.dress  > 1 && this.data.bathroom === 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress > 1 && this.data.bathroom > 1 && this.data.transfer === 1 && this.data.salute > 1 && this.data.feeding > 1)||
      (this.data.bath > 1 && this.data.dress  > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute === 1 && this.data.feeding > 1)||
      (this.data.bath > 1 &&  this.data.dress > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding  === 1))
       return { description: descriptions['group-6'][0], type: 'success' };
       if((this.data.bath > 1 && this.data.dress > 1 && this.data.bathroom > 1 && this.data.transfer > 1 && this.data.salute > 1 && this.data.feeding > 1))
        return { description: descriptions['total-descriptions'][0], type: 'success' };
      return 0;
    },
    calc(){
        this.result = this.data.bath + this.data.dress + this.data.bathroom + this.data.transfer + this.data.salute + this.data.feeding 
    },
    dateNow(){
      const date = new Date();
      this.data.date = date.replace('dd', date.getDate()).replace('mm-', date.getMonth() + 1).replace('aaaa-', date.getFullYear());
    },
    async submitForm() {
      this.calc();
      this.dateNow();
      const evaluation = {
        ...this.data,
                result: this.result,
            };
      try {
        await this.$axios.post(
          `/evaluation/${this.studentId}`,
        {
          type: "AVD",
          data: evaluation,
        },);} 
      catch (error){
        console.log(error);
      }
        this.$router.go();
    }
  }
};
</script> 