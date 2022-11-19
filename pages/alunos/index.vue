<template>
  <div class="grid">
    <NavBar />
    <el-row justify="space-between" class="p-2">
      <el-col
        v-for="aluno in alunos"
        :key="aluno.id"
        class="my-2 items-center border-b-2 border-solid p-2 flex"
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
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(aluno.id)"
          ></el-button>
        </el-col>
      </el-col>
    </el-row>
    <div class="flex justify-end right-20 bottom-28 absolute">
      <el-button
        type="primary"
        icon="el-icon-plus"
        circle
        @click="toggleModalCreate = true"
      ></el-button>
    </div>

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
                <el-input
                  v-model="modalCreate.birthDate"
                  placeholder="Data de nascimento"
                ></el-input>
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
            <div class="mx-3">
              <el-form-item prop="contact">
                <el-input
                  v-model="modalCreate.contact"
                  placeholder="Contato"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="emergency contact">
                <el-input
                  v-model="modalCreate.emergencyContact"
                  placeholder="Contato de emergência"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="weight">
                <el-input
                  v-model="modalCreate.weight"
                  placeholder="Peso"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="stature">
                <el-input
                  v-model="modalCreate.stature"
                  placeholder="Estatura"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="breed">
                <el-input
                  v-model="modalCreate.breed"
                  placeholder="Raça"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="sex">
                <el-input
                  v-model="modalCreate.sex"
                  placeholder="Sexo"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="healthPlan">
                <el-input
                  v-model="modalCreate.healthPlan"
                  placeholder="Plano de saúde"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mx-3">
              <el-form-item prop="note">
                <el-input
                  v-model="modalCreate.note"
                  placeholder="Observações"
                ></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="mx-3 mt-11 flex justify-between">
            <el-button type="danger" @click="toggleModalCreate = false"
              >Cancelar</el-button
            >
            <el-button
              type="success"
              @click="(toggleModalCreate = false), handleCreate()"
              >Confirmar</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import NavBar from '@/components/bottomNav/index.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      alunos: [],
      moment,
      modalCreate: {
        name: '',
        birthDate: '',
        address: '',
        contact: '',
        emergencyContact: '',
        weight: '',
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
        weight: [
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
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      const { data } = await axios.get('http://localhost:3333/student/index');
      this.alunos = data;
    },
    async handleDelete(index) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      try {
        await axios.patch(`http://localhost:3333/student/delete/${index}`);
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
    async handleCreate() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      try {
        await axios.post(
          'http://localhost:3333/student/create',
          this.modalCreate
        );
        this.$forceUpdate();
        this.$notify.success({
          title: 'Sucesso',
          message: 'Adicionado com sucesso',
        });
      } catch (e) {
        this.$notify.error({
          title: 'Erro',
          message: 'Não foi possível adicionar',
        });
      }
    },
  },
};
</script>
