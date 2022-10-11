<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center font-extrabold uppercase">MINI TESTE DE COGINIÇÃO</span>
            </div>
        </template>

        <div class="px-3 py-3">
            <div class="mb-5 d-flex flex-row">
                <span>1. Orientação temporal:</span>
                <CheckInputGroup checked="checked1_1" text="1-1. Em que ano estamos?"/>
                <CheckInputGroup checked="checked1_2" text="1-2. Em que semestre estamos?"/>
                <CheckInputGroup checked="checked1_3" text="1-3. Em que mês estamos?"/>
                <CheckInputGroup checked="checked1_4" text="1-4. Em que dia estamos?"/>
                <CheckInputGroup checked="checked1_5" text="1-5. Em que dia da semana estamos?"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>2. Orientação espacial:</span>
                <CheckInputGroup checked="checked2_1" text="2-1. Em que estado estamos?"/>
                <CheckInputGroup checked="checked2_2" text="2-2. Em que cidade estamos?"/>
                <CheckInputGroup checked="checked2_3" text="2-3. Em que bairro estamos?"/>
                <CheckInputGroup checked="checked2_4" text="2-4. Em que rua estamos?"/>
                <CheckInputGroup checked="checked2_5" text="2-5. Em que local estamos?"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>3. Repita as palavras:</span>
                <CheckInputGroup checked="checked3_1" text="3-1. Caneca?"/>
                <CheckInputGroup checked="checked3_2" text="3-2. Tijolo?"/>
                <CheckInputGroup checked="checked3_3" text="3-3. Tapete"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>4. Para o idoso que faz cálculos:</span>
                <CheckInputGroup checked="checked4_1" text="4-1. Quanto é 100-7?"/>
                <CheckInputGroup checked="checked4_2" text="4-2. Quanto é 93-7?"/>
                <CheckInputGroup checked="checked4_3" text="4-3. Quanto é 86-7?"/>
                <CheckInputGroup checked="checked4_4" text="4-4. Quanto é 79-7?"/>
                <CheckInputGroup checked="checked4_5" text="4-5. Quanto é 72-7?"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>5. Para o idoso alfabetizado:</span>
                <span>Peça para o idoso que soletre a palavra MUNDO de trás para frente.</span>
                <CheckInputGroup checked="checked5_1" text="5-1. O"/>
                <CheckInputGroup checked="checked5_2" text="5-2. D"/>
                <CheckInputGroup checked="checked5_3" text="5-3. N"/>
                <CheckInputGroup checked="checked5_4" text="5-4. U"/>
                <CheckInputGroup checked="checked5_5" text="5-5. M"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>6. Memorização:</span>
                <span>Peça ao idoso que repita as palavras ditas anteriormente.</span>
                <CheckInputGroup checked="checked6_1" text="6-1. Caneca"/>
                <CheckInputGroup checked="checked6_2" text="6-2. Tijolo"/>
                <CheckInputGroup checked="checked6_3" text="6-3. Tapete"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>7. Linguagem 1:</span>
                <span>Mostre um relógio e uma caneta e peça para o idoso nomeá-los:</span>
                <CheckInputGroup checked="checked7_1" text="7-1. Relógio."/>
                <CheckInputGroup checked="checked7_2" text="7-2. Caneta."/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>8. Linguagem 2:</span>
                <span>Peça ao idoso que repita a frase:</span>
                <span>"NEM AQUI, NEM ALI, NEM LÁ"</span>
                <CheckInputGroup checked="checked8" text="8. 'NEM AQUI, NEM ALI, NEM LÁ'"/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>9. Linguagem 3:</span>
                <span>Peça ao idoso que siga uma ordem de 3 estágios de comando:</span>
                <CheckInputGroup checked="checked9_1" text="9-1. Pegue o papel com a mão direita."/>
                <CheckInputGroup checked="checked9_2" text="9-2. Dobre o papel ao meio."/>
                <CheckInputGroup checked="checked9_3" text="9-3. Ponha o papel no chão."/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>10. Linguagem 4:</span>
                <span>Escreva em um papel: "FECHE OS OLHOS!"</span>
                <CheckInputGroup checked="checked10" text="10. Peça ao idoso que leia o comando e execute."/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>11. Linguagem 5:</span>
                <CheckInputGroup checked="checked11" text="11. Peça à pessoa que escreva uma frase completa."/>
            </div>

            <div class="mb-5 flex flex-col">
                <span>12. Linguagem 6:</span>
                <span>Peça à pessoa que copie o desenho:</span>
                <span>{ imagem do desenho }</span>
                <CheckInputGroup checked="checked12" text="12. Peça à pessoa que escreva uma frase completa."/>
            </div>
            <div>
                <strong class="mr-2">TOTAL:</strong>
                {{ total }}
            </div>

            <div class="mt-10 flex w-full justify-center">
                <el-button
                type="primary"
                icon="el-icon-success"
                @click="submitForm()"
                >
                Salvar
                </el-button>
            </div>

        </div>
    </el-card>
</template>

<script>

import CheckInputGroup from '@/components/evaluationsForms/MiniCognition/CheckInputGroup.vue';

export default {
    name: 'MiniCognitionForm',
    components: { 
        CheckInputGroup,
    },
    provide() {
        return { checkedGroups: this.checkedGroups };
    },
    data() {
      return {
        checkedGroups: {
            'checked1_1': false,
            'checked1_2': false,
            'checked1_3': false,
            'checked1_4': false,
            'checked1_5': false,
            'checked2_1': false,
            'checked2_2': false,
            'checked2_3': false,
            'checked2_4': false,
            'checked2_5': false,
            'checked3_1': false,
            'checked3_2': false,
            'checked3_3': false,
            'checked4_1': false,
            'checked4_2': false,
            'checked4_3': false,
            'checked4_4': false,
            'checked4_5': false,
            'checked5_1': false,
            'checked5_2': false,
            'checked5_3': false,
            'checked5_4': false,
            'checked5_5': false,
            'checked6_1': false,
            'checked6_2': false,
            'checked6_3': false,
            'checked7_1': false,
            'checked7_2': false,
            'checked8': false,
            'checked9_2': false,
            'checked9_1': false,
            'checked9_3': false,
            'checked10': false,
            'checked11': false,
            'checked12': false,
        },
      };
    },
    computed: {
        total(){
            return Object.values(this.checkedGroups).reduce((a,b) => {
                if(b === true) return a + 1;
                if(a === true || a === false) return 0;
                return a;
            });
        },
    },
    methods: {
        submitForm() {
            console.log('submited');
        },
    },
};
</script>