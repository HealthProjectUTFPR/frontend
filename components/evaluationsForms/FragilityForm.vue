<template>
  <el-card class="box-card">
    <div slot="header" class="flex justify-center bg-red-500 w-full h-full">
      <span class="text-center">TESTE DE EQUILÍBRIO DE BERG 1</span>
    </div>
    <div>

      <div class="flex">
        <span class="flex-grow">1. Sentado para em pé</span>

        <span>
          <el-radio-group v-model="radio">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>
        </span>
      </div>

      <div>
        <span>2. Em pé sem apoio</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>3. Sentado sem apoio</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>4. Em pé para sentado</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>5. Transferências</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>6. Em pé com os olhos fechados</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>7. Em pé com os pés juntos</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>8. Reclinar a frente com os braços estendidos</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>9. Apanhar objeto do chão</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>10. Virando-se para olhar para trás</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>11. Girando 360°</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>12. Colocar os pés alternadamente sobre um banco</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>13. Em pé com um pé em frente ao outro</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>

      <div>
        <span>14. Em pé apoiado em um dos pés</span>
        <el-radio-group v-model="radio">
          <el-radio :label="0">0</el-radio>
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
        </el-radio-group>
      </div>



      <!-- <span>1. Sentado para em pé</span>
      <el-input placeholder="teste"></el-input>

      <span>2. Em pé sem apoio</span>
      <el-input placeholder="teste"></el-input>

      <span>3. Sentado sem apoio</span>
      <el-input placeholder="teste"></el-input>

      <span>4. Em pé para sentado</span>
      <el-input placeholder="teste"></el-input>

      <span>5. Transferências</span>
      <el-input placeholder="teste"></el-input>

      <span>6. Em pé com os olhos fechados</span>
      <el-input placeholder="teste"></el-input>

      <span>7. Em pé com os pés juntos</span>
      <el-input placeholder="teste"></el-input>

      <span>7. Em pé com os pés juntos</span>
      <el-input placeholder="teste"></el-input>

      <span>7. Em pé com os pés juntos</span>
      <el-input placeholder="teste"></el-input>

      <span>7. Em pé com os pés juntos</span>
      <el-input placeholder="teste"></el-input>

      <div>
        <span>Classificação</span>
        <div class="">Sem sarcopenia</div>
      </div>

      <div class="flex justify-center w-full mt-10">
        <el-button>Limpar</el-button>
        <el-button>Salvar</el-button>
      </div> -->
    </div>

  </el-card>

</template>

<script>
export default {
  name: 'FragilityForm',
}
</script>