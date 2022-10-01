<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center">
      <span class="text-center font-extrabold uppercase">Avaliação da Sarcopenia</span>
    </div>

    <el-form label-position="top" class="grid gap-x-4 lg:grid-cols-2 grid-cols-1" >
      <el-form-item label="Data">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="XX/XX/XXXX"
          size="large"
          style="width: 100%"
          >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="Peso (kg)">
        <el-input placeholder="Peso (kg)"></el-input>
      </el-form-item>

      <el-form-item label="Massa muscular medida (kg)">
        <el-input placeholder="Massa muscular medida (kg)"></el-input>
      </el-form-item>

      <el-form-item label="Massa muscular estimada (kg)">
        <el-input placeholder="Massa muscular estimada (kg)"></el-input>
      </el-form-item>

      <el-form-item label="1 - Velocidade habitual de caminhada (m/s)">
        <el-input placeholder="Velocidade habitual de caminhada (m/s)"></el-input>
      </el-form-item>

      <el-form-item label="2 - Forca de preensão manual">
        <el-input placeholder="Forca de preensão manual"></el-input>
      </el-form-item>

      <el-form-item label="3a - Indice de massa muscular (kg/m²)">
        <el-input placeholder="Indice de massa muscular (kg/m²)"></el-input>
      </el-form-item>

      <el-form-item label="3b - Circunferencia de panturrilha (kg/m²)">
        <el-input placeholder="Circunferencia de panturrilha (kg/m²)"></el-input>
      </el-form-item>
    </el-form>

    <el-divider content-position="center">Classificação</el-divider>

    <el-alert
      title="Sem sarcopenia"
      type="success"
      description="De acordo com os dados informados, o paciente não sofre de Sarcopenia."
      show-icon
      :closable="false"
      >
    </el-alert>

    <el-alert
      title="Com sarcopenia"
      type="error"
      description="De acordo com os dados informados, o paciente possui Sarcopenia."
      show-icon
      :closable="false"
    >
    </el-alert>

    <div class="flex justify-center w-full mt-10">
      <el-button icon="el-icon-error">Limpar</el-button>
      <el-button type="primary" icon="el-icon-success">Salvar</el-button>
    </div>

  </el-card>

</template>


<script>
export default {
  name: 'ExampleForm',
}
</script>
