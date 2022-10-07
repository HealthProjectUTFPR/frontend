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
    cardiorespiratoryCapacityForm: {
      handler() {
        this.classifyResult();
      },
      deep: true,
    },
  },
  mounted() {
    this.calculateVO2MlKg();
    this.calculateVO2LMin();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(JSON.stringify(this.cardiorespiratoryCapacityForm));
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
    classifyResult() {
      const isAllFieldsFilled = Object.values(
        this.cardiorespiratoryCapacityForm,
      ).every((field) => !!field);

      if (isAllFieldsFilled) {
        if (this.mockup.sex === 'Homem') {
          this.verifyCardiorespiratoryCapacityOfMan();
        } else {
          this.verifyCardiorespiratoryCapacityOfWoman();
        }
      }
    },
    verifyCardiorespiratoryCapacityOfMan() {
      let type = '';
      let title = '';

      const { vo2MlKG } = this.cardiorespiratoryCapacityForm;

      if (vo2MlKG >= 42.5) {
        type = 'success';
        title = 'Muito bom!';
      } else if (vo2MlKG >= 35.3) {
        type = 'success';
        title = 'Bom!';
      } else if (vo2MlKG >= 31.8) {
        type = 'warning';
        title = 'Suficiente!';
      } else if (vo2MlKG >= 28.7) {
        type = 'warning';
        title = 'Fraco!';
      } else {
        type = 'error';
        title = 'Muito Fraco!';
      }

      this.calculated = true;
      this.elAlertState = {
        type,
        title,
      };
    },
    verifyCardiorespiratoryCapacityOfWoman() {
      let type = '';
      let title = '';

      const { vo2MlKG } = this.cardiorespiratoryCapacityForm;

      if (vo2MlKG >= 35.2) {
        type = 'success';
        title = 'Muito bom!';
      } else if (vo2MlKG >= 29.4) {
        type = 'success';
        title = 'Bom!';
      } else if (vo2MlKG >= 25.8) {
        type = 'warning';
        title = 'Suficiente!';
      } else if (vo2MlKG >= 23.6) {
        type = 'warning';
        title = 'Fraco!';
      } else {
        type = 'error';
        title = 'Muito Fraco!';
      }

      this.calculated = true;
      this.elAlertState = {
        type,
        title,
      };
    },
  },
};
</script>
