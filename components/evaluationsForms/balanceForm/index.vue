<template>
  <el-card v-if="wait" class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center font-extrabold uppercase"
          >TESTE DE EQUILÍBRIO DE BERG 1</span
        >
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
          format="dd/MM/yyyy"
        >
        </el-date-picker>
      </el-form-item>

      <div class="px-6 py-3">
        <el-form-item label="1. Sentado para em pé">
          <RadioInputGroup
            class="-mt-5"
            group="group-1"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-1']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="2. Em pé sem apoio">
          <RadioInputGroup
            class="-mt-5"
            group="group-2"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-2']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="3. Sentado sem apoio">
          <RadioInputGroup
            class="-mt-5"
            group="group-3"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-3']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="4. Em pé para sentado">
          <RadioInputGroup
            class="-mt-5"
            group="group-4"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-4']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="5. Transferências">
          <RadioInputGroup
            class="-mt-5"
            group="group-5"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-5']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="6. Em pé com os olhos fechados">
          <RadioInputGroup
            class="-mt-5"
            group="group-6"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-6']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="7. Em pé com os pés juntos">
          <RadioInputGroup
            class="-mt-5"
            group="group-7"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-7']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="8. Em pé para sentado">
          <RadioInputGroup
            class="-mt-5"
            group="group-8"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-8']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="9. Apanhar objeto do chão">
          <RadioInputGroup
            class="-mt-5"
            group="group-9"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-9']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="10. Virando-se para olhar para trás">
          <RadioInputGroup
            class="-mt-5"
            group="group-10"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-10']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="11. Girando 360°">
          <RadioInputGroup
            class="-mt-5"
            group="group-11"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-11']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="12. Colocar os pés alternadamente sobre um banco">
          <RadioInputGroup
            class="-mt-5"
            group="group-12"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-12']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="13. Em pé com um pé em frente ao outro">
          <RadioInputGroup
            class="-mt-5"
            group="group-13"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-13']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

        <el-form-item label="14. Em pé apoiado em um dos pés">
          <RadioInputGroup
            class="-mt-5"
            group="group-14"
            :edit="edit"
            :updated-value="optionsGroupsUpdated['group-14']"
            @update="getUpdatedInfo"
          />
        </el-form-item>

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
import formatDateToInput from '@/helpers/formatDateToInput';
import balanceFormAdapter from '@/helpers/adpter/balanceFormAdapter';

export default {
  name: 'BalanceForm',

  components: { RadioInputGroup },

  provide() {
    return { optionsGroups: this.optionsGroups };
  },

  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      wait: false,
      balanceForm: { date: '' },
      evaluationId: '',
      optionsGroupsUpdated: {},
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
      if (this.edit) {
        return Object.values(this.optionsGroupsUpdated).length
          ? Object.values(this.optionsGroupsUpdated).reduce((a, b) => a + b)
          : 0;
      }
      return Object.values(this.optionsGroups).reduce((a, b) => a + b);
    },
  },

  async mounted() {
    this.studentId = sessionStorage.getItem('id');
    if (this.$props.edit) {
      this.evaluationId = this.$route.params.id;
      const { data } = await this.$axios.get(
        `/evaluation/${this.evaluationId}`,
        { params: { type: 'AEQ' } },
      );

      setTimeout(() => {
        this.optionsGroupsUpdated = balanceFormAdapter(data);
        this.balanceForm.date = formatDateToInput(data.date);
        this.wait = true;
      }, 10);
    } else this.wait = true;
  },

  methods: {
    getTotalMsg() {
      if (this.total <= 36) {
        return {
          description: descriptions['total-descriptions'][0],
          type: 'error',
        };
      }
      if (this.total <= 44) {
        return {
          description: descriptions['total-descriptions'][1],
          type: 'warning',
        };
      }
      return {
        description: descriptions['total-descriptions'][2],
        type: 'success',
      };
    },

    getUpdatedInfo(value, group) {
      this.optionsGroupsUpdated[group] = value;
    },

    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = new BalanceForm(
            this.balanceForm.date,
            this.optionsGroups,
            this.total,
          );
          try {
            if (this.$props.edit) {
              await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                type: 'AEQ',
                data,
              });

              this.$message({
                message: 'Avaliação atualizada com sucesso!',
                type: 'success',
              });
            } else {
              await this.$axios.post(`/evaluation/${this.studentId}`, {
                type: 'AEQ',
                data,
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
