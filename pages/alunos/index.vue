<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-card class="box-card">
    <div class="grid h-60 mb-20">
      <div class="flex h-full w-full justify-between items-center">
        <span class="text-center w-full font-black">ALUNOS</span>
        <el-button
          type="primary"
          icon="el-icon-circle-plus"
          @click="toggleModalCreate = true"
        >
          Criar
        </el-button>
      </div>

      <el-row justify="space-between" class="p-2 pb-28">
        <el-row
          v-for="aluno in alunos"
          :key="aluno.id"
          class="w-full my-2 items-center border-b-2 border-solid p-2 flex"
        >
          <el-col :span="4" class="item-center flex justify-center">
            <img
              src="/images/user.png"
              class="h-20 w-20 object-cover rounded-full"
            />
          </el-col>
          <el-col :span="18" class="flex p-4 flex-col">
            <span class="text-lg font-bold">{{ aluno.name }}</span>
            <span class="text-base text-gray-500 mt-2"
              >Telefone: {{ aluno.contact }}</span
            >
            <span class="text-base text-gray-500 mt-2"
              >Data de nascimento:
              {{ moment(String(aluno.birthDate)).format('DD/MM/YYYY') }}</span
            >
          </el-col>
          <el-col :span="2">
            <el-button
              type="primary"
              icon="el-icon-notebook-2"
              circle
              @click="handleEdit(aluno.id)"
            ></el-button>
          </el-col>
          <el-col :span="2">
            <el-button
              type="warning"
              icon="el-icon-user"
              circle
              @click="$router.push(`/alunos/exibirAluno/${aluno.id}`)"
            ></el-button>
          </el-col>
          <el-col :span="2">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(aluno.id)"
            ></el-button>
          </el-col>
        </el-row>
      </el-row>
      <div
        v-if="toggleModalCreate"
        class="
          absolute
          inset-0
          z-50
          flex
          items-center
          justify-center
          overflow-y-auto overflow-x-hidden
        "
      >
        <div class="relative m-auto">
          <div class="h-auto pb-3 w-80 rounded bg-white">
            <div class="mt-5 text-center">
              <span class="text-base font-bold">Adicionar Aluno</span>
            </div>
            <el-form
              ref="modalCreateForm"
              :model="modalCreate"
              :rules="rulesModalCreate"
            >
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="name">
                  <el-input
                    v-model="modalCreate.name"
                    placeholder="Nome"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="birthDate">
                  <el-date-picker
                    v-model="modalCreate.birthDate"
                    size="large"
                    style="width: 100%"
                    type="date"
                    placeholder="Data"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="address">
                  <el-input
                    v-model="modalCreate.address"
                    placeholder="Endereço"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="contact">
                  <el-input
                    v-model="modalCreate.contact"
                    v-mask="'(##) #####-####'"
                    placeholder="Contato"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="emergency contact">
                  <el-input
                    v-model="modalCreate.emergencyContact"
                    v-mask="'(##) #####-####'"
                    placeholder="Contato de emergência"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="stature">
                  <el-input
                    v-model="modalCreate.stature"
                    placeholder="Estatura"
                    type="number"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="breed">
                  <el-input
                    v-model="modalCreate.breed"
                    placeholder="Raça"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="sex">
                  <el-select
                    v-model="modalCreate.sex"
                    placeholder="Sexo"
                    size="large"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="healthPlan">
                  <el-input
                    v-model="modalCreate.healthPlan"
                    placeholder="Plano de saúde"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="mx-3 mt-3 mb-2">
                <el-form-item prop="note">
                  <el-input
                    v-model="modalCreate.note"
                    placeholder="Observações"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form>
            <div class="mx-3 mt-11 flex justify-between">
              <el-button
                type="danger"
                @click="(toggleModalCreate = false), resetForm()"
                >Fechar</el-button
              >
              <el-button
                type="success"
                @click="(toggleModalCreate = false), handleCreate()"
                >Salvar</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import moment from 'moment';
import VueMask from 'v-mask';
import Vue from 'vue';

Vue.use(VueMask);

export default {
  components: {},
  data() {
    return {
      options: [
        {
          value: 'M',
          label: 'Masculino',
        },
        {
          value: 'F',
          label: 'Feminino',
        },
      ],
      alunos: [],
      moment,
      modalCreate: {
        name: '',
        birthDate: '',
        address: '',
        contact: '',
        emergencyContact: '',
        stature: '',
        breed: '',
        sex: '',
        healthPlan: '',
        note: '',
        flag: true,
      },
      toggleModalCreate: false,
      rulesModalCreate: {
        name: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        birthDate: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        address: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        contact: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        emergencyContact: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        stature: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        breed: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        sex: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        healthPlan: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        note: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  // eslint-disable-next-line require-await
  async created() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
      const { data } = await this.$axios.get('/student/index');
      this.alunos = data;
    },
    handleEdit(id) {
      this.$router.push(`/avaliacao/${id}`);
    },

    async handleDelete(index) {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
      try {
        await this.$axios.patch(`/student/delete/${index}`);
        this.$notify.success({
          title: 'Sucesso',
          message: 'Deletado com sucesso',
        });
        this.alunos.forEach((item) => {
          if (item.id === index) {
            this.alunos.splice(this.alunos.indexOf(item), 1);
          }
        });
      } catch (e) {
        this.$notify.error({
          title: 'Erro',
          message: 'Não foi possível deletar',
        });
      }
    },
    // eslint-disable-next-line require-await
    async handleCreate() {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
      this.$refs.modalCreateForm.validate(async (valid) => {
        if (valid) {
          try {
            await this.$axios.post('/student/create', {
              name: this.modalCreate.name,
              address: this.modalCreate.address,
              sex: this.modalCreate.sex,
              breed: this.modalCreate.breed,
              stature: this.modalCreate.stature,
              contact: this.modalCreate.contact,
              emergencyContact: this.modalCreate.emergencyContact,
              healthPlan: this.modalCreate.healthPlan,
              birthDate: this.modalCreate.birthDate,
              note: this.modalCreate.note,
              flag: true,
            });
            this.$notify.success({
              title: 'Sucesso',
              message: 'Adicionado com sucesso',
            });
            this.getStudents();
            this.resetForm();
          } catch (e) {
            this.$notify.error({
              title: 'Erro',
              message: 'Não foi possível adicionar',
            });
          }
        }
      });
    },
    resetForm() {
      this.modalCreate.name = '';
      this.modalCreate.birthDate = '';
      this.modalCreate.address = '';
      this.modalCreate.contact = '';
      this.modalCreate.emergencyContact = '';
      this.modalCreate.stature = '';
      this.modalCreate.breed = '';
      this.modalCreate.sex = '';
      this.modalCreate.healthPlan = '';
      this.modalCreate.note = '';
    },
  },
};
</script>
<style>
.box-card {
  height: 100%;
  overflow: auto;
}
</style>
