<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center">
      <span class="text-center font-extrabold uppercase"
        >Capacidade Cardiorrespiratória</span
      >
    </div>

    <el-form ref="cardiorespiratoryCapacityForm" label-position="top">
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

      <el-form v-if="calculated">
        <el-divider content-position="center">Classificação</el-divider>
        <el-alert
          :title="elAlertState.title"
          :type="elAlertState.type"
          :closable="false"
          show-icon
        ></el-alert>
      </el-form>

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
export default {
  name: 'CardiorespiratoryCapacityForm',
  data() {
    return {
      mockup: {
        sex: 'Homem',
        age: 70,
      },
      calculated: false,
      elAlertState: {
        title: '',
        type: '',
      },
      string: 'teste',
      description: 'descricao',
      type: 'success',
      cardiorespiratoryCapacityForm: {
        date: '',
        weight: '',
        time: '',
        finalFC: '',
        vo2Lmin: '',
        vo2MlKG: '',
      },
    };
  },
  watch: {
    'cardiorespiratoryCapacityForm.weight': {
      handler() {
        this.calculateVO2LMin();
        this.calculateVO2MlKg();
      },
    },
    'cardiorespiratoryCapacityForm.vo2Lmin': {
      handler() {
        this.calculateVO2MlKg();
      },
    },
    'cardiorespiratoryCapacityForm.finalFC': {
      handler() {
        this.calculateVO2LMin();
      },
    },
    'cardiorespiratoryCapacityForm.time': {
      handler() {
        this.calculateVO2LMin();
      },
    },
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('alo');
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.calculated = false;
    },
    calculateVO2MlKg() {
      const { weight, vo2Lmin } = this.cardiorespiratoryCapacityForm;

      if (!weight) {
        this.cardiorespiratoryCapacityForm.vo2MlKG = '';
      }

      const result = (vo2Lmin * 1000) / weight;

      this.cardiorespiratoryCapacityForm.vo2MlKG = result.toFixed(2);
    },
    calculateVO2LMin() {
      const { weight, finalFC, time } = this.cardiorespiratoryCapacityForm;
      const { age } = this.mockup;

      if (!weight) {
        this.cardiorespiratoryCapacityForm.vo2Lmin = '';
        return;
      }

      const sexWeight = this.mockup.sex === 'Homem' ? 1 : 0;

      const result =
        6.952 +
        0.0091 * (weight * 2.205) -
        0.0257 * age +
        0.5955 * sexWeight -
        0.224 * time -
        0.0115 * finalFC;

      this.cardiorespiratoryCapacityForm.vo2Lmin = result.toFixed(2);
    },
  },
};
</script>
