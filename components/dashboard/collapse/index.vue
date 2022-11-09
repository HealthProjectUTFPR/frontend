<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Sintomas Depressivos" name="1">
      <div>
        <el-checkbox label="Escala de Depressão Geriátrica(GDS-15)" border size="medium"></el-checkbox>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Fragilidade" name="2">
      <div>
        <el-checkbox label="Avaliação de Fragilidade de Fried" border size="medium"></el-checkbox>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Baterias Funcionais" name="3">
      <div class="flex-col">
        <div class="flex-row">
        <el-checkbox   label="Sentar e Levantar" border size="medium"></el-checkbox>
        <el-checkbox   label="Flexão de Cotovelos" border size="medium"></el-checkbox>
        <el-checkbox   label="Marcha Estacionária" border size="medium"></el-checkbox>
        </div>
        <div class="flex-row" style="margin-top: 20px">
          <el-checkbox   label="Sentar e Alcançar os Pés" border size="medium"></el-checkbox>
          <el-checkbox   label="Alcançar as Costas" border size="medium"></el-checkbox>
          <el-checkbox   label="TIMED-UP-AND-GO(TUG)" border size="medium"></el-checkbox>
        </div>
      </div>    
    </el-collapse-item>
    <el-collapse-item title="Capacidade Cardiorrespiratória" name="4">
      <div class="flex-row">
        <el-checkbox   label="Caminhada de 1 Milha(1609m)" border size="medium"></el-checkbox>
        <el-checkbox   label="Teste Incremental na Esteira" border size="medium"></el-checkbox>
        <el-checkbox   label="Caminhada de 6 Minutos" border size="medium"></el-checkbox>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Força Muscular" name="5">
      <div class="flex-row">
        <el-checkbox   label="Força de Preensão Manual" border size="medium"></el-checkbox>
        <el-checkbox   label="Sentar e Levantar 5 Vezes" border size="medium"></el-checkbox>
      </div>    
    </el-collapse-item>
    <el-collapse-item title="Composição Corporal" name="6">
      <div>
        <el-checkbox   label="Avaliação da Composição Corporal" border size="medium"></el-checkbox>
      </div> 
    </el-collapse-item>
    <el-collapse-item title="Cognição" name="7">
      <div>
        <el-checkbox   label="Mini Exame do Estado Mental" border size="medium"></el-checkbox>
      </div>     
    </el-collapse-item>
    <el-collapse-item title="Sarcopenia" name="8">
      <div>
        <el-checkbox   label="Avaliação da Sarcopenia" border size="medium"></el-checkbox>
      </div>      
    </el-collapse-item>
    <el-collapse-item title="Independência Nas AVDS" name="9">
      <div>
        <el-checkbox   label="Independência nas Atividades de Vida Diária - KATZ" border size="medium"></el-checkbox>
      </div>      
    </el-collapse-item>
    <el-collapse-item title="Equilíbrio" name="10">
      <div>
        <el-checkbox   label="Escala de Equilíbrio de Berg" border size="medium"></el-checkbox>
      </div>      
    </el-collapse-item>
    <el-collapse-item title="Outros Testes" name="11">
      <div class="flex-row">
        <el-checkbox   label="TIMED-UP-AND-GO(TUG) Com Dupla Tarefa" border size="medium"></el-checkbox>
        <el-checkbox   label="Velocidade De Marcha" border size="medium"></el-checkbox>
      </div>  
    </el-collapse-item>
  </el-collapse>  
</template>

  <script>
    export default {
      data() {
        return {
          activeName: '0'
        };
      }
    }
  </script>