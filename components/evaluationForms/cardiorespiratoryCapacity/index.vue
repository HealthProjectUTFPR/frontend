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
            type="date"
            placeholder="XX/XX/XXXX"
            size="large"
            style="width: 100%"
            format="dd/MM/yyyy"
          >
          </el-date-picker>
        </el-form-item>
      </div>

      <el-divider content-position="center">Classificação</el-divider>
      <el-alert
        :title="string"
        :type="type"
        :description="description"
        show-icon
        :closable="false"
      ></el-alert>

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
        height: 1.92,
      },
      string: 'teste',
      description: 'descricao',
      type: 'success',
    };
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
  },
};
</script>
