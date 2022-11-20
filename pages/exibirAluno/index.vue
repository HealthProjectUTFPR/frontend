<template>

  <div>
    <NavBar />
    <div class=" my-2 flex w-full items-center justify-end">
      <span class=" mr-1 font-sans text-xs">Aluno </span>
      <div class=" mr-1 h-8 w-8">
        <img src="/images/user.png" class=" rounded-full object-cover"/>
      </div>
    </div>
    <div class=" h-7 w-full bg-gray-700 text-center">
      <span class=" font-sans text-xs font-bold text-white">Informações do Aluno</span>
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class="mb-2 flex flex-row">
          <div class="mr-2"><img src="/images/user.png" class=" rounded-full object-cover" height="70" width="70"/></div>
          <div class="mb-2 flex flex-col"><span><b>Nome:</b> Mario Andrade</span>
            <span><b><b></b>Idade:</b> 56</span></div>
      </div>
      <span class="font-sans text-sm font-bold leading-5 pr-6 pb-6"></span>
    </div>
    <div class=" mx-auto mt-16 h-57 w-7/12 shadow-2xl md: w-7/12 lg:7/12">

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
              <div class="w-2/4">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Data de nascimento</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">03/12/1940</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Endereço</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">Av. Carlos Gomes, 755, apto 604</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Contato</span>
                  </div>
                    <div class="w-ful mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">(44) 00000-0000</span> 
                  </div>
              </div>
              <div style="width: 50%">
                  <div class="text-center">
                      <span class="font-sans text-xs font-bold text-white">Contato de emergência</span>
                  </div>
                    <div class="w-full mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">(51) 99275-4561 Márcia (filha)</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Peso</span>
                  </div>
                    <div class="mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">53 Kg</span> 
                  </div>
              </div>
              <div style="width: 50%">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Estatura</span>
                  </div>
                    <div class="mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">1,62m</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Raça</span>
                  </div>
                    <div class="mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">Negra</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Sexo</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class=" w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">Masculino</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">IMC</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class=" w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">20,2 Kg/m²</span> 
                  </div>
              </div>
              <div class="w-2/4">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Plano de saúde</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8 text-center">Unimed</span> 
                  </div>
              </div>
          </div>
      </div>

      <div class=" mb-10 h-7 w-full bg-gray-700">
          <div class="mb-2 flex flex-row">
            <div class="w-full">
                  <div class="text-center">
                      <span class=" font-sans text-xs font-bold text-white">Observações</span>
                  </div>
                    <div class=" mr-3 flex items-center justify-between">
                      <span class="w-full my-1 ml-3 block font-sans text-xs font-medium leading-8">Descrição...</span> 
                  </div>
              </div>
          </div>
      </div>

      
        <div class="flex justify-end pr-2 pb-2">
          <el-button type="primary" icon="el-icon-edit-outline" circle size="medium" @click="toggleModalPassword = true, modalPassword.inputOldPassword = '', modalPassword.inputNewPassword = ''"></el-button>
          <div v-if="toggleModalPassword" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-auto pb-3 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Dados</span>
                </div>
                <el-form ref="modalPasswordForm" :model="modalPassword" :rules="rulesModalPassword">
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="birthDate">
                      <el-input v-model="modalPassword.birthDate" placeholder="Data de nascimento"></el-input>
                    </el-form-item>
                  </div>
                  <div class=" mx-3 mt-3 mb-2">
                    <el-form-item prop="address">
                      <el-input v-model="modalPassword.address" placeholder="Endereço"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="contact">
                      <el-input v-model="modalPassword.contact" placeholder="Contato"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="emergency contact">
                      <el-input v-model="modalPassword.emergencyContact" placeholder="Contato de emergência"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="weight">
                      <el-input v-model="modalPassword.weight" placeholder="Peso"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="stature">
                      <el-input v-model="modalPassword.stature" placeholder="Estatura"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="breed">
                      <el-input v-model="modalPassword.breed" placeholder="Raça"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="sex">
                      <el-input v-model="modalPassword.sex" placeholder="Sexo"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="imc">
                      <el-input v-model="modalPassword.imc" placeholder="IMC"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="healthPlan">
                      <el-input v-model="modalPassword.healthPlan" placeholder="Plano de saúde"></el-input>
                    </el-form-item>
                  </div>
                  <div class="mx-3">
                    <el-form-item prop="note">
                      <el-input v-model="modalPassword.note" placeholder="Observações"></el-input>
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
        
        <div class="flex justify-end right-20 bottom-28 absolute">
          <el-button
            type="primary"
            size="medium"
            icon="el-icon-s-order"
            circle
            @click="toggleModalCreate = true"
          ></el-button>
        </div>
              

      
        
      

     </div>

  </div>  
</template>

<script>

// import axios from 'axios';
import NavBar from '@/components/bottomNav/index.vue';

export default {
  name: 'UserProfile',
  layout: 'empty',

  components: {
    NavBar,
  },
  
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        id: '',
      },
      modalPassword: {
        birthDate: '',
        address: '',
        contact: '',
        emergencyContact: '',
        weight: '',
        statute: '',
        breed: '',
        sex: '',
        healthPlan: '',
        imc: '',
        note: '',
      },
      toggleModalPassword: false,


      rulesModalPassword: {
        birthDate: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        address: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        contact: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        emergencyContact: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        weight: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        stature: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        breed: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        sex: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        healthPlan: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        imc: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
        note: [
          { required: true, message: 'Campo obrigatório', trigger: 'blur' },
        ],
      },
    };
  },
  // async created() { const imc = (weight, height) => (weight / (height / 100) ** 2);
  //   this.getUser();
  // },
  // methods: {
  //   async getUser() {
  //     axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
  //     const { data } = await axios.get(`http://localhost:3333/users/getMe/${localStorage.getItem('usr-id')}`);
  //     this.user.name = data.name;
  //     this.user.email = data.email;
  //     this.user.id = data.id;
  //     this.user.password = data.password;
  //   },
  //   async updateName() {
  //     const newName = {
  //       name: this.modalName.inputNewName,
  //     };
  //     await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newName);
  //     this.user.name = this.modalName.inputNewName;
  //   },
  //   submitName() {
  //     this.$refs.modalNameForm.validate((valid) => {
  //       if (valid) {
  //         this.updateName();
  //       } else {
  //         this.$notify.error({
  //           title: 'Erro',
  //           message: 'Nome ou senha inválidos',
  //         });
  //       }
  //     });
  //   },
  //   async updateEmail() {
  //     const newEmail = {
  //       email: this.modalEmail.inputNewEmail,
  //     };
  //     await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newEmail);
  //     this.user.email = this.modalEmail.inputNewEmail;
  //   },
  //   submitEmail() {
  //     this.$refs.modalEmailForm.validate((valid) => {
  //       if (valid && this.inputConfirmEmail === this.inputNewEmail) {
  //         this.updateEmail();
  //       } else {
  //         this.$notify.error({
  //           title: 'Erro',
  //           message: 'Email ou senha inválidos',
  //         });
  //       }
  //     });
  //   },
  //   async updatePassword() {
  //     const newPassword = {
  //       password: this.modalPassword.inputNewPassword,
  //     };
  //     await axios.patch(`http://localhost:3333/users/editMe/${this.user.id}`, newPassword);
  //   },
  //   submitPassword() {
  //     this.$refs.modalPasswordForm.validate((valid) => {
  //       if (valid) {
  //         this.updatePassword();
  //       } else {
  //         this.$notify.error({
  //           title: 'Erro',
  //           message: 'Senha inválida',
  //         });
  //       }
  //     });
  //   },
  // },
};
</script>