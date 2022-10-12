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
            format="dd-MM-yyyy"
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
import imcFunc from '../../../helpers/evaluations/bodyComposition/imc/index';
import densityFunc from '../../../helpers/evaluations/bodyComposition/density/index';
import bodyFatFunc from '../../../helpers/evaluations/bodyComposition/bodyFat/index';

export default {
  name: 'BodyCompositionForm',
  data() {
    return {
      mockup: {
        sex: 'Mulher',
        age: 70,
        race: 'Branco',
        height: 192.5,
      },
      bodyCompositionForm: {
        date: '',
        age: '',
        stature: '',
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
        age: [
          {
            required: true,
            message: 'Por favor, informe uma idade',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe uma idade válida (>0)',
            trigger: 'blur',
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
      return (this.bodyCompositionForm.waist / this.mockup.height);
    },

    waistHip() {
      return (this.bodyCompositionForm.waist / this.bodyCompositionForm.hip);
    },

    imc() {
      return imcFunc(this.bodyCompositionForm.weight, this.mockup.height);
    },

    sumPleats() {
      return (this.bodyCompositionForm.scapula + this.bodyCompositionForm.triceps + this.bodyCompositionForm.biceps + this.bodyCompositionForm.suprailiac);
    },

    density() {
      return densityFunc(this.mockup.sex, this.sumPleats);
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

  methods: {
    submitForm(formName) {
      this.getAllComputed();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.calculated = true;
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

      if (this.mockup.sex === 'Mulher') {
        if (this.waistEstature > 0.8) {
          waistEstatureRisk = 'increased';
          if (this.waistEstature > 0.88) {
            waistEstatureRisk = 'high';
          }
        }
        if (this.waistHip > 0.85) {
          waistHipRisk = 'increased';
          if (this.waistHip > 1) {
            waistHipRisk = 'high';
          }
        }
      } else {
        if (this.waistEstature > 0.94) {
          waistEstatureRisk = 'increased';
          if (this.waistEstature > 1) {
            waistEstatureRisk = 'high';
          }
        }
        if (this.waistHip > 0.9) {
          waistHipRisk = 'increased';
          if (this.waistHip > 1) {
            waistHipRisk = 'high';
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
