<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase">TESTE DE EQUILÍBRIO DE BERG 1</span>
      </div>
    </template>

    <el-form
      ref="balanceForm"
      :rules="rules"
      :model="balanceForm"
      label-position="top"
    >
    <el-form-item class="ml-7" label="Data" prop="date">
      <el-date-picker
      v-model="balanceForm.date"
      type="date"
        placeholder="XX/XX/XXXX"
        size="large"
        style="width: 23em"
        format="dd-MM-yyyy"
        >
      </el-date-picker>
    </el-form-item>

    <div class="px-6 py-3">
      <div class="mb-3 flex flex-col">
        <span>1. Sentado para em pé</span>

        <RadioInputGroup group="group-1" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>2. Em pé sem apoio</span>

        <RadioInputGroup group="group-2" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>3. Sentado sem apoio</span>

        <RadioInputGroup group="group-3" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>4. Em pé para sentado</span>

        <RadioInputGroup group="group-4" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>5. Transferências</span>

        <RadioInputGroup group="group-5" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>6. Em pé com os olhos fechados</span>

        <RadioInputGroup group="group-6" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>7. Em pé com os pés juntos</span>

        <RadioInputGroup group="group-7" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>8. Reclinar a frente com os braços estendidos</span>

        <RadioInputGroup group="group-8" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>9. Apanhar objeto do chão</span>

        <RadioInputGroup group="group-9" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>10. Virando-se para olhar para trás</span>

        <RadioInputGroup group="group-10" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>11. Girando 360°</span>

        <RadioInputGroup group="group-11" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>12. Colocar os pés alternadamente sobre um banco</span>

        <RadioInputGroup group="group-12" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>13. Em pé com um pé em frente ao outro</span>

        <RadioInputGroup group="group-13" />
      </div>

      <div class="mb-3 flex flex-col">
        <span>14. Em pé apoiado em um dos pés</span>

        <RadioInputGroup group="group-14" />
      </div>

      <div>
        <strong class="mr-2">TOTAL:</strong>
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
        <el-button
          type="primary"
          icon="el-icon-success"
          @click="submitForm('balanceForm')"
        >
          Salvar
        </el-button>
      </div>
    </div>
  </el-form>
  </el-card>
</template>

<script>
import RadioInputGroup from '@/components/evaluationsForms/balanceForm/RadioInputGroup.vue';
import descriptions from '@/components/evaluationsForms/balanceForm/descriptions';
import BalanceForm from '@/dto/balanceForm.dto';

export default {
  name: 'BalanceForm',

  components: { RadioInputGroup },

  provide() {
    return { optionsGroups: this.optionsGroups };
  },

  data() {
    return {
      balanceForm: { date: '' },
      optionsGroups: {
        'group-1': 4,
        'group-2': 4,
        'group-3': 4,
        'group-4': 4,
        'group-5': 4,
        'group-6': 4,
        'group-7': 4,
        'group-8': 4,
        'group-9': 4,
        'group-10': 4,
        'group-11': 4,
        'group-12': 4,
        'group-13': 4,
        'group-14': 4,
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
    total() {
      return Object.values(this.optionsGroups).reduce((a, b) => a + b);
    },
  },

  methods: {
    getTotalMsg() {
      if (this.total <= 36) return { description: descriptions['total-descriptions'][0], type: 'error' };
      if (this.total <= 44) return { description: descriptions['total-descriptions'][1], type: 'warning' };
      return { description: descriptions['total-descriptions'][2], type: 'success' };
    },

    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = new BalanceForm(this.balanceForm.date, this.optionsGroups, this.total);
          try {
            await this.$axios.post(`/evaluation/${this.studentId}`, {
              type: 'AEQ',
              data,
            });
          } catch (error) {
            console.log(error);
          }
        }
        return false;
      });
    },
  },
};
</script>
