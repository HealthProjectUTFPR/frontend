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
            ref="avdForm"
            :rules="rules"
            :model="avdForm"
            label-position="top"
        >
        <el-form-item label="Data" prop="date">
          <el-date-picker
              v-model="avdForm.date"
              type="date"
              placeholder="XX/XX/XXXX"
              size="large"
              style="width: 23em"
              format="dd/MM/yyyy"
          >
          </el-date-picker>
        </el-form-item>

          <el-form-item label="1. Banho - Banho de leito, Banheira ou Chuveiro" prop="bath">
            <span v-if="avdForm.bath===1">Não recebe assistência</span>
            <span v-if="avdForm.bath===2">Recebe assistência apenas para uma parte do corpo</span>
            <span v-if="avdForm.bath===3">Recebe assistência em mais de uma parte do corpo</span>
            <el-slider
                v-model="avdForm.bath" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="2. Vestir - pega roupa no armário e veste, incluindo roupas íntimas, roupas externas e fechos e cintos" prop="dress">
            <span v-if="avdForm.dress===1">Não recebe assistência</span>
            <span v-if="avdForm.dress===2">Recebe assistência apenas para amarrar os sapatos</span>
            <span v-if="avdForm.dress===3">Recebe assistência para pegar as roupas ou para vestir-se ou permanece parcial ou totalmente despido</span>
            <el-slider
                v-model="avdForm.dress" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="3. Ir ao banheiro - Dirige-se ao banheiro para urinar ao evacuar: faz sua higiene e se veste depois" prop="bathroom">
            <span v-if="avdForm.bathroom===1">Não recebe assistência(pode utilizar objetos de apoio, comadre ou urinol à noite, asvaziando pela manhã)</span>
            <span v-if="avdForm.bathroom===2">Recebe assistência para ir ao banheiro ou para higienizar-se ou para vestir-se após as eliminações ou para usar o urinol à noite</span>
            <span v-if="avdForm.bathroom===3">Recebe assistência em mais de uma parte do corpo</span>
            <el-slider
                v-model="avdForm.bathroom" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="4. Transferência - movimentação e locomoção" prop="transfer">
            <span v-if="avdForm.transfer===1">Deita-se e levanta-se da cama ou da cadeira sem assistência(pode utilizar um objeto de apoio como bengala ou andador)</span>
            <span v-if="avdForm.transfer===2">Deita-se e levanta-se da cama ou da cadeira com auxílio</span>
            <span v-if="avdForm.transfer===3">Não sai da cama</span>
            <el-slider
                v-model="avdForm.transfer" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="5. Continência - Controle sobre as funções" prop="salute">
            <span v-if="avdForm.salute===1">Tem controle sobre as funções de urinar e evacuar</span>
            <span v-if="avdForm.salute===2">Perdas urinárias ou fecais ocasionais("acidentes")</span>
            <span v-if="avdForm.salute===3">Supervisão para controlar urina e fezes, utiliza cateterismo ou é incontinente</span>
            <el-slider
                v-model="avdForm.salute" max="3"
                :step="1"
                show-stops
                input>
              </el-slider>
          </el-form-item>
          <el-form-item label="6. Alimentação - assistência para ingerir" prop="feeding">
            <span v-if="avdForm.feeding===1">Tem controle sobre as funções de urinar e evacuar</span>
            <span v-if="avdForm.feeding===2">Perdas urinárias ou fecais ocasionais("acidentes")</span>
            <span v-if="avdForm.feeding===3">Supervisão para controlar urina e fezes, utiliza cateterismo ou é incontinente</span>
            <el-slider
                v-model="avdForm.feeding" max="3"
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
          v-if="verifyCalc()===0"
          disabled
          type="primary"
          icon="el-icon-success"
          >Salvar
      </el-button>
      <el-button
          v-else
          type="primary"
          icon="el-icon-success"
          @click="submitForm('avdForm')"
          >Salvar
      </el-button>
    </div>
  </el-card>
</template>

<script>
import descriptions from '@/components/dashboard/evaluationsForms/avdForms/descriptions';
import formatDateToInput from '@/helpers/formatDateToInput'

