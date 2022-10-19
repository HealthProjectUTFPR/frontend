<template>
  <div>
    <div class=" my-2 flex w-full items-center justify-end">
      <span class=" mr-1 font-sans text-xs">Professor {{ user.name }}</span>
      <div class=" mr-1 h-8 w-8">
        <img src="/images/user.png" class=" rounded-full object-cover"/>
      </div>
    </div>
    <div class=" h-5 w-full bg-gray-700 text-center">
      <span class=" font-sans text-xs font-bold text-white">Meus Dados</span>
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class=" h-14 w-14">
        <img src="/images/user.png" class=" rounded-full object-cover"/>
      </div>
      <span class="font-sans text-sm font-bold leading-5">{{ user.name }}</span>
    </div>
    <div class=" mx-auto mt-16 h-44 w-80 shadow-2xl">
      <!-- Modal Name Comeca -->
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">Nome de Usuário</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">{{ user.name }}</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalName = true, modalName.inputNewName = '',  modalName.inputOldPassword = ''"></el-button>
          <div v-if="toggleModalName" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-56 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Nome</span>
                </div>
                <el-form ref="modalNameForm" :model="modalName" :rules="rulesModalName">
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewName">
                      <el-input v-model="modalName.inputNewName" placeholder="Novo Nome"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputOldPassword">
                      <el-input v-model="modalName.inputOldPassword" placeholder="Senha Atual" show-password></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalName = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalName = false, submitName()">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalName" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
      <!-- Modal Name Termina -->
      <!-- Modal Email Comeca -->
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">E-mail</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">{{ user.email }}</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalEmail = true, modalEmail.inputNewEmail = '', modalEmail.inputOldPassword = '', modalEmail.inputConfirmEmail = ''"></el-button>
          <div v-if="toggleModalEmail" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-72 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Email</span>
                </div>
                <el-form ref="modalEmailForm" :model="modalEmail" :rules="rulesModalEmail">
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="inputNewEmail">
                      <el-input v-model="modalEmail.inputNewEmail" type="email" placeholder="Novo Email"></el-input>
                    </el-form-item>
                  </div>
                  <div class=" mx-3 mb-2">
                    <el-form-item prop="inputConfirmEmail">
                      <el-input v-model="modalEmail.inputConfirmEmail" type="email" placeholder="Confirmar E-mail"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputOldPassword">
                      <el-input v-model="modalEmail.inputOldPassword" placeholder="Senha Atual" show-password></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="mx-3 mt-10 flex justify-between">
                  <el-button type="danger" @click="toggleModalEmail = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalEmail = false, submitEmail()">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalEmail" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
      <!-- Modal Email Terminal -->
      <!-- Modal Senha Comeca -->
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">Senha</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">********</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalPassword = true, modalPassword.inputOldPassword = '', modalPassword.inputNewPassword = ''"></el-button>
          <div v-if="toggleModalPassword" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-56 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Senha</span>
                </div>
                <el-form ref="modalPasswordForm" :model="modalPassword" :rules="rulesModalPassword">
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="inputOldPassword">
                      <el-input v-model="modalPassword.inputOldPassword" placeholder="Senha Atual" show-password></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="inputNewPassword">
                      <el-input v-model="modalPassword.inputNewPassword" placeholder="Nova Senha" show-password></el-input>
                    </el-form-item>
                  </div>
                </el-form>
                  <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalPassword = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalPassword = false, submitPassword()">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalPassword" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
      <!-- Modal Senha Termina -->
    </div>
    <!-- Footer -->
    <div class=" absolute left-0 bottom-0 h-14 w-full bg-gray-700">
      <div class=" mx-8 my-2 flex items-center justify-between">
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meus Alunos</span>
        </div>
        <div>
          <i class="el-icon-date mx-8 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meu Calendario</span>
        </div>
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Meus Dados</span>
        </div>
        <div>
          <i class="el-icon-headset mx-2 text-2xl text-white"></i>
          <span class=" flex text-xs text-white">Suporte</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'UserProfile',
  layout: 'empty',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        id: '',
      },
      modalName: {
        inputOldPassword: '',
        inputNewName: '',
      },
      modalEmail: {
        inputOldPassword: '',
        inputNewEmail: '',
        inputConfirmEmail: '',
      },
      modalPassword: {
        inputOldPassword: '',
        inputNewPassword: '',
      },
      toggleModalPassword: false,
      toggleModalEmail: false,
      toggleModalName: false,

      rulesModalName: {
        inputNewName: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
        inputOldPassword: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
          { min: 8, message: 'Minímo de 8 caracteres', trigger: 'blur' },
        ],
      },

      rulesModalEmail: {
        inputNewEmail: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
        inputConfirmEmail: [
          { required: true, message: 'Campo Obrigatório', trigger: 'blur' },
        ],
        inputOldPassword: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
          { min: 8, message: 'Minímo de 8 caracteres', trigger: 'blur' },
        ],
      },

      rulesModalPassword: {
        inputOldPassword: [
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
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
      const { data } = await axios.get(`http://localhost:3333/users/getMe/${localStorage.getItem('usr-id')}`);
      this.user.name = data.name;
      this.user.email = data.email;
      this.user.id = data.id;
      this.user.password = data.password;
    },
    async updateName() {
      const newName = {
        name: this.modalName.inputNewName,
      };
      await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newName);
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
      const newEmail = {
        email: this.modalEmail.inputNewEmail,
      };
      await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newEmail);
      this.user.email = this.modalEmail.inputNewEmail;
    },
    submitEmail() {
      this.$refs.modalEmailForm.validate((valid) => {
        if (valid && this.inputConfirmEmail === this.inputNewEmail) {
          this.updateEmail();
        } else {
          this.$notify.error({
            title: 'Erro',
            message: 'Email ou senha inválidos',
          });
        }
      });
    },
    async updatePassword() {
      const newPassword = {
        password: this.modalPassword.inputNewPassword,
      };
      await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newPassword);
    },
    submitPassword() {
      this.$refs.modalPasswordForm.validate((valid) => {
        if (valid) {
          this.updatePassword();
        } else {
          this.$notify.error({
            title: 'Erro',
            message: 'Senha inválida',
          });
        }
      });
    },
  },
};
</script>
