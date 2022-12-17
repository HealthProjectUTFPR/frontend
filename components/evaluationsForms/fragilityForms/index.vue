<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase"
          >Avaliação de Fragilidade</span
        >
      </div>
    </template>
    <el-form
      ref="fragilidadeForm"
      :rules="rules"
      :model="fragilidadeForm"
      label-position="top"
    >
      <div class="px-6 py-3">
        <div class="mp-3 flex flex-col">
          <el-form-item label="Data" prop="date">
            <el-date-picker
              v-model="fragilidadeForm.date"
              type="date"
              placeholder="XX/XX/XXXX"
              size="large"
              style="width: 23em"
              format="dd/MM/yyyy"
            >
            </el-date-picker>
          </el-form-item>
          <el-row :gutter="24">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-form-item label="Estatura" prop="number">
                  <el-input
                    v-model.number="studentInfos.height"
                    placeholder="Estatura"
                    type="number"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-form-item label="Peso(KG)" prop="weight">
                  <el-input
                    v-model.number="fragilidadeForm.weight"
                    placeholder="weight (kg)"
                    type="number"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-form-item label="IMC" prop="number">
                  <el-input
                    v-model.number="imc"
                    placeholder="IMC"
                    type="number"
                    :disabled="true"
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
          label="1. Nos últimos 12 meses o Sr(a) tem diminuído de peso sem fazer nenhuma dieta? Resposta em KGs"
          prop="number"
        >
          <el-input
            v-model.number="fragilidadeForm.looseWeight"
            type="number"
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
            v-model.number="fragilidadeForm.activityDifficultLastWeekFrequency"
            type="number"
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
            v-model.number="fragilidadeForm.KeepGoingDifficultLastWeekFrequency"
            type="number"
            placeholder="please input"
          >
          </el-input>
        </el-form-item>
      </div>

      <div class="mb-3 flex flex-col">
        <el-form-item label="4. Força de preensão" prop="number">
          <el-input
            v-model.number="fragilidadeForm.handgripStrength"
            type="number"
            placeholder="please input"
          >
          </el-input>
        </el-form-item>
      </div>

      <div class="mb-3 flex flex-col">
        <el-form-item
          label="5. Teste de caminhada habitual(Tempo)"
          prop="number"
        >
          <el-input
            v-model.number="fragilidadeForm.time"
            type="number"
            placeholder="please input"
          >
          </el-input>
        </el-form-item>
      </div>

      <div class="mb-3 flex flex-col">
        <el-form-item
          label="6. IPAQ(autorrelato de caminhada, atividades moderadas e atividades vigorosas), resposta em Kcal"
          prop="number"
        >
          <el-input
            v-model.number="calculoIPAQ"
            type="number"
            placeholder="please input"
            :disabled="true"
          >
          </el-input>
        </el-form-item>
      </div>

      <div class="mt-10 flex w-full justify-center">
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="calcularFragilidade()"
        >
          Checar resultados
        </el-button>
      </div>

      <div class="mb-3 flex-col justify-center">
        <el-row :gutter="20">
          <el-col :span="8">
            <b><span>Caminhada</span></b>
            <div class="grid-content bg-purple">
              <el-form-item label="Dias por Semana" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.walkingDays"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="grid-content bg-purple">
              <el-form-item label="Minutos por Dia" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.walkingMinutesPerDay"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
              <div class="mb-3 flex flex-col">
                <span>METs: {{ mets1 }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <b><span>Atividade Moderada</span></b>
            <div class="grid-content bg-purple">
              <el-form-item label="Dias por Semana" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.moderateActivityDays"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="grid-content bg-purple">
              <el-form-item label="Minutos por Dia" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.moderateActivityMinutesPerDay"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
              <div class="mb-3 flex flex-col">
                <span>METs: {{ mets2 }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <b><span>Atividade Vigorosa</span></b>
            <div class="grid-content bg-purple">
              <el-form-item label="Dias por Semana" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.vigorousActivityDays"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="grid-content bg-purple">
              <el-form-item label="Minutos por Dia" prop="number">
                <el-input
                  v-model.number="fragilidadeForm.vigorousActivityMinutesPerDay"
                  type="number"
                  placeholder="please input"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mb-3 flex flex-col">
              <span>METs: {{ mets3 }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="mb-3 flex flex-col">
        <span>METs Total: {{ metsTotal }}</span>
        <span>KCAL: {{ kcal }}</span>
        <span>Frágilidade: {{ classificacao }}</span>
      </div>

      <el-divider content-position="center">Descrição</el-divider>
      <el-alert
        :title="`Mets Total:${metsTotal}`"
        :type="type"
        :description="description"
        show-icon
        :closable="false"
      >
      </el-alert>
      <div class="mt-10 flex w-full justify-center">
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="submitForm('fragilidadeForm')"
          >Salvar
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
// eslint-disable-next-line import/no-unresolved, import/extensions
import formatDateToInput from '@/helpers/formatDateToInput';
// eslint-disable-next-line import/no-unresolved, import/extensions
import imcFunc from '@/helpers/evaluations/fragility/imc/index';

export default {
  name: 'FragilityForm',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      studentId: '',
      evaluationId: '',
      studentInfos: {},
      type: '',
      soma: 0,
      genero: '',
      teste: '',
      classificacao: '',
      fragilidadeForm: {
        date: '',
        weight: '',
        looseWeight: '',
        activityDifficultLastWeekFrequency: '',
        KeepGoingDifficultLastWeekFrequency: '',
        walkingDays: '',
        walkingMinutesPerDay: '',
        moderateActivityDays: '',
        moderateActivityMinutesPerDay: '',
        vigorousActivityDays: '',
        vigorousActivityMinutesPerDay: '',
        time: '',
        handgripStrength: '',
        imc: '',
        mets1: '',
        mets2: '',
        mets3: '',
        metsTotal: '',
        kcal: '',
        score: '',
        result: '',
      },
      rules: {
        date: [
          {
            type: 'date',
            required: true,
            message: 'Por favor, escolha uma data',
            trigger: 'change',
          },
        ],
      },
    };
  },
  computed: {
    calculoIPAQ() {
      return this.mets1 + this.mets2 + this.mets3 + this.metsTotal + this.kcal;
    },
    calculateWalkingTest() {
      if (this.genero === 'M') {
        if (this.fragilidadeForm.time > 7 && this.studentInfos.height <= 1.73) {
          return 1;
        }

        if (this.fragilidadeForm.time > 6 && this.studentInfos.height > 1.73) {
          return 1;
        }
      }

      if (this.genero === 'W') {
        if (this.fragilidadeForm.time > 7 && this.studentInfos.height <= 1.73) {
          return 1;
        }

        if (this.fragilidadeForm.time > 6 && this.studentInfos.height > 1.59) {
          return 1;
        }
      }
      return 0;
    },
    calculateHandgripStrength() {
      if (this.genero === 'M') {
        if (
          this.fragilidadeForm.handgripStrength <= 29 &&
          this.fragilidadeForm.imc <= 24
        ) {
          return 1;
        }
        if (this.fragilidadeForm.handgripStrength <= 30) {
          if (
            this.fragilidadeForm.imc >= 24.1 &&
            this.fragilidadeForm.imc <= 26
          ) {
            return 1;
          }
          if (
            this.fragilidadeForm.imc >= 26.1 &&
            this.fragilidadeForm.imc <= 28
          ) {
            return 1;
          }
        } else if (
          this.fragilidadeForm.handgripStrength <= 32 &&
          this.fragilidadeForm.imc >= 29
        ) {
          return 1;
        }
      } else if (this.genero === 'W') {
        if (
          this.fragilidadeForm.handgripStrength <= 17 &&
          this.fragilidadeForm.imc <= 23
        ) {
          return 1;
        }
        if (this.fragilidadeForm.handgripStrength <= 17.3) {
          if (
            this.fragilidadeForm.imc >= 25.1 &&
            this.fragilidadeForm.imc <= 26
          ) {
            return 1;
          }
        }
        if (this.fragilidadeForm.handgripStrength <= 18) {
          if (
            this.fragilidadeForm.imc >= 26.1 &&
            this.fragilidadeForm.imc <= 29
          ) {
            return 1;
          }
        } else if (
          this.fragilidadeForm.handgripStrength <= 21 &&
          this.fragilidadeForm.imc >= 29
        ) {
          return 1;
        }
      }

      return 0;
    },
    imc() {
      return imcFunc(this.fragilidadeForm.weight, this.studentInfos.height);
    },
    mets1() {
      if (
        this.fragilidadeForm.walkingDays !== '' &&
        this.fragilidadeForm.walkingMinutesPerDay !== ''
      ) {
        return (
          this.fragilidadeForm.walkingDays *
          this.fragilidadeForm.walkingMinutesPerDay *
          3.3
        );
      }
      return '';
    },
    mets2() {
      if (
        this.fragilidadeForm.moderateActivityDays !== '' &&
        this.fragilidadeForm.moderateActivityMinutesPerDay !== ''
      ) {
        return (
          this.fragilidadeForm.moderateActivityDays *
          this.fragilidadeForm.moderateActivityMinutesPerDay *
          4
        );
      }
      return '';
    },
    mets3() {
      if (
        this.fragilidadeForm.vigorousActivityDays !== '' &&
        this.fragilidadeForm.vigorousActivityMinutesPerDay !== ''
      ) {
        return (
          this.fragilidadeForm.vigorousActivityDays *
          this.fragilidadeForm.vigorousActivityMinutesPerDay *
          8
        );
      }
      return '';
    },
    metsTotal() {
      if (
        this.fragilidadeForm.walkingDays !== '' ||
        this.fragilidadeForm.walkingMinutesPerDay !== '' ||
        this.fragilidadeForm.moderateActivityDays !== '' ||
        this.fragilidadeForm.moderateActivityMinutesPerDay !== '' ||
        this.fragilidadeForm.vigorousActivityDays !== '' ||
        this.fragilidadeForm.vigorousActivityMinutesPerDay !== ''
      ) {
        return this.mets1 + this.mets2 + this.mets3;
      }
      return '';
    },
    kcal() {
      if (this.fragilidadeForm.weight !== '') {
        return (this.metsTotal * this.fragilidadeForm.weight) / 60;
      }
      return '';
    },
  },
  async mounted() {
    this.studentId = sessionStorage.getItem('id');
    const { data: studentInfos } = await this.$axios.get(
      `/student/show/${this.studentId}`,
    );
    this.genero = studentInfos.sex;
    this.studentInfos.height = studentInfos.stature;
    if (this.$props.edit) {
      this.evaluationId = this.$route.params.id;
      const { data } = await this.$axios.get(
        `/evaluation/${this.evaluationId}`,
        { params: { type: 'fragilidade' } },
      );
      setTimeout(() => {
        this.fragilidadeForm.date = formatDateToInput(data.date);
        this.teste = data.date;
        this.fragilidadeForm.weight = data.weight;
        this.fragilidadeForm.looseWeight = data.looseWeight;
        this.fragilidadeForm.activityDifficultLastWeekFrequency =
          data.activityDifficultLastWeekFrequency;
        this.fragilidadeForm.KeepGoingDifficultLastWeekFrequency =
          data.KeepGoingDifficultLastWeekFrequency;
        this.fragilidadeForm.walkingDays = data.walkingDays;
        this.fragilidadeForm.walkingMinutesPerDay = data.walkingMinutesPerDay;
        this.fragilidadeForm.moderateActivityDays = data.moderateActivityDays;
        this.fragilidadeForm.moderateActivityMinutesPerDay =
          data.moderateActivityMinutesPerDay;
        this.fragilidadeForm.vigorousActivityDays = data.vigorousActivityDays;
        this.fragilidadeForm.vigorousActivityMinutesPerDay =
          data.vigorousActivityMinutesPerDay;
        this.fragilidadeForm.handgripStrength = data.handgripStrength;
        this.fragilidadeForm.imc = data.imc;
        this.fragilidadeForm.mets1 = data.mets1;
        this.fragilidadeForm.mets2 = data.mets2;
        this.fragilidadeForm.mets3 = data.mets3;
        this.fragilidadeForm.metsTotal = data.metsTotal;
        this.fragilidadeForm.kcal = data.kcal;
        this.fragilidadeForm.score = data.score;
        this.fragilidadeForm.time = data.time;
        this.fragilidadeForm.result = data.result;
      }, 100);
    }
  },
  methods: {
    gerarClassificacao() {
      if (this.soma === 0) {
        this.classificacao = 'não frágil';
      } else if (this.soma === 1) {
        this.classificacao = 'pré frágil';
      } else if (this.soma === 2) {
        this.classificacao = 'pré frágil';
      } else if (this.soma >= 3) {
        this.classificacao = 'frágil';
      }
      return 0;
    },
    calcularFragilidade() {
      this.fragilidadeForm.imc = this.imc;
      this.calc();
      // perda de peso
      this.soma += this.fragilidadeForm.looseWeight >= 4.5 ? 1 : 0;
      // dificuldade em fazer exercicios
      this.soma +=
        this.fragilidadeForm.activityDifficultLastWeekFrequency >= 2 ||
        this.fragilidadeForm.KeepGoingDifficultLastWeekFrequency >= 2
          ? 1
          : 0;
      // teste de caminhada
      this.soma += this.calculateWalkingTest;
      // teste de IPAQ
      if (
        this.mets1 + this.mets2 + this.mets3 + this.metsTotal + this.kcal <
        383
      ) {
        this.soma += 1;
      } else {
        this.soma += 0;
      }

      this.soma += this.calculateHandgripStrength;
      this.gerarClassificacao();
      this.fragilidadeForm.score = this.soma;
      this.fragilidadeForm.result = this.classificacao;
    },
    calc() {
      this.fragilidadeForm.mets1 = this.mets1;

      this.fragilidadeForm.mets2 = this.mets2;

      this.fragilidadeForm.mets3 = this.mets3;

      this.fragilidadeForm.metsTotal = this.metsTotal;

      this.fragilidadeForm.kcal = this.kcal;
    },
    submitForm(formName) {
      this.calc();
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            if (this.$props.edit) {
              await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                type: 'fragilidade',
                data: this.fragilidadeForm,
              });
              this.$message({
                message: 'Avaliação atualizada com sucesso!',
                type: 'success',
              });
            } else {
              const evaluation = { ...this.fragilidadeForm };
              await this.$axios.post(`/evaluation/${this.studentId}`, {
                type: 'fragilidade',
                data: evaluation,
              });
              this.$message({
                message: 'Avaliação criada com sucesso!',
                type: 'success',
              });
            }
            setTimeout(() => {
              this.$router.push({ path: '/' });
            }, 500);
          } catch (error) {
            this.$message.error({ message: `${error.response.data.message}` });
          }
        }
        return false;
      });
    },
  },
};
</script>

<style>
.input {
  width: 350px;
}
</style>
