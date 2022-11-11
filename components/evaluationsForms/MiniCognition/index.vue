<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase"
          >MINI TESTE DE COGINIÇÃO</span
        >
      </div>
    </template>
    <div>
      <span class="px-3">Escolaridade em anos: </span>
      <el-input
        v-model="scholarity"
        placeholder="0"
        style="width: 80px"
      ></el-input>
    </div>
    <div class="px-3 py-4">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>1. Orientação temporal:</span>
        </div>
        <el-row :gutter="rowGutter">
          <el-col :span="colSpan">
            <CheckInputGroup
              checked="checked1_1"
              text="1. Em que ano estamos?"
            />
          </el-col>
          <el-col :span="colSpan">
            <CheckInputGroup
              checked="checked1_2"
              text="2. Em que semestre estamos?"
            />
          </el-col>
        </el-row>
        <el-row :gutter="rowGutter">
          <el-col :span="colSpan">
            <CheckInputGroup
              checked="checked1_3"
              text="3. Em que mês estamos?"
            />
          </el-col>
          <el-col :span="colSpan">
            <CheckInputGroup
              checked="checked1_4"
              text="4. Em que dia estamos?"
            />
          </el-col>
        </el-row>
        <el-row :gutter="rowGutter">
          <el-col :span="colSpan">
            <CheckInputGroup
              checked="checked1_5"
              text="5. Em que dia da semana estamos?"
            />
          </el-col>
        </el-row>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>2. Orientação espacial:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked2_1"
                text="1. Em que estado estamos?"
              />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked2_2"
                text="2. Em que cidade estamos?"
              />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked2_3"
                text="3. Em que bairro estamos?"
              />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked2_4"
                text="4. Em que rua estamos?"
              />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked2_5"
                text="5. Em que local estamos?"
              />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>3. Repita as palavras:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked3_1" text="1. Caneca?" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked3_2" text="2. Tijolo?" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked3_3" text="3. Tapete" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>4. Para o idoso que faz cálculos:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked4_1" text="1. Quanto é 100-7?" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked4_2" text="2. Quanto é 93-7?" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked4_3" text="3. Quanto é 86-7?" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked4_4" text="4. Quanto é 79-7?" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked4_5" text="5. Quanto é 72-7?" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>5. Para o idoso alfabetizado:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span
            >Peça para o idoso que soletre a palavra MUNDO de trás para
            frente.</span
          >
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked5_1" text="1. O" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked5_2" text="2. D" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked5_3" text="3. N" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked5_4" text="4. U" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked5_5" text="5. M" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>6. Memorização:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span>Peça ao idoso que repita as palavras ditas anteriormente.</span>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked6_1" text="1. Caneca" />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked6_2" text="2. Tijolo" />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked6_3" text="3. Tapete" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>7. Linguagem 1:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span
            >Mostre um relógio e uma caneta e peça para o idoso nomeá-los:</span
          >
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked7_1" text="1. Relógio." />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup checked="checked7_2" text="2. Caneta." />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>8. Linguagem 2:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span>Peça ao idoso que repita a frase:</span>
          <CheckInputGroup
            checked="checked8"
            text="1. 'NEM AQUI, NEM ALI, NEM LÁ'"
          />
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>9. Linguagem 3:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span
            >Peça ao idoso que siga uma ordem de 3 estágios de comando:</span
          >
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked9_1"
                text="1. Pegue o papel com a mão direita."
              />
            </el-col>
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked9_2"
                text="2. Dobre o papel ao meio."
              />
            </el-col>
          </el-row>
          <el-row :gutter="rowGutter">
            <el-col :span="colSpan">
              <CheckInputGroup
                checked="checked9_3"
                text="3. Ponha o papel no chão."
              />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>10. Linguagem 4:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <span>Escreva em um papel: "FECHE OS OLHOS!"</span>
          <CheckInputGroup
            checked="checked10"
            text="1. Peça ao idoso que leia o comando e execute."
          />
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>11. Linguagem 5:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <CheckInputGroup
            checked="checked11"
            text="1. Peça à pessoa que escreva uma frase completa."
          />
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>12. Linguagem 6:</span>
        </div>
        <div class="mb-5 flex flex-col">
          <img src="/images/MC12.jpg" width="200" />
          <CheckInputGroup
            checked="checked12"
            text="1. Peça à pessoa que copie o desenho de cima."
          />
        </div>
      </el-card>

      <el-divider content-position="center"></el-divider>
      <div>
        <strong class="mr-2 justify-center">TOTAL:</strong>
        {{ total }}
      </div>

      <el-divider content-position="center">Descrição</el-divider>
      <el-alert
        :title="`${total} PONTOS`"
        :type="getTotalMsg().type"
        :description="getTotalMsg().description"
        show-icon
        :closable="false"
      ></el-alert>

      <div class="mt-10 flex w-full justify-center">
        <el-button type="primary" icon="el-icon-success" @click="submitForm()">
          Salvar
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
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
      scholarity: 0,
      rowGutter: 1,
      colSpan: 12,
      result: '',
      checkedGroups: {
        checked1_1: false,
        checked1_3: false,
        checked1_4: false,
        checked1_5: false,
        checked1_2: false,
        checked2_1: false,
        checked2_2: false,
        checked2_3: false,
        checked2_4: false,
        checked2_5: false,
        checked3_1: false,
        checked3_2: false,
        checked3_3: false,
        checked4_1: false,
        checked4_2: false,
        checked4_3: false,
        checked4_4: false,
        checked4_5: false,
        checked5_1: false,
        checked5_2: false,
        checked5_3: false,
        checked5_4: false,
        checked5_5: false,
        checked6_1: false,
        checked6_2: false,
        checked6_3: false,
        checked7_1: false,
        checked7_2: false,
        checked8: false,
        checked9_2: false,
        checked9_1: false,
        checked9_3: false,
        checked10: false,
        checked11: false,
        checked12: false,
      },
      descriptions: {},
      studentId: 'fd6cea79-4250-493a-8b2f-7b92feeff077',
    };
  },
  computed: {
    total() {
      return Object.values(this.checkedGroups).reduce((a, b) => {
        if (b === true) return a + 1;
        if (a === true || a === false) return 0;
        return a;
      });
    },
  },
  methods: {
    getTotalMsg() {
      if (
        (this.scholarity === 0 && this.total < 20)
        || (this.scholarity > 0 && this.scholarity <= 4 && this.total < 25)
        || (this.scholarity > 4 && this.scholarity <= 8 && this.total < 27)
        || (this.scholarity > 8 && this.scholarity <= 11 && this.total < 28)
        || (this.scholarity > 11 && this.total < 29)
      ) {
        this.result = 'Possui um declínio cognitivo.';
        return { description: this.result, type: 'warning' };
      }
      this.result = 'Não possui declínio cognitivo.';
      return { description: this.result, type: 'success' };
    },
    async submitForm() {
      const evaluation = {
        scholarity: this.scholarity,
        ...this.checkedGroups,
        result: this.result,
      };
      try {
        await this.$axios.post(
          `/evaluation/${this.studentId}`,
          {
            type: 'MiniCognition',
            data: evaluation,
          },
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
