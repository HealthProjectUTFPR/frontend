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
          label="Circunferencia de panturrilha"
          prop="calfCircumference"
        >
          <el-input
            v-model.number="sarcopeniaForm.calfCircumference"
            placeholder="Circunferencia de panturrilha"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>
      </div>

      <div v-if="calculated">
        <el-divider content-position="center">Classificação</el-divider>
        <el-alert
          :title="elAlertState.title"
          :type="elAlertState.type"
          :description="elAlertState.description"
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
import moment from 'moment';

moment.locale('pt');

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
      elAlertState: {
        title: '',
        type: '',
      },
      calculated: false,
      hasSarcopenia: true,
      indexOfMeasuredMuscleMassPerStature: 0,
      indexOfEstimatedMuscleMassPerStature: 0,
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
          +this.calculateEstimatedMuscleMass(newWeight);
      },
    },
    'sarcopeniaForm.measuredMuscleMass': {
      handler(newMeasuredMuscleMass) {
        this.indexOfMeasuredMuscleMassPerStature =
          this.calculateIndexOfMeasuredMuscleMassPerStature(
            newMeasuredMuscleMass,
          );
      },
    },
    'sarcopeniaForm.estimatedMuscleMass': {
      handler(newEstimatedMuscleMass) {
        this.indexOfEstimatedMuscleMassPerStature =
          this.calculateIndexOfEstimatedMuscleMassPerStature(
            newEstimatedMuscleMass,
          );
      },
    },
    indexOfEstimatedMuscleMassPerStature: {
      handler(newIndexOfEstimatedMuscleMassPerStature) {
        if (!this.indexOfMeasuredMuscleMassPerStature) {
          this.sarcopeniaForm.muscleMassIndex =
            newIndexOfEstimatedMuscleMassPerStature.toFixed(2);
        }
      },
    },
    indexOfMeasuredMuscleMassPerStature: {
      handler(newIndexOfMeasuredMuscleMassPerStature) {
        this.calculateMuscleMassIndex(
          newIndexOfMeasuredMuscleMassPerStature,
          this.indexOfEstimatedMuscleMassPerStature,
        );
      },
    },
    sarcopeniaForm: {
      handler() {
        this.classifyResult();
      },
      deep: true,
    },
  },
  mounted() {
    this.sarcopeniaForm.estimatedMuscleMass = this.calculateEstimatedMuscleMass(
      this.sarcopeniaForm.weight,
    );

    this.indexOfMeasuredMuscleMassPerStature =
      this.calculateIndexOfMeasuredMuscleMassPerStature(
        this.sarcopeniaForm.measuredMuscleMass,
      );
    this.indexOfEstimatedMuscleMassPerStature =
      this.calculateIndexOfEstimatedMuscleMassPerStature(
        this.sarcopeniaForm.estimatedMuscleMass,
      );
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const {
            date,
            weight,
            measuredMuscleMass,
            estimatedMuscleMass,
            walkingSpeed,
            handgripStrength,
            calfCircumference,
            muscleMassIndex,
          } = this.sarcopeniaForm;

          const parsedDate = moment(date);

          alert(
            JSON.stringify({
              weight,
              measuredMuscleMass,
              estimatedMuscleMass,
              walkingSpeed,
              handgripStrength,
              calfCircumference,
              muscleMassIndex,
              parsedDate,
            }),
          );
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.calculated = false;
    },
    calculateEstimatedMuscleMass(newWeight) {
      if (!newWeight) return '';

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
    calculateIndexOfMeasuredMuscleMassPerStature(measuredMuscleMass) {
      return measuredMuscleMass / this.mockup.height ** 2;
    },
    calculateIndexOfEstimatedMuscleMassPerStature(estimatedMuscleMass) {
      return estimatedMuscleMass / this.mockup.height ** 2;
    },
    calculateMuscleMassIndex(
      indexOfMeasuredMuscleMassPerStature,
      indexOfEstimatedMuscleMassPerStature,
    ) {
      if (indexOfMeasuredMuscleMassPerStature) {
        this.sarcopeniaForm.muscleMassIndex =
          +indexOfMeasuredMuscleMassPerStature.toFixed(2);
      } else {
        this.sarcopeniaForm.muscleMassIndex =
          +indexOfEstimatedMuscleMassPerStature.toFixed(2);
      }
    },
    classifyResult() {
      const isAllFieldsFilled = Object.values(this.sarcopeniaForm).every(
        (field) => !!field,
      );

      if (isAllFieldsFilled) {
        if (this.mockup.sex === 'Homem') {
          this.verifySarcopeniaOfMan();
        } else {
          this.verifySarcopeniaOfWoman();
        }
      }
    },
    verifySarcopeniaOfMan() {
      const { walkingSpeed, handgripStrength, muscleMassIndex } =
        this.sarcopeniaForm;

      let title = 'Sem sarcopenia';
      let description =
        'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
      let type = 'success';

      if (walkingSpeed > 0.8 && handgripStrength > 30) {
        this.hasSarcopenia = false;
      } else if (
        walkingSpeed > 0.8 &&
        handgripStrength <= 30 &&
        muscleMassIndex > 8.9
      ) {
        this.hasSarcopenia = false;
      } else if (walkingSpeed <= 0.8 && muscleMassIndex > 8.9) {
        this.hasSarcopenia = false;
      } else {
        this.hasSarcopenia = true;

        title = 'Com sarcopenia';
        type = 'error';
        description =
          'De acordo com os dados informados, o paciente possui Sarcopenia.';
      }

      this.elAlertState = {
        type,
        description,
        title,
      };
      this.calculated = true;
    },
    verifySarcopeniaOfWoman() {
      const { walkingSpeed, handgripStrength, muscleMassIndex } =
        this.sarcopeniaForm;

      let title = 'Sem sarcopenia';
      let description =
        'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
      let type = 'success';

      if (walkingSpeed > 0.8 && handgripStrength > 20) {
        this.hasSarcopenia = false;
      } else if (
        walkingSpeed > 0.8 &&
        handgripStrength <= 20 &&
        muscleMassIndex > 6.37
      ) {
        this.hasSarcopenia = false;
      } else if (walkingSpeed <= 0.8 && muscleMassIndex > 6.37) {
        this.hasSarcopenia = false;
      } else {
        this.hasSarcopenia = true;

        title = 'Com sarcopenia';
        type = 'error';
        description =
          'De acordo com os dados informados, o paciente possui Sarcopenia.';
      }

      this.elAlertState = {
        type,
        description,
        title,
      };
      this.calculated = true;
    },
  },
};
</script>
