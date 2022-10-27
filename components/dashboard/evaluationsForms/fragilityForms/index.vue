<template>
    <el-card class="box-card">
      <template #header>
        <div class="flex h-full w-full justify-center">
          <span class="text-center font-extrabold uppercase">Avaliação de Fragilidade</span>
        </div>
      </template>
  
      <div class="px-6 py-3">
        <div class="mp-3 flex flex-col">
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple">
                    <div><b><span>Estatura</span></b></div>
                    <b-col sm>
                        <el-input class="input" placeholder="Please input" v-model="input20"></el-input>
                    </b-col>
                    </div>
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <div><b><span>Peso(KG)</span></b></div>
                    <b-col sm>
                        <el-input class="input" placeholder="Please input" v-model="input21"></el-input>
                    </b-col></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                    <div><b><span>IMC</span></b></div>
                    <b-col sm>
                        <el-input class="input" placeholder="Please input" v-model="input22"></el-input>
                    </b-col></div></el-col>
            </el-row>
        </div>

        <b><span>Gênero:</span></b>
        <div class="mb-3 flex flex-row">
            <template>
                <el-radio v-model="radio" label="1">Masculino</el-radio>
                <el-radio v-model="radio" label="2">Feminino</el-radio>
            </template>
        </div>
        <div class="mb-3 flex flex-col">
            <b><span>1. Nos últimos 12 meses o Sr(a) tem diminuído de peso sem fazer nenhuma dieta? Quantos KGs?</span></b>
            <el-input placeholder="Please input" v-model="input1"></el-input>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>2. Com que frequência, na última semana, o Sr(a) sentiu que tudo que fez exigiu um grande esforço?</span></b>
          <el-input placeholder="Please input" v-model="input2"></el-input>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>3. Com que frequência, na última semana, o Sr(a) sentiu que não conseguia levar adiante as suas coisas?</span></b>
          <el-input placeholder="Please input" v-model="input3"></el-input>
        </div>
  
        <div class="mb-3 flex flex-col">
            <b><span>4. Força de preensão</span></b>
            <el-input placeholder="Please input" v-model="input4"></el-input>
        </div>
  
        <div class="mb-3 flex flex-col">
            <b><span>5. Teste de caminhada habitual(4,5 metros) Tempo</span></b>
            <el-input placeholder="Please input" v-model="input5"></el-input>
        </div>
  
        <div class="mb-3 flex flex-col">
          <b><span>6. IPAQ(autorrelato de caminhada, atividades moderadas e atividades vigorosas) Kcal</span></b>
          <el-input placeholder="Please input" v-model="input6"></el-input>
        </div>

        <div class="mb-3 flex flex-row">
            <b-row>
                <div><b><span>Caminhada</span></b></div>
                <b-col sm>
                    <span>Dias por Semana</span>
                    <el-input class="input" placeholder="Please input" v-model="input7"></el-input>
                </b-col>
                <b-col sm>
                    <span>Minutos por Dia</span>
                    <el-input class="input" placeholder="Please input" v-model="input8"></el-input>                </b-col>
                <div class="mb-3 flex flex-col">
                    <span>METs:</span>
                </div>
            </b-row>

            <b-row>
                <div><b><span>Atividade Moderada</span></b></div>
                <b-col sm>
                    <span>Dias por Semana</span>
                    <el-input class="input" placeholder="Please input" v-model="input9"></el-input>                </b-col>
                <b-col sm>
                    <span>Minutos por Dia</span>
                    <el-input class="input" placeholder="Please input" v-model="input10"></el-input>                </b-col>
                <div class="mb-3 flex flex-col">
                    <span>METs:</span>
                </div>
            </b-row>

            <b-row>
                <div><b><span>Atividade Vigorosa</span></b></div>
                <b-col sm>
                    <span>Dias por Semana</span>
                    <el-input class="input" placeholder="Please input" v-model="input11"></el-input>
                </b-col>
                <b-col sm>
                    <span>Minutos por Dia</span>
                    <el-input class="input" placeholder="Please input" v-model="input12"></el-input>
                </b-col>
                <div class="mb-3 flex flex-col">
                    <span>METs:</span>
                </div>
            </b-row>
        </div>
        <div class="mb-3 flex flex-col">
            <span>METs Total:</span>
            <span>KCAL:</span>
        </div>

        <el-divider content-position="center">Descrição</el-divider>
            <template>
                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="variables"
                    label="Variáveis"
                    width="300">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Tipo de Classificação"
                    width="808">
                </el-table-column>
            </el-table>
          </template>
            <div class="mt-10 flex w-full justify-center">
            <el-button
                type="primary"
                icon="el-icon-success"
                @click="submitForm()"
                >Salvar
            </el-button>
        </div>
      </div>
    </el-card>
  </template>
  
<style>
    .input {
        width: 350px;
    }
</style>


  <script>
  export default {
    provide() {
    },
    data() {
        return {
            radio:0,
            tableData: [{
            variables: 'Perda de Peso',
            name: '> 4,5kg nos últimos 12 meses sem fazer dieta',
            }, {
            variables: 'Fadiga Referida',
            name: '(a)"Com que frequência, na última semana, o Sr sentiuque tudo que fez exigiu um grande esforço?"; (b)"Com que frequência, na última semana, o Sr sentiu que não conseguia levar adiante as suas atividade?" Se o idoso responder 2 ou mais dias na semana, em qualquer uma das perguntas, ele é considerado como sim'
            }, {
            variables: 'Menor Força de Preensão Manual',
            name: 'Homem:Força < 29Kg para IMC < 24Kg/m2; Força < 30Kg para IMC < 24,1 - 26Kg/m2; Força < 30Kg para IMC < 26,1 - 28Kg/m2; Força < 32Kg para IMC < 28Kg/m2; Mulher:Força < 17Kg para IMC < 23Kg/m2; Força < 17,3Kg para IMC < 25,1 - 26Kg/m2; Força < 18Kg para IMC < 26,1 - 29Kg/m2; Força < 21Kg para IMC < 29Kg/m2;'
            }, {
            variables: 'Baixa Velocidade de Caminhada',
            name: 'Homens: > 7,0s para estatura < 1,73m; > 6,0 s para estatura > 1,73 m; Homens: > 7,0s para estatura < 1,59m; > 6,0 s para estatura > 1,59 m; '
            }, {
            variables: 'Baixo Nível de Atividade Física',
            name: 'Homens: < 383kcal; Mulheres: < 270kcal'
            }
            ],
            input1:"",
            input2:"",
            input3:"",
            input4:"",
            input5:"",
            input6:"",
            input7:"",
            input8:"",
            input9:"",
            input10:"",
            input11:"",
            input12:"",
            input20:"",
            input21:"",
            input22:""

        };
    },
    computed:{
        Genero(){
            return this.radio
        },
        mets1(){
            return (this.input7 * this.input8 * 3,3)
        },
        mets2(){
            return (this.input9 * this.input10 * 3,3)
        },
        mets3(){
            return (this.input11 * this.input12 * 3,3)
        },
        metsTotal(){
            return (this.input7 * this.input8 * 3,3) + (this.input9 * this.input10 * 3,3) + (this.input11 * this.input12 * 3,3)
        }
    }
};
  </script>