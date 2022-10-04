<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center">
      <span class="text-center font-extrabold uppercase"
        >Avaliação da Sarcopenia</span
      >
    </div>

    <el-form
      ref="sarcopeniaForm"
      :rules="rules"
      :model="sarcopeniaForm"
      label-position="top"
    >
      <div class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        <el-form-item label="Data" prop="date">
          <el-date-picker
            v-model="sarcopeniaForm.date"
            type="date"
            placeholder="XX/XX/XXXX"
            size="large"
            style="width: 100%"
            format="dd/MM/yyyy"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="Peso (kg)" prop="weight">
          <el-input
            v-model.number="sarcopeniaForm.weight"
            placeholder="Peso (kg)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Massa muscular medida (kg)"
          prop="measuredMuscleMass"
        >
          <el-input
            v-model.number="sarcopeniaForm.measuredMuscleMass"
            placeholder="Massa muscular medida (kg)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
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
        </el-form-item>

        <el-form-item
          label="Velocidade habitual de caminhada (m/s)"
          prop="walkingSpeed"
        >
          <el-input
            v-model.number="sarcopeniaForm.walkingSpeed"
            placeholder="Velocidade habitual de caminhada (m/s)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item label="Forca de preensão manual" prop="handgripStrength">
          <el-input
            v-model.number="sarcopeniaForm.handgripStrength"
            placeholder="Forca de preensão manual"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Indice de massa muscular (kg/m²)"
          prop="muscleMassIndex"
        >
          <el-input
            v-model.number="sarcopeniaForm.muscleMassIndex"
            placeholder="O valor será calculado automaticamente..."
            type="number"
            min="0"
            :disabled="true"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Circunferencia de panturrilha (kg/m²)"
          prop="calfCircumference"
        >
          <el-input
            v-model.number="sarcopeniaForm.calfCircumference"
            placeholder="Circunferencia de panturrilha (kg/m²)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>
      </div>

      <div v-if="calculated">
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
      </div>

      <div class="mt-10 flex w-full justify-center">
        <el-button icon="el-icon-error" @click="resetForm('sarcopeniaForm')">
          Limpar
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="submitForm('sarcopeniaForm')"
        >
          Salvar
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'ExampleForm',
  data() {
    return {
      mockup: {
        sex: 'Homem',
        age: 70,
        race: 'Branco',
        height: 1.92,
      },
      calculated: false,
      hasSarcopenia: true,
      indexOfMeasuredMuscleMassPerStature: 0, // measuredMuscleMass / (estatura*estatura)
      indexOfEstimatedMuscleMassPerStature: 0, // estimatedMuscleMass / (estatura*estatura)
      sarcopeniaForm: {
        date: '',
        weight: '',
        measuredMuscleMass: '',
        estimatedMuscleMass: '',
        walkingSpeed: '',
        handgripStrength: '',
        calfCircumference: '',
        muscleMassIndex: '',
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
        weight: [
          {
            required: true,
            message: 'Por favor, informe um peso',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe uma faixa de peso válida (>0)',
            trigger: 'blur',
          },
        ],
        measuredMuscleMass: [
          {
            required: true,
            message: 'Por favor, informe a massa muscular',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe uma faixa de peso válida (>0)',
            trigger: 'blur',
          },
        ],
        walkingSpeed: [
          {
            required: true,
            message: 'Por favor, informe uma velocidade de caminhada',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma velocidade de caminhada válida (>0)',
            trigger: 'blur',
          },
        ],
        handgripStrength: [
          {
            required: true,
            message: 'Por favor, informe uma força de preensão manual',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma força de preensão manual válida (>0)',
            trigger: 'blur',
          },
        ],
        muscleMassIndex: [
          {
            required: true,
            message: 'Por favor, informe um índice de massa muscular',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe um índice de massa muscular válido (>0)',
            trigger: 'blur',
          },
        ],
        calfCircumference: [
          {
            required: true,
            message: 'Por favor, informe a círcuferencia da panturrilha',
            trigger: 'blur',
          },
          {
            type: 'number',
            message:
              'Por favor, informe uma círcuferencia da panturrilha válida (>0)',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  watch: {
    'sarcopeniaForm.weight': {
      handler(newWeight) {
        this.sarcopeniaForm.estimatedMuscleMass =
          this.calculateEstimatedMuscleMass(newWeight);
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
        0.244 * newWeight +
        7.8 * this.mockup.height +
        6.6 * sexValue -
        0.098 * this.mockup.age +
        (raceValue - 3.3)
      ).toFixed(3);
    },
  },
};
</script>
