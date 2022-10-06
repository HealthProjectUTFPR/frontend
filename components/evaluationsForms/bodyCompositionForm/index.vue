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

        <el-form-item label="Idade" prop="age">
          <el-input
            v-model.number="bodyCompositionForm.age"
            placeholder="Idade"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Estatura (cm)"
          prop="stature"
        >
          <el-input
            v-model.number="bodyCompositionForm.stature"
            placeholder="Estatura (cm)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <!-- <el-form-item
          label="Massa muscular estimada (kg)"
          prop="estimatedMuscleMass"
        >
          <el-input
            v-model.number="sarcopeniaForm.estimatedMuscleMass"
            placeholder="O valor será calculado automaticamente..."
            type="number"
            min="0"
            :disabled="true"
            step=".01"
          ></el-input>
        </el-form-item> -->

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
          label="Escapula (cm)"
          prop="scapula"
        >
          <el-input
            v-model.number="bodyCompositionForm.scapula"
            placeholder="Escapula (cm)"
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
      </div>

      <!-- <div v-if="calculated">
        <el-divider content-position="center">Classificação</el-divider>
        <el-alert
          v-if="!hasSarcopenia"
          title="Sem sarcopenia"
          type="success"
          description="De acordo com os dados informados, o paciente não sofre de Sarcopenia."
          show-icon
          :closable="false"
        ></el-alert>

        <el-alert
          v-else
          title="Com sarcopenia"
          type="error"
          description="De acordo com os dados informados, o paciente possui Sarcopenia."
          show-icon
          :closable="false"
        ></el-alert>
      </div> -->

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
export default {
  name: 'BodyCompositionForm',
  data() {
    return {
      mockup: {
        sex: 'Homem',
        age: 70,
        race: 'Branco',
        height: 1.92,
      },
      // calculated: false,
      // hasSarcopenia: true,
      // indexOfMeasuredMuscleMassPerStature: 0, // measuredMuscleMass / (estatura*estatura)
      // indexOfEstimatedMuscleMassPerStature: 0, // estimatedMuscleMass / (estatura*estatura)
      bodyCompositionForm: {
        date: '',
        age: '',
        stature: '',
        weight: '',
        waist: '',
        hip: '',
        scapula: '',
        triceps: '',
        biceps: '',
        suprailiac: '',
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
  watch: {
    'sarcopeniaForm.weight': {
      handler(newWeight) {
        this.sarcopeniaForm.estimatedMuscleMass = this.calculateEstimatedMuscleMass(newWeight);
      },
    },
  },
  methods: {
    submitForm(formName) {
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
    calculateEstimatedMuscleMass(newWeight) {
      const sexValue = this.mockup.sex === 'Homem' ? 1 : 0;
      let raceValue = 1.4;
      if (this.mockup.race === 'Branco') {
        raceValue = 0;
      } else if (this.mockup.race === 'Asiático') {
        raceValue = 1.2;
      }
      return (
        0.244 * newWeight
        + 7.8 * this.mockup.height
        + 6.6 * sexValue
        - 0.098 * this.mockup.age
        + (raceValue - 3.3)
      ).toFixed(3);
    },
  },
};
</script>

<style>

</style>
