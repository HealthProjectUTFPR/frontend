<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center font-extrabold uppercase">Avaliação de Fragilidade</span>
            </div>
        </template>
        <el-form
        ref="FragilityForm"
        :rules="rules"
        :model="fragilityForm"
        label-position="top">
            <div class="px-6 py-3">
                <div class="mp-3 flex flex-col">
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="Estatura"
                                prop="number">
                                    <el-input
                                    disabled
                                    v-model.number="fragilityForm.estatura"
                                    placeholder="Estatura"
                                    type="number"
                                    ></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="Peso (kg)"
                                prop="weight"
                                >
                                    <el-input
                                    disabled
                                    v-model.number="fragilityForm.peso"
                                    placeholder="Peso (kg)"
                                    type="number"
                                    ></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="IMC"
                                prop="number"
                                >
                                    <el-input
                                    disabled
                                    v-model.number="fragilityForm.imc"
                                    placeholder="IMC"
                                    type="number"
                                    >
                                    </el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="1. Nos últimos 12 meses o Sr(a) tem diminuído de peso sem fazer nenhuma dieta? Quantos KGs?"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta1"
                    placeholder="please input"
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="2. Com que frequência, na última semana, o Sr(a) sentiu que tudo que fez exigiu um grande esforço?"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta2"
                    placeholder="please input" 
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="3. Com que frequência, na última semana, o Sr(a) sentiu que não conseguia levar adiante as suas coisas?"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta3"
                    placeholder="please input" 
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="4. Força de preensão"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta4"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="5. Teste de caminhada habitual(4,5 metros) Tempo"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta5"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="6. IPAQ(autorrelato de caminhada, atividades moderadas e atividades vigorosas) Kcal"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.pergunta6"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>

        <div class="mb-3 flex-col justify-center">
            <el-row :gutter="20">
                <el-col :span="8">
                    <b><span>Caminhada</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.caminhada_dps"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.caminhada_mpd"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets1}}</span>
                    </div>    
                    </div>          
                </el-col>
                <el-col :span="8">
                    <b><span>Atividade Moderada</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.atvModerada_dps"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.atvModerada_mpd"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets2}}</span>
                    </div>    
                    </div>           
                </el-col>
                <el-col :span="8">
                    <b><span>Atividade Vigorosa</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.atvVigorosa_dps"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        v-model.number="fragilityForm.atvVigorosa_mpd"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>   
                    </div>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets3}}</span>
                    </div>             
                </el-col>
            </el-row>
        </div>
        <div class="mb-3 flex flex-col">
            <span>METs Total: {{metsTotal}}</span>
            <span>KCAL: {{kcal}}</span>
        </div>

        <el-divider content-position="center">Descrição</el-divider>
            <el-alert
            :title="`Mets Total:${metsTotal}`"
            :type="type"
            :description="description"
            show-icon
            :closable="false">
            </el-alert>
            <div class="mt-10 flex w-full justify-center">
            <el-button
                type="primary"
                icon="el-icon-success"
                @click="submitForm()"
                >Salvar
            </el-button>
        </div>
    </el-form>
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
            fragilityForm: {
            estatura: '',
            peso: '',
            imc: '',
            pergunta1: '',
            pergunta2: '',
            pergunta3: '',
            pergunta4   : '',
            pergunta5: '',
            pergunta6: '',
            caminhada_dps: '',
            caminhada_mpd: '',
            atvModerada_dps: '',
            atvModerada_mpd: '',
            atvVigorosa_dps: '',
            atvVigorosa_mpd: '',
            },
        };
    },
    computed:{
        Genero(){
            return this.radio
        },
        mets1(){
            if(this.fragilityForm.caminhada_dps !== "" && this.fragilityForm.caminhada_mpd !== "")
                return (this.fragilityForm.caminhada_dps * this.fragilityForm.caminhada_mpd * 3.3)
            else    
                return ""
        },
        mets2(){
            if(this.fragilityForm.atvModerada_dps !== "" && this.fragilityForm.atvModerada_mpd !== "")
                return (this.fragilityForm.atvModerada_dps * this.fragilityForm.atvModerada_mpd * 3.3)
            else    
                return ""
        },
        mets3(){
            if(this.fragilityForm.atvVigorosa_dps !== "" && this.fragilityForm.atvVigorosa_mpd !== "")
                return (this.fragilityForm.atvVigorosa_dps * this.fragilityForm.atvVigorosa_mpd * 3.3)
            else    
                return ""
        },
        metsTotal(){
            if(this.fragilityForm.caminhada_dps !== "" || this.fragilityForm.caminhada_mpd !== "" || 
            this.fragilityForm.atvModerada_dps !== "" || this.fragilityForm.atvModerada_mpd !== "" || 
            this.fragilityForm.atvVigorosa_dps !== "" || this.fragilityForm.atvVigorosa_mpd !== "")
                return ((this.fragilityForm.caminhada_dps * this.fragilityForm.caminhada_mpd * 3.3) + 
                (this.fragilityForm.atvModerada_dps * this.fragilityForm.atvModerada_mpd * 3.3) + 
                (this.fragilityForm.atvVigorosa_dps * this.fragilityForm.atvVigorosa_mpd * 3.3))
            else    
                return ""
        },
        kcal(){
            if(this.fragilityForm.peso!=="")
            return this.fragilityForm.peso * (this.fragilityForm.caminhada_dps * this.fragilityForm.caminhada_mpd * 3.3) + 
                (this.fragilityForm.atvModerada_dps * this.fragilityForm.atvModerada_mpd * 3.3) + 
                (this.fragilityForm.atvVigorosa_dps * this.fragilityForm.atvVigorosa_mpd * 3.3)
            else return ""
        },
    }
};
  </script>