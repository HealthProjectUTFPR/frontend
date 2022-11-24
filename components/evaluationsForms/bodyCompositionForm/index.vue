<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center">
      <span class="text-center font-extrabold uppercase"
        >AVALIAÇÃO DA COMPOSIÇÃO CORPORAL</span
      >
    </div>

    <el-form
      ref="bodyCompositionForm"
      :rules="rules"
      :model="bodyCompositionForm"
      label-position="top"
    >
      <div class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        <el-form-item label="Data" prop="date">
          <el-date-picker
            v-model="bodyCompositionForm.date"
            type="date"
            placeholder="XX/XX/XXXX"
            size="large"
            style="width: 100%"
            format="dd/MM/yyyy"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item
        label="Peso (kg)"
          prop="weight"
        >
          <el-input
            v-model.number="bodyCompositionForm.weight"
            placeholder="Peso (kg)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item label="Cintura (cm)" prop="waist">
          <el-input
            v-model.number="bodyCompositionForm.waist"
            placeholder="Cintura (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Quadril (cm)"
          prop="hip"
        >
          <el-input
            v-model.number="bodyCompositionForm.hip"
            placeholder="Quadril (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Cintura/Estatura"
          prop="estimatedMuscleMass"
        >
          <el-input
            v-model.number="waistEstature"
            placeholder="Este campo será calculado automaticamente..."
            type="number"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Cintura/Quadril"
          prop="estimatedMuscleMass"
        >
          <el-input
            v-model.number="waistHip"
            placeholder="Este campo será calculado automaticamente..."
            type="number"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="IMC"
          prop="estimatedMuscleMass"
        >
          <el-input
            v-model.number="imc"
            placeholder="Este campo será calculado automaticamente..."
            type="number"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Subescapula (cm)"
          prop="scapula"
        >
          <el-input
            v-model.number="bodyCompositionForm.scapula"
            placeholder="Subescapula (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Tríceps (cm)"
          prop="triceps"
        >
          <el-input
            v-model.number="bodyCompositionForm.triceps"
            placeholder="Tríceps (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Bíceps (cm)"
          prop="biceps"
        >
          <el-input
            v-model.number="bodyCompositionForm.biceps"
            placeholder="Bíceps (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Supra ilíaca (cm)"
          prop="suprailiac"
        >
          <el-input
            v-model.number="bodyCompositionForm.suprailiac"
            placeholder="Supra ilíaca (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
            label="Soma Pregas"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="sumPleats"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="Densidade"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="density"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="Gordura Corporal"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="bodyFat"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="MG (kg)"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="mg"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="MCM (kg)"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="mcm"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="Peso mínimo (kg)"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="minimumWeight"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="Peso máximo (kg)"
            prop="estimatedMuscleMass"
          >
            <el-input
              v-model.number="maximumWeight"
              placeholder="Este campo será calculado automaticamente..."
              type="number"
              :disabled="true"
            ></el-input>
          </el-form-item>
      </div>

      <div v-if="checkRisks().waistEstatureRisk !== 'none' || checkRisks().waistHipRisk !== 'none'">
        <el-divider content-position="center">Risco cardiovascular</el-divider>
        <el-alert
          v-if="checkRisks().waistEstatureRisk === 'increased' || checkRisks().waistEstatureRisk === 'high'"
          title="Circunferência de cintura"
          :type="checkRisks().waistEstatureRisk === 'high' ? 'error' : 'warning'"
          :description="checkRisks().waistEstatureRisk === 'high'? 'Risco elevado' : 'Risco aumentado'"
          show-icon
          :closable="false"
        ></el-alert>

        <el-alert
          v-if="checkRisks().waistHipRisk === 'increased' || checkRisks().waistHipRisk === 'high'"
          class="mt-important"
          title="RCQ"
          :type="checkRisks().waistHipRisk === 'high' ? 'error' : 'warning'"
          :description="checkRisks().waistHipRisk === 'high' ? 'Risco elevado' : 'Risco aumentado'"
          show-icon
          :closable="false"
        ></el-alert>
      </div>

      <div class="mt-10 flex w-full justify-center">
        <el-button icon="el-icon-error" @click="resetForm('bodyCompositionForm')">
          Limpar
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="submitForm('bodyCompositionForm')"
        >
          Salvar
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import bodyFatFunc from '@/helpers/evaluations/bodyComposition/bodyFat/index';
import imcFunc from '@/helpers/evaluations/bodyComposition/imc/index';
import densityFunc from '@/helpers/evaluations/bodyComposition/density/index';
import formatDateToInput from '@/helpers/formatDateToInput';

export default {
  name: 'BodyCompositionForm',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      evaluationId: '',
      studentInfos: {},
      bodyCompositionForm: {
        date: '',
        weight: '',
        waist: '',
        hip: '',
        waistEstature: '',
        waistHip: '',
        imc: '',
        scapula: '',
        triceps: '',
        biceps: '',
        suprailiac: '',
        sumPleats: '',
        density: '',
        bodyFat: '',
        mg: '',
        mcm: '',
        minimumWeight: '',
        maximumWeight: '',
        cardiovascularRisk: {
          waistCircumference: 'none',
          rcq: 'none',
        },

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
        stature: [
          {
            required: true,
            message: 'Por favor, informe a estatura',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe uma estatura válida (>0)',
            trigger: 'blur',
          },
        ],
        weight: [
          {
            required: true,
            message: 'Por favor, informe uma faixa de peso',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma faixa de peso válida (>0)',
            trigger: 'blur',
          },
        ],
        waist: [
          {
            required: true,
            message: 'Por favor, informe uma medida de cintura',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida de cintura válida (>0)',
            trigger: 'blur',
          },
        ],
        hip: [
          {
            required: true,
            message: 'Por favor, informe uma medida de quadril',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida de quadril válido (>0)',
            trigger: 'blur',
          },
        ],
        scapula: [
          {
            required: true,
            message: 'Por favor, informe uma medida para a subescapula',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida para a subescapula válida (>0)',
            trigger: 'blur',
          },
        ],
        triceps: [
          {
            required: true,
            message: 'Por favor, informe uma medida para os tríceps',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida para os tríceps válida (>0)',
            trigger: 'blur',
          },
        ],
        biceps: [
          {
            required: true,
            message: 'Por favor, informe uma medida para os bíceps',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida para os bíceps válida (>0)',
            trigger: 'blur',
          },
        ],
        suprailiac: [
          {
            required: true,
            message: 'Por favor, informe um valor para supra ilíaca',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma medida para os tríceps válido (>0)',
            trigger: 'blur',
          },
        ],
      },
    };
  },

  computed: {
    waistEstature() {
      return (this.bodyCompositionForm.waist / this.studentInfos.height);
    },

    waistHip() {
      return (this.bodyCompositionForm.waist / this.bodyCompositionForm.hip);
    },

    imc() {
      return imcFunc(this.bodyCompositionForm.weight, this.studentInfos.height);
    },

    sumPleats() {
      return (this.bodyCompositionForm.scapula + this.bodyCompositionForm.triceps + this.bodyCompositionForm.biceps + this.bodyCompositionForm.suprailiac);
    },

    density() {
      return densityFunc(this.studentInfos.sex, this.sumPleats);
    },

    bodyFat() {
      return 4.95 / this.density ? bodyFatFunc(this.density) : (0);
    },

    mg() {
      return ((this.bodyCompositionForm.weight * this.bodyFat) / 100);
    },

    mcm() {
      return (this.bodyCompositionForm.weight - this.mg);
    },

    minimumWeight() {
      return (this.mcm * 1.3888888888889);
    },

    maximumWeight() {
      return (this.mcm * 1.47058824);
    },
  },

  async mounted() {
    this.studentId = sessionStorage.getItem('id');
    if (this.$props.edit) {
      const { data: studentInfos } = await this.$axios.get(`/student/show/${this.studentId}`);
      this.studentInfos.sex = studentInfos.sex;
      this.studentInfos.height = studentInfos.stature;

      console.log(this.studentInfos);

      // console.log('local', this.studentId);
      this.evaluationId = this.$route.params.id;
      const { data } = await this.$axios.get(`/evaluation/${this.evaluationId}`, { params: { type: 'bodyComposition' } });
      console.log(data.date.slice(0, 10));
      setTimeout(() => {
        this.bodyCompositionForm.date = formatDateToInput(data.date);
        this.bodyCompositionForm.biceps = data.biceps;
        this.bodyCompositionForm.weight = data.weight;
        this.bodyCompositionForm.hip = data.hip;
        this.bodyCompositionForm.triceps = data.triceps;
        this.bodyCompositionForm.waist = data.waist;
        this.bodyCompositionForm.suprailiac = data.suprailiac;
        this.bodyCompositionForm.scapula = data.scapula;
      }, 100);
    }
  },

  methods: {
    submitForm(formName) {
      this.getAllComputed();

      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            if (this.$props.edit) {
              await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                type: 'bodyComposition',
                data: this.bodyCompositionForm,
              });

              this.$message({
                message: 'Avaliação de atualizada com sucesso!',
                type: 'success',
              });
            } else {
              await this.$axios.post(`/evaluation/${this.studentId}`, {
                type: 'bodyComposition',
                data: this.bodyCompositionForm,
              });

              this.$message({
                message: 'Avaliação de criada com sucesso!',
                type: 'success',
              });
            }

            setTimeout(() => {
              this.$router.push({ path: '/' });
            }, 500);
          } catch (error) {
            this.$message.error({ message: `${error.response.data.message}` });
          }
        }
        return false;
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.calculated = false;
    },

    getAllComputed() {
      this.bodyCompositionForm.waistEstature = this.waistEstature;
      this.bodyCompositionForm.waistHip = this.waistHip;
      this.bodyCompositionForm.imc = this.imc;
      this.bodyCompositionForm.sumPleats = this.sumPleats;
      this.bodyCompositionForm.density = this.density;
      this.bodyCompositionForm.bodyFat = this.bodyFat;
      this.bodyCompositionForm.mg = this.mg;
      this.bodyCompositionForm.mcm = this.mcm;
      this.bodyCompositionForm.minimumWeight = this.minimumWeight;
      this.bodyCompositionForm.maximumWeight = this.maximumWeight;
    },

    checkRisks() {
      let waistEstatureRisk = 'none';
      let waistHipRisk = 'none';
      this.bodyCompositionForm.cardiovascularRisk.waistCircumference = 'none';
      this.bodyCompositionForm.cardiovascularRisk.rcq = 'none';

      if (this.studentInfos.sex === 'F') {
        if (this.waistEstature > 0.8) {
          waistEstatureRisk = 'increased';
          this.bodyCompositionForm.cardiovascularRisk.waistCircumference = 'Risco aumentado';
          if (this.waistEstature > 0.88) {
            waistEstatureRisk = 'high';
            this.bodyCompositionForm.cardiovascularRisk.waistCircumference = 'Risco elevado';
          }
        }
        if (this.waistHip > 0.85) {
          waistHipRisk = 'increased';
          this.bodyCompositionForm.cardiovascularRisk.rcq = 'Risco aumentado';

          if (this.waistHip > 1) {
            this.bodyCompositionForm.cardiovascularRisk.rcq = 'Risco elevado';
            waistHipRisk = 'high';
          }
        }
      } else {
        if (this.waistEstature > 0.94) {
          waistEstatureRisk = 'increased';
          this.bodyCompositionForm.cardiovascularRisk.waistCircumference = 'Risco aumentado';

          if (this.waistEstature > 1) {
            waistEstatureRisk = 'high';
            this.bodyCompositionForm.cardiovascularRisk.waistCircumference = 'Risco elevado';
          }
        }
        if (this.waistHip > 0.9) {
          waistHipRisk = 'increased';
          this.bodyCompositionForm.cardiovascularRisk.rcq = 'Risco aumentado';

          if (this.waistHip > 1) {
            waistHipRisk = 'high';
            this.bodyCompositionForm.cardiovascularRisk.rcq = 'Risco elevado';
          }
        }
      }

      return { waistEstatureRisk, waistHipRisk };
    },
  },
};
</script>

<style scoped>
.mt-important {
  margin-top: 8px !important;
}

</style>
