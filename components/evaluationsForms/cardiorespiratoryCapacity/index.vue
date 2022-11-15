<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center">
      <span class="text-center font-extrabold uppercase"
        >Capacidade Cardiorrespiratória</span
      >
    </div>

    <el-form
      ref="cardiorespiratoryCapacityForm"
      label-position="top"
      :model="cardiorespiratoryCapacityForm"
      :rules="rules"
    >
      <div class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        <el-form-item label="Data" prop="date">
          <el-date-picker
            v-model="cardiorespiratoryCapacityForm.date"
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
            v-model.number="cardiorespiratoryCapacityForm.weight"
            placeholder="Peso (kg)"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item label="Tempo" prop="time">
          <el-input
            v-model.number="cardiorespiratoryCapacityForm.time"
            placeholder="Tempo"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item label="FC Final" prop="finalFC">
          <el-input
            v-model.number="cardiorespiratoryCapacityForm.finalFC"
            placeholder="FC Final"
            type="number"
            min="0"
            step=".01"
          ></el-input>
        </el-form-item>

        <el-form-item label="VO2 (L/min)" prop="vo2Lmin">
          <el-input
            v-model.number="cardiorespiratoryCapacityForm.vo2Lmin"
            placeholder="O valor será calculado automaticamente..."
            type="number"
            min="0"
            step=".01"
            :disabled="true"
          ></el-input>
        </el-form-item>

        <el-form-item label="VO2 (ml.kg-1.min-1)" prop="vo2MlKG">
          <el-input
            v-model.number="cardiorespiratoryCapacityForm.vo2MlKG"
            placeholder="O valor será calculado automaticamente..."
            type="number"
            min="0"
            step=".01"
            :disabled="true"
          ></el-input>
        </el-form-item>
      </div>

      <div v-if="calculated">
        <el-divider content-position="center">Classificação</el-divider>
        <el-alert
          :title="elAlertState.title"
          :type="elAlertState.type"
          :closable="false"
          show-icon
        ></el-alert>
      </div>

      <div class="mt-10 flex w-full justify-center">
        <el-button
          icon="el-icon-error"
          @click="resetForm('cardiorespiratoryCapacityForm')"
        >
          Limpar
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="submitForm('cardiorespiratoryCapacityForm')"
        >
          Salvar
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import calculateVO2LMin from '@/helpers/evaluations/cardiorespiratoryCapacity/calculateVO2Lmin';
import calculateVO2MlKg from '@/helpers/evaluations/cardiorespiratoryCapacity/calculateVO2MlKg';
import classifyResult from '@/helpers/evaluations/cardiorespiratoryCapacity/classifyResult';

export default {
  name: 'CardiorespiratoryCapacityForm',
  data() {
    return {
      studentId: '0050e6a1-b79f-45c0-9590-8e1db94905ef',
      mockup: {
        sex: 'Homem',
        age: 70,
      },
      calculated: false,
      elAlertState: {
        title: '',
        type: '',
      },
      cardiorespiratoryCapacityForm: {
        date: '',
        weight: '',
        time: '',
        finalFC: '',
        vo2Lmin: '',
        vo2MlKG: '',
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
        time: [
          {
            required: true,
            message: 'Por favor, informe o tempo',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe um tempo válido',
            trigger: 'blur',
          },
        ],
        finalFC: [
          {
            required: true,
            message: 'Por favor, informe o FC Final',
            trigger: 'blur',
          },
          {
            type: 'number',
            message: 'Por favor, informe um FC Final',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  watch: {
    'cardiorespiratoryCapacityForm.weight': {
      handler() {
        const { weight, finalFC, time, vo2Lmin } =
          this.cardiorespiratoryCapacityForm;
        const { age, sex } = this.mockup;

        this.cardiorespiratoryCapacityForm.vo2Lmin = calculateVO2LMin({
          weight,
          finalFC,
          time,
          age,
          sex,
        });
        this.cardiorespiratoryCapacityForm.vo2MlKG = calculateVO2MlKg({
          weight,
          vo2Lmin,
        });
      },
    },
    'cardiorespiratoryCapacityForm.vo2Lmin': {
      handler() {
        const { weight, vo2Lmin } = this.cardiorespiratoryCapacityForm;
        this.cardiorespiratoryCapacityForm.vo2MlKG = calculateVO2MlKg({
          weight,
          vo2Lmin,
        });
      },
    },
    'cardiorespiratoryCapacityForm.finalFC': {
      handler() {
        const { weight, finalFC, time } = this.cardiorespiratoryCapacityForm;
        const { age, sex } = this.mockup;

        this.cardiorespiratoryCapacityForm.vo2Lmin = calculateVO2LMin({
          weight,
          finalFC,
          time,
          age,
          sex,
        });
      },
    },
    'cardiorespiratoryCapacityForm.time': {
      handler() {
        const { weight, finalFC, time } = this.cardiorespiratoryCapacityForm;
        const { age, sex } = this.mockup;

        this.cardiorespiratoryCapacityForm.vo2Lmin = calculateVO2LMin({
          weight,
          finalFC,
          time,
          age,
          sex,
        });
      },
    },
    cardiorespiratoryCapacityForm: {
      handler() {
        this.calculateResult();
      },
      deep: true,
    },
  },
  mounted() {
    const { weight, finalFC, time, vo2Lmin } =
      this.cardiorespiratoryCapacityForm;
    const { age, sex } = this.mockup;

    this.cardiorespiratoryCapacityForm.vo2MlKG = calculateVO2MlKg({
      weight,
      vo2Lmin,
    });
    this.cardiorespiratoryCapacityForm.vo2Lmin = calculateVO2LMin({
      weight,
      finalFC,
      time,
      age,
      sex,
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            await this.$axios.post(`/evaluation/${this.studentId}`, {
              type: 'cardiorespiratoryCapacity',
              data: this.cardiorespiratoryCapacityForm,
            });
          } catch (error) {
            console.log(error);
          }
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.calculated = false;
    },
    calculateResult() {
      const isAllFieldsFilled = Object.values(
        this.cardiorespiratoryCapacityForm,
      ).every((field) => !!field);

      const { sex } = this.mockup;
      const { vo2MlKG } = this.cardiorespiratoryCapacityForm;

      if (isAllFieldsFilled) {
        const { type, title } = classifyResult({ sex, vo2MlKG });

        this.calculated = true;
        this.elAlertState = {
          type,
          title,
        };
      }
    },
  },
};
</script>
