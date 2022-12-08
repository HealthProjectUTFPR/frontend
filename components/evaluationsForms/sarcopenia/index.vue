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

        <el-form-item label="Forca de preensão manual" prop="handGripStrength">
          <el-input
            v-model.number="sarcopeniaForm.handGripStrength"
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
import calculateEstimatedMuscleMass from '@/helpers/evaluations/sarcopenia/calculateEstimatedMuscleMass';
import calculateIndexOfMeasuredMuscleMassPerStature from '@/helpers/evaluations/sarcopenia/calculateIndexOfMeasuredMuscleMassPerStature';
import calculateIndexOfEstimatedMuscleMassPerStature from '@/helpers/evaluations/sarcopenia/calculateIndexOfEstimatedMuscleMassPerStature';
import classifyResult from '@/helpers/evaluations/sarcopenia/classifyResult';
import SarcopeniaForm from '@/dto/sarcopeniaFrom.dto';
import formatDateToInput from '@/helpers/formatDateToInput';

moment.locale('pt');

export default {
  name: 'ExampleForm',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      studentId: '',
      userDate: {
        sex: '',
        age: 0,
        race: '',
        height: 0,
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
        handGripStrength: '',
        calfCircumference: '',
        muscleMassIndex: '',
        result: '',
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
        handGripStrength: [
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
      handler(weight) {
        const { age, sex, race, height } = this.userDate;

        this.sarcopeniaForm.estimatedMuscleMass = calculateEstimatedMuscleMass({
          weight,
          age,
          sex,
          race,
          height,
        });
      },
    },
    'sarcopeniaForm.measuredMuscleMass': {
      handler(measuredMuscleMass) {
        const { height } = this.userDate;

        this.indexOfMeasuredMuscleMassPerStature =
          calculateIndexOfMeasuredMuscleMassPerStature({
            height,
            measuredMuscleMass,
          });
      },
    },
    'sarcopeniaForm.estimatedMuscleMass': {
      handler(estimatedMuscleMass) {
        const { height } = this.userDate;

        this.indexOfEstimatedMuscleMassPerStature =
          calculateIndexOfEstimatedMuscleMassPerStature({
            height,
            estimatedMuscleMass,
          });
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
        this.calculateResult();
      },
      deep: true,
    },
  },
  async mounted() {
    const { weight, measuredMuscleMass } = this.sarcopeniaForm;
    this.studentId = sessionStorage.getItem('id');
    const { data: studentInfos } = await this.$axios.get(`/student/show/${this.studentId}`);

    this.userDate.age = new Date().getFullYear() - new Date(studentInfos.birthDate).getFullYear();
    this.userDate.sex = studentInfos.sex;
    this.userDate.race = studentInfos.breed;
    this.userDate.height = studentInfos.stature;

    if (this.$props.edit) {
      this.evaluationId = this.$route.params.id;
      const { data } = await this.$axios.get(`/evaluation/${this.evaluationId}`, { params: { type: 'sarcopenia' } });
      this.sarcopeniaForm.date = formatDateToInput(data.date);
      this.sarcopeniaForm.weight = data.weight;
      this.sarcopeniaForm.measuredMuscleMass = data.measuredMuscleMass;
      this.sarcopeniaForm.walkingSpeed = data.walkingSpeed;
      this.sarcopeniaForm.handGripStrength = data.handGripStrength;
      this.sarcopeniaForm.calfCircumference = data.calfCircumference;
    }

    const { sex, age, race, height } = this.userDate;

    this.sarcopeniaForm.estimatedMuscleMass = calculateEstimatedMuscleMass({
      weight,
      age,
      sex,
      race,
      height,
    });

    this.indexOfMeasuredMuscleMassPerStature =
      calculateIndexOfMeasuredMuscleMassPerStature({
        height,
        measuredMuscleMass,
      });

    const { estimatedMuscleMass } = this.sarcopeniaForm;

    this.indexOfEstimatedMuscleMassPerStature =
      calculateIndexOfEstimatedMuscleMassPerStature({
        height,
        estimatedMuscleMass,
      });
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = new SarcopeniaForm(
            this.sarcopeniaForm,
            this.hasSarcopenia,
          );

          try {
            if (this.$props.edit) {
              await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                type: 'sarcopenia',
                data,
              });

              this.$message({
                message: 'Avaliação atualizada com sucesso!',
                type: 'success',
              });
            } else {
              await this.$axios.post(`/evaluation/${this.studentId}`, {
                type: 'sarcopenia',
                data,
              });

              this.$message({
                message: 'Avaliação criada com sucesso!',
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
    calculateResult() {
      const { result: _, ...rest } = this.sarcopeniaForm;
      const isAllFieldsFilled = Object.values(rest).every((field) => !!field);

      const { walkingSpeed, handGripStrength, muscleMassIndex } =
        this.sarcopeniaForm;
      const { sex } = this.userDate;

      if (isAllFieldsFilled) {
        const result = classifyResult({
          sex,
          walkingSpeed,
          handGripStrength,
          muscleMassIndex,
        });

        const { title, description, type, hasSarcopenia } = result;

        this.elAlertState = {
          type,
          description,
          title,
        };
        this.sarcopeniaForm.result = title;
        this.calculated = true;
        this.hasSarcopenia = hasSarcopenia;
      }
    },
  },
};
</script>
