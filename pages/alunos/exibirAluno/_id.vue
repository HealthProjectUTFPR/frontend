<template>
  <div>
    <NavBar />

    <div class="my-2 flex w-full items-center justify-end">
      <span class="mr-1 font-sans text-xs">Aluno </span>
      <div class="mr-1 h-8 w-8">
        <img src="/images/user.png" class="rounded-full object-cover" />
      </div>
    </div>
    <div class="h-7 w-full bg-gray-700 text-center">
      <span class="font-sans text-xs font-bold text-white"
        >Informações do Aluno</span
      >
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class="mb-2 flex flex-row">
        <div class="mr-2">
          <img
            src="/images/user.png"
            class="rounded-full object-cover"
            height="70"
            width="70"
          />
        </div>
        <div class="mb-2 flex flex-col">
          <span><b>Nome:</b> {{ student.name }} </span>
          <span
            ><b><b></b>Idade:</b> 56</span
          >
        </div>
      </div>
      <span class="font-sans text-sm font-bold leading-5 pr-6 pb-6"></span>
    </div>
    <div
      :key="componentKey"
      class="h-57 md: lg:7/12 mx-auto mt-16 w-7/12 shadow-2xl w-7/12"
    >
      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Data de nascimento</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{
                  moment(String(studentEdit.birthDate)).format('DD/MM/YYYY')
                }}</span
              >
            </div>
          </div>
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Endereço</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.address }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Contato</span
              >
            </div>
            <div class="w-ful mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.contact }}</span
              >
            </div>
          </div>
          <div style="width: 50%">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Contato de emergência</span
              >
            </div>
            <div class="w-full mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.emergencyContact }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Plano de Saúde</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.healthPlan }}</span
              >
            </div>
          </div>
          <div style="width: 50%">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Estatura</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.stature }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white">Raça</span>
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.breed }}</span
              >
            </div>
          </div>
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white">Sexo</span>
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ studentEdit.sex }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-full">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Observações</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                "
                >{{ studentEdit.note }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end pr-2 pb-2">
        <el-button
          type="primary"
          icon="el-icon-edit-outline"
          circle
          size="medium"
          @click="toggleModalEdit = true"
        ></el-button>
        <div
          v-if="toggleModalEdit"
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
                <span class="text-base font-bold">Editar Dados</span>
              </div>
              <el-form ref="modalEditForm" :model="studentEdit">
                <div class="mx-3 mt-3 mb-2">
                  <el-form-item prop="birthDate">
                    <el-input
                      v-model="studentEdit.birthDate"
                      placeholder="Data de nascimento"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3 mt-3 mb-2">
                  <el-form-item prop="address">
                    <el-input
                      v-model="studentEdit.address"
                      placeholder="Endereço"
                      value="fdsfds"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="contact">
                    <el-input
                      v-model="studentEdit.contact"
                      placeholder="Contato"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="emergency contact">
                    <el-input
                      v-model="studentEdit.emergencyContact"
                      placeholder="Contato de emergência"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="stature">
                    <el-input
                      v-model="studentEdit.stature"
                      placeholder="Estatura"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="breed">
                    <el-input
                      v-model="studentEdit.breed"
                      placeholder="Raça"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="sex">
                    <el-input
                      v-model="studentEdit.sex"
                      placeholder="Sexo"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="healthPlan">
                    <el-input
                      v-model="studentEdit.healthPlan"
                      placeholder="Plano de saúde"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="note">
                    <el-input
                      v-model="studentEdit.note"
                      placeholder="Observações"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form>
              <div class="mx-3 mt-11 flex justify-between">
                <el-button type="danger" @click="handleCancel()"
                  >Cancelar</el-button
                >
                <el-button type="success" @click="handleEdit()"
                  >Confirmar</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="toggleModalEdit"
          class="absolute inset-0 z-40 bg-black opacity-25"
        ></div>
      </div>

      <div class="flex justify-end right-20 bottom-28 absolute">
        <el-button
          type="primary"
          size="medium"
          icon="el-icon-s-order"
          circle
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import NavBar from '../../../components/bottomNav/index.vue';

export default {
  name: 'UserProfile',

  components: {
    NavBar,
  },
  layout: 'empty',

  data() {
    return {
      moment,
      componentKey: 0,
      student: {},
      studentEdit: {
        birthDate: '',
        address: '',
        contact: '',
        emergencyContact: '',
        stature: '',
        breed: '',
        sex: '',
        healthPlan: '',
        note: '',
      },
      toggleModalEdit: false,
    };
  },
  async created() {
    this.student.id = this.$route.params.id;
    await this.getStudent();
    this.studentEdit.birthDate = moment(String(this.student.birthDate)).format(
      'DD/MM/YYYY'
    );
    this.studentEdit.address = this.student.address;
    this.studentEdit.contact = this.student.contact;
    this.studentEdit.emergencyContact = this.student.emergencyContact;
    this.studentEdit.stature = this.student.stature;
    this.studentEdit.breed = this.student.breed;
    this.studentEdit.sex = this.student.sex;
    this.studentEdit.healthPlan = this.student.healthPlan;
    this.studentEdit.note = this.student.note;
  },
  methods: {
    async getStudent() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      const { data } = await axios.get(
        `http://localhost:3333/student/show/${this.student.id}`
      );
      this.student = data;
    },
    async handleEdit() {
      try {
        const { data } = await axios.patch(
          `http://localhost:3333/student/update/${this.student.id}`,
          this.studentEdit
        );
        this.$notify.success({
          title: 'Sucesso',
          message: 'Categoria atualizada com sucesso!',
        });
        this.resetForm(data);
        this.toggleModalEdit = false;
      } catch (e) {
        this.$notify.error({
          title: 'Erro',
          message: 'Não foi possível atualizar',
        });
      }
    },
    resetForm(student) {
      this.componentKey += 1;
      this.studentEdit = student;
      this.studentEdit.birthDate = moment(String(student.birthDate)).format(
        'DD/MM/YYYY'
      );
    },
    async handleCancel() {
      this.componentKey += 1;
      this.studentEdit = this.student;
      this.studentEdit.birthDate = moment(
        String(this.student.birthDate)
      ).format('DD/MM/YYYY');
      this.toggleModalEdit = false;
    },
  },
};
</script>