export default {
  name: 'AvdForm',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      studentId: '',
      evaluationId: '',
      type: '',
      avdForm: {
        date : '',
        bath : 0,
        dress : 0,
        bathroom : 0,
        transfer : 0,
        salute : 0,
        feeding : 0,
        result : 0
      },
      rules: {
        date: [
          {
            type: 'date',
            required: true,
            message: 'Por favor, escolha uma data',
            trigger: 'change',
          },
        ],
      },
    }
  },
  computed:{
    total(){
      return this.avdForm.bath + this.avdForm.dress + this.avdForm.bathroom + this.avdForm.transfer + this.avdForm.salute + this.avdForm.feeding 
    },      
  },
  async mounted() {
      this.studentId = sessionStorage.getItem('id')
      if (this.$props.edit) {
        this.evaluationId = this.$route.params.id
        const { data } = await this.$axios.get(
          `/evaluation/${this.evaluationId}`,
          { params: { type: 'AVD' } }
        )
      setTimeout(() => {
        this.avdForm.date = formatDateToInput(data.date)
        this.avdForm.bath = data.bath
        this.avdForm.dress = data.dress
        this.avdForm.bathroom = data.bathroom
        this.avdForm.transfer = data.transfer
        this.avdForm.salute = data.salute
        this.avdForm.feeding = data.feeding
      }, 100)
    }
  },
  methods: {
    getTotalMsg() {
      if(this.avdForm.bath === 1 &&  this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1)
       return { description: descriptions['group-1'][0], type: 'success' };
      if((this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding > 1) ||
      (this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute > 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress  === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer > 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress > 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath > 1 &&  this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1))
       return { description: descriptions['group-2'][0], type: 'success' };
       if((this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1) ||
      (this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer > 1 && this.avdForm.salute === 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress  === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress === 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  === 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath ===1 &&  this.avdForm.dress === 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute === 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute > 1 && this.avdForm.feeding === 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer === 1 && this.avdForm.salute === 1 && this.avdForm.feeding ===1))
       return { description: descriptions['group-3'][0], type: 'success' };
       if((this.avdForm.bath === 1 && this.avdForm.dress === 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1) ||
      (this.avdForm.bath === 1 && this.avdForm.dress ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 &&  this.avdForm.dress > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute ===1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom ===1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer ===1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1))
       return { description: descriptions['group-4'][0], type: 'success' };
       if((this.avdForm.bath ===1 && this.avdForm.dress ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1) ||
      (this.avdForm.bath === 1 && this.avdForm.dress > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath === 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath ===1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 &&  this.avdForm.dress ===1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  ===1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute ===1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom ===1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute ===1 && this.avdForm.feeding ===1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer ===1 && this.avdForm.salute > 1 && this.avdForm.feeding ===1))
       return { description: descriptions['group-5'][0], type: 'success' };
       if((this.avdForm.bath === 1 && this.avdForm.dress > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1) ||
      (this.avdForm.bath >  1 && this.avdForm.dress === 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath >  1 && this.avdForm.dress  > 1 && this.avdForm.bathroom === 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer === 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 && this.avdForm.dress  > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute === 1 && this.avdForm.feeding > 1)||
      (this.avdForm.bath > 1 &&  this.avdForm.dress > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding  === 1))
       return { description: descriptions['group-6'][0], type: 'success' };
       if((this.avdForm.bath > 1 && this.avdForm.dress > 1 && this.avdForm.bathroom > 1 && this.avdForm.transfer > 1 && this.avdForm.salute > 1 && this.avdForm.feeding > 1))
        return { description: descriptions['total-descriptions'][0], type: 'success' };
      return 0;
    },
    calc(){
        this.result = this.avdForm.bath + this.avdForm.dress + this.avdForm.bathroom + this.avdForm.transfer + this.avdForm.salute + this.avdForm.feeding 
    },
    verifyCalc(){
      if(this.avdForm.bath !== 0 &&  this.avdForm.dress !== 0 && this.avdForm.bathroom !== 0 && this.avdForm.transfer !== 0  && this.avdForm.salute !== 0 && this.avdForm.feeding !== 0)
        return 1
      else 
        return 0
    },
    submitForm(formName) {
      this.calc()
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            if (this.$props.edit) {
              await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                type: 'AVD',
                data: this.avdForm,
              })
              this.$message({
                message: 'Avaliação atualizada com sucesso!',
                type: 'success',
              })
            } else {
              const evaluation = {
                ...this.avdForm,
              }
              await this.$axios.post(`/evaluation/${this.studentId}`, {
                type: 'AVD',
                data: evaluation,
              })
              this.$message({
                message: 'Avaliação criada com sucesso!',
                type: 'success',
              })
            }
            setTimeout(() => {
              this.$router.push({ path: '/' })
            }, 500)
          } catch (error) {
            this.$message.error({ message: `${error.response.data.message}` })
          }
        }
        return false
      })
    },
  }
};
</script> 