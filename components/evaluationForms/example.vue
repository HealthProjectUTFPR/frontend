<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center bg-red-500 w-full h-full">
      <span class="text-center">Avaliacao da Sarcopenia</span>
    </div>
    <div>
      <span>Data</span>
      <el-input placeholder="teste"></el-input>

      <span>Peso (kg)</span>
      <el-input placeholder="teste"></el-input>

      <span>Massa muscular medida (kg)</span>
      <el-input placeholder="teste"></el-input>

      <span>1) Velocidade habitual de caminhada (3m)</span>
      <el-input placeholder="teste"></el-input>

      <span>2) Forca de preensão manual</span>
      <el-input placeholder="teste"></el-input>

      <span>3) Indice de massa muscular (kg/m²)</span>
      <el-input placeholder="teste"></el-input>

      <span>3) Circunferencia de panturrilha (kg/m²)</span>
      <el-input placeholder="teste"></el-input>

      <div>
        <span>Classificação</span>
        <div class="">Sem sarcopenia</div>
      </div>

      <div class="flex justify-center w-full mt-10">
        <el-button>Limpar</el-button>
        <el-button>Salvar</el-button>
      </div>
    </div>

  </el-card>

</template>

<script>
export default {
  name: 'ExampleForm',
}
</script>
