<template>
    <el-card class="box-card">
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase">GERAR PDF</span>
      </div>
      <div class="px-6 py-3">
        <template>
          <template>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Sintomas Depressivos" name="1">
                <div>
                  <el-checkbox v-model="CheckBox1" label="Escala de Depressão Geriátrica(GDS-15)" border size="medium"></el-checkbox>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Fragilidade" name="2">
                <div>
                  <el-checkbox v-model="CheckBox2" label="Avaliação de Fragilidade de Fried" border size="medium"></el-checkbox>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Baterias Funcionais" name="3">
                <div class="flex-col">
                  <div class="flex-row">
                  <el-checkbox v-model="CheckBox3" label="Sentar e Levantar" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox4" label="Flexão de Cotovelos" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox5" label="Marcha Estacionária" border size="medium"></el-checkbox>
                  </div>
                  <div class="flex-row" style="margin-top: 20px">
                    <el-checkbox v-model="CheckBox6" label="Sentar e Alcançar os Pés" border size="medium"></el-checkbox>
                    <el-checkbox v-model="CheckBox7" label="Alcançar as Costas" border size="medium"></el-checkbox>
                    <el-checkbox v-model="CheckBox8" label="TIMED-UP-AND-GO(TUG)" border size="medium"></el-checkbox>
                  </div>
                </div>    
              </el-collapse-item>
              <el-collapse-item title="Capacidade Cardiorrespiratória" name="4">
                <div class="flex-row">
                  <el-checkbox v-model="CheckBox9" label="Caminhada de 1 Milha(1609m)" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox10" label="Teste Incremental na Esteira" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox11" label="Caminhada de 6 Minutos" border size="medium"></el-checkbox>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Força Muscular" name="5">
                <div class="flex-row">
                  <el-checkbox v-model="CheckBox12" label="Força de Preensão Manual" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox13" label="Sentar e Levantar 5 Vezes" border size="medium"></el-checkbox>
                </div>    
              </el-collapse-item>
              <el-collapse-item title="Composição Corporal" name="6">
                <div>
                  <el-checkbox v-model="CheckBox14" label="Avaliação da Composição Corporal" border size="medium"></el-checkbox>
                </div> 
              </el-collapse-item>
              <el-collapse-item title="Cognição" name="7">
                <div>
                  <el-checkbox v-model="CheckBox15" label="Mini Exame do Estado Mental" border size="medium"></el-checkbox>
                </div>     
              </el-collapse-item>
              <el-collapse-item title="Sarcopenia" name="8">
                <div>
                  <el-checkbox v-model="CheckBox16" label="Avaliação da Sarcopenia" border size="medium"></el-checkbox>
                </div>      
              </el-collapse-item>
              <el-collapse-item title="Independência Nas AVDS" name="9">
                <div>
                  <el-checkbox v-model="CheckBox17" label="Independência nas Atividades de Vida Diária - KATZ" border size="medium"></el-checkbox>
                </div>      
              </el-collapse-item>
              <el-collapse-item title="Equilíbrio" name="10">
                <div>
                  <el-checkbox v-model="CheckBox18" label="Escala de Equilíbrio de Berg" border size="medium"></el-checkbox>
                </div>      
              </el-collapse-item>
              <el-collapse-item title="Outros Testes" name="11">
                <div class="flex-row">
                  <el-checkbox v-model="CheckBox19" label="TIMED-UP-AND-GO(TUG) Com Dupla Tarefa" border size="medium"></el-checkbox>
                  <el-checkbox v-model="CheckBox20" label="Velocidade De Marcha" border size="medium"></el-checkbox>
                </div>  
              </el-collapse-item>
            </el-collapse>  
          </template>
        </template>
        <div class="mt-10 flex w-full justify-between">
          <el-button
            type="primary"
            icon="el-icon-success"
            @click="selectAll()"
            >Selecionar Todos
          </el-button>
          <el-button
            v-if="verifyChecked===false"
            disabled
            type="primary"
            icon="el-icon-success"
            >Gerar PDF
          </el-button>
          <el-button
            v-else
            type="primary"
            icon="el-icon-success"
            @click="submitForm()"
            >Gerar PDF
          </el-button>
        </div>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
    provide() {
    },
    data() {
      return {
        CheckBox1: false,
        CheckBox2: false,
        CheckBox3: false,
        CheckBox4: false,
        CheckBox5: false,
        CheckBox6: false,
        CheckBox7: false,
        CheckBox8: false,
        CheckBox9: false,
        CheckBox10: false,
        CheckBox11: false,
        CheckBox12: false,
        CheckBox13: false,
        CheckBox14: false,
        CheckBox15: false,
        CheckBox16: false,
        CheckBox17: false,
        CheckBox18: false,
        CheckBox19: false,
        CheckBox20: false,
      };
    },
    computed:{
      verifyChecked(){
        if (this.CheckBox1 === true || this.CheckBox2 === true || this.CheckBox3 === true || this.CheckBox4 === true || 
        this.CheckBox5 === true || this.CheckBox6 === true || this.CheckBox7 === true || this.CheckBox8 === true || 
        this.CheckBox9 === true || this.CheckBox10 === true || this.CheckBox11 === true || this.CheckBox12 === true || 
        this.CheckBox13 === true || this.CheckBox14 === true || this.CheckBox15 === true || this.CheckBox16 === true || 
        this.CheckBox17 === true || this.CheckBox18 === true || this.CheckBox19 === true || this.CheckBox20 === true){
          return true
        }else 
          return false  
      }
    },
    methods:{
      selectAll(){
        this.CheckBox1 = true
        this.CheckBox2 = true
        this.CheckBox3 = true
        this.CheckBox4 = true
        this.CheckBox5 = true
        this.CheckBox6 = true
        this.CheckBox7 = true
        this.CheckBox8 = true
        this.CheckBox9 = true
        this.CheckBox10 = true
        this.CheckBox11 = true
        this.CheckBox12 = true
        this.CheckBox13 = true
        this.CheckBox14 = true
        this.CheckBox15 = true
        this.CheckBox16 = true
        this.CheckBox17 = true
        this.CheckBox18 = true
        this.CheckBox19 = true
        this.CheckBox20 = true
      },
    },
};
  </script>