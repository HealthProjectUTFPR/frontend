<template>
  <div class="h-848 rounded-2xl bg-white shadow">
    <div class="mx-auto flex items-center justify-center gap-3 pt-7">
      <div class="h-20 w-20">
        <img src="/images/user.png" class="rounded-full object-cover" />
      </div>
    </div>
    <div class="min-w-8 mx-auto mt-10 h-44 max-w-xl shadow-2xl">
      <!-- Modal Name Comeca -->
      <div class="mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class="font-sans text-base font-bold text-white"
            >Nome de Usuário</span
          >
        </div>
        <div class="mr-3 flex items-center justify-between">
          <span
            class="my-1 ml-3 block font-sans text-base font-medium leading-5"
            >{{ user.name }}</span
          >
          <el-button
            type="primary"
            icon="el-icon-edit-outline"
            circle
            size="mini"
            @click="(toggleModalName = true), (modalName.inputNewName = '')"
          ></el-button>
          <div
            v-if="toggleModalName"
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
              <div class="h-48 w-80 rounded bg-white py-1">
                <div class="mt-5 text-center">
                  <span class="text-base font-bold">Editar Nome</span>
                </div>
                <el-form
                  ref="modalNameForm"
                  :model="modalName"
                  :rules="rulesModalName"
                >
                  <div class="mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewName">
                      <el-input
                        v-model="modalName.inputNewName"
                        placeholder="Novo Nome"
                      ></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalName = false"
                    >Cancelar</el-button
                  >
                  <el-button
                    type="success"
                    @click="(toggleModalName = false), submitName()"
                    >Confirmar</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="toggleModalName"
            class="absolute inset-0 z-40 bg-black opacity-25"
          ></div>
        </div>
      </div>
      <!-- Modal Name Termina -->
      <!-- Modal Email Comeca -->
      <div class="mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class="font-sans text-base font-bold text-white">E-mail</span>
        </div>
        <div class="mr-3 flex items-center justify-between">
          <span
            class="my-1 ml-3 block font-sans text-base font-medium leading-5"
            >{{ user.email }}</span
          >
          <el-button
            type="primary"
            icon="el-icon-edit-outline"
            circle
            size="mini"
            @click="
              (toggleModalEmail = true),
                (modalEmail.inputNewEmail = ''),
                (modalEmail.inputConfirmEmail = '')
            "
          ></el-button>
          <div
            v-if="toggleModalEmail"
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
              <div class="h-64 w-80 rounded bg-white py-1">
                <div class="mt-5 text-center">
                  <span class="text-base font-bold">Editar Email</span>
                </div>
                <el-form
                  ref="modalEmailForm"
                  :model="modalEmail"
                  :rules="rulesModalEmail"
                >
                  <div class="mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewEmail">
                      <el-input
                        v-model="modalEmail.inputNewEmail"
                        type="email"
                        placeholder="Novo Email"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3 mb-2">
                    <el-form-item prop="inputConfirmEmail">
                      <el-input
                        v-model="modalEmail.inputConfirmEmail"
                        type="email"
                        placeholder="Confirmar E-mail"
                      ></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-10 flex justify-between">
                  <el-button type="danger" @click="toggleModalEmail = false"
                    >Cancelar</el-button
                  >
                  <el-button
                    type="success"
                    @click="(toggleModalEmail = false), submitEmail()"
                    >Confirmar</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="toggleModalEmail"
            class="absolute inset-0 z-40 bg-black opacity-25"
          ></div>
        </div>
      </div>
      <!-- Modal Email Terminal -->
      <!-- Modal Senha Comeca -->
      <div class="mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class="font-sans text-base font-bold text-white">Senha</span>
        </div>
        <div class="mr-3 flex items-center justify-between">
          <span
            class="my-1 ml-3 block font-sans text-base font-medium leading-5"
            >********</span
          >
          <el-button
            type="primary"
            icon="el-icon-edit-outline"
            circle
            size="mini"
            @click="
              (toggleModalPassword = true),
                (modalPassword.inputConfirmPassword = ''),
                (modalPassword.inputNewPassword = '')
            "
          ></el-button>
          <div
            v-if="toggleModalPassword"
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
              <div class="h-64 w-80 rounded bg-white py-1">
                <div class="mt-5 text-center">
                  <span class="text-base font-bold">Editar Senha</span>
                </div>
                <el-form
                  ref="modalPasswordForm"
                  :model="modalPassword"
                  :rules="rulesModalPassword"
                >
                  <div class="mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewPassword">
                      <el-input
                        v-model="modalPassword.inputNewPassword"
                        placeholder="Nova Senha"
                        show-password
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputConfirmPassword">
                      <el-input
                        v-model="modalPassword.inputConfirmPassword"
                        placeholder="Confirmar Senha"
                        show-password
                      ></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalPassword = false"
                    >Cancelar</el-button
                  >
                  <el-button
                    type="success"
                    @click="(toggleModalPassword = false), submitPassword()"
                    >Confirmar</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="toggleModalPassword"
            class="absolute inset-0 z-40 bg-black opacity-25"
          ></div>
        </div>
      </div>
      <!-- Modal Senha Termina -->
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ProfileC',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      modalName: { inputNewName: '' },
      modalEmail: {
        inputNewEmail: '',
        inputConfirmEmail: '',
      },
      modalPassword: {
        inputConfirmPassword: '',
        inputNewPassword: '',
      },
      toggleModalPassword: false,
      toggleModalEmail: false,
      toggleModalName: false,

      rulesModalName: {
        inputNewName: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
      },

      rulesModalEmail: {
        inputNewEmail: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
        inputConfirmEmail: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
      },

      rulesModalPassword: {
        inputConfirmPassword: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
          { min: 8, message: 'Minímo de 8 caracteres', trigger: 'blur' },
        ],
        inputNewPassword: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
          { min: 8, message: 'Minímo de 8 caracteres', trigger: 'blur' },
        ],
      },
    };
  },
  async created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
      const { data } = await axios.get(
        `http://localhost:3333/users/getMe/${localStorage.getItem('token')}`,
      );
      this.user.name = data.name;
      this.user.email = data.email;
      this.user.id = data.id;
      this.user.password = data.password;
    },
    async updateName() {
      const newName = { name: this.modalName.inputNewName };
      await axios.patch(
        `http://localhost:3333/users/editMe/${localStorage.getItem('token')}`,
        newName,
      );
      this.user.name = this.modalName.inputNewName;
    },
    submitName() {
      this.$refs.modalNameForm.validate((valid) => {
        if (valid) {
          this.updateName();
        } else {
          this.$notify.error({
            title: 'Erro',
            message: 'Nome ou senha inválidos',
          });
        }
      });
    },
    async updateEmail() {
      const newEmail = { email: this.modalEmail.inputNewEmail };
      await axios.patch(
        `http://localhost:3333/users/editMe/${this.user.id}`,
        newEmail,
      );
      this.user.email = this.modalEmail.inputNewEmail;
    },
    submitEmail() {
      this.$refs.modalEmailForm.validate(
        (
          valid,
          flag,
          inputConfirmEmail = this.modalEmail.inputConfirmEmail,
          inputNewEmail = this.modalEmail.inputNewEmail,
        ) => {
          if (valid && inputConfirmEmail === inputNewEmail) {
            flag = true;
            this.updateEmail();
          } else {
            this.$notify.error({
              title: 'Erro',
              message: 'Email inválido',
            });
          }
        },
      );
    },
    async updatePassword() {
      const newPassword = { password: this.modalPassword.inputNewPassword };
      await axios.patch(
        `http://localhost:3333/users/editMe/${this.user.id}`,
        newPassword,
      );
    },
    submitPassword() {
      this.$refs.modalPasswordForm.validate(
        (
          valid,
          flag,
          inputConfirmPassword = this.modalPassword.inputConfirmPassword,
          inputNewPassword = this.modalPassword.inputNewPassword,
        ) => {
          if (valid && inputConfirmPassword === inputNewPassword) {
            flag = true;
            this.updatePassword();
          } else {
            this.$notify.error({
              title: 'Erro',
              message: 'Senha inválida',
            });
          }
        },
      );
    },
  },
};
</script>
