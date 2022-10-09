<template>
  <div>
    <div class=" my-2 flex w-full items-center justify-end">
      <span class=" mr-1 font-sans text-xs">Professor Alexandre de Almeida</span>
      <div class=" mr-1 h-8 w-8 rounded-full bg-black"></div>
    </div>
    <div class=" h-5 w-full bg-gray-700 text-center">
      <span class=" font-sans text-xs font-bold text-white">Meus Dados</span>
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class=" h-14 w-14 rounded-full bg-black"></div>
      <span class="font-sans text-sm font-bold leading-5">Alexander de Almeida</span>
    </div>
    <div class=" mx-auto mt-16 h-44 w-80 shadow-2xl">
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">Nome de Usuário</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">Alexander de Almeida</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalName = true"></el-button>
          <div v-if="toggleModalName" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-56 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Nome</span>
                </div>
                <div class=" mx-3 mt-3 mb-2">
                  <el-input v-model="inputNewName" placeholder="Novo Nome"></el-input>
                </div>
                <div class="mx-3">
                  <el-input v-model="inputOldPassorwd" placeholder="Senha Atual" show-password></el-input>
                </div>
                <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalName = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalName = false">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalName" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">E-mail</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">aaa@g.com</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalEmail = true"></el-button>
          <div v-if="toggleModalEmail" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-72 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Email</span>
                </div>
                <div class=" mx-3 mt-3 mb-2">
                  <el-input v-model="inputNewEmail" type="email" placeholder="Novo Email"></el-input>
                </div>
                <div class=" mx-3 mb-2">
                  <el-input v-model="inputConfirmEmail" type="email" placeholder="Confirmar E-mail"></el-input>
                </div>
                <div class="mx-3">
                  <el-input v-model="inputOldPassorwd" placeholder="Senha Atual" show-password></el-input>
                </div>
                <div class="mx-3 mt-14 flex justify-between">
                  <el-button type="danger" @click="toggleModalEmail = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalEmail = false">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalEmail" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
      <div class=" mb-10 h-5 w-full bg-gray-700">
        <div class="text-center">
          <span class=" font-sans text-xs font-bold text-white">Senha</span>
        </div>
        <div class=" mr-3 flex items-center justify-between">
          <span class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">********</span>
          <el-button type="primary" icon="el-icon-edit-outline" circle size="mini" @click="toggleModalPassword = true"></el-button>
          <div v-if="toggleModalPassword" class="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div class=" relative m-auto">
              <div class=" h-56 w-80 rounded bg-white">
                <div class=" mt-5 text-center">
                  <span class=" text-base font-bold">Editar Senha</span>
                </div>
                <div class=" mx-3 mt-3 mb-2">
                  <el-input v-model="inputOldPassorwd" placeholder="Senha Atual" show-password></el-input>
                </div>
                <div class="mx-3">
                  <el-input v-model="inputNewPassorwd" placeholder="Nova Senha" show-password></el-input>
                </div>
                <div class="mx-3 mt-11 flex justify-between">
                  <el-button type="danger" @click="toggleModalPassword = false">Cancelar</el-button>
                  <el-button type="success" @click="toggleModalPassword = false">Confirmar</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="toggleModalPassword" class=" absolute inset-0 z-40 bg-black opacity-25"></div>
        </div>
      </div>
    </div>
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
export default {
  name: 'UserProfile',
  layout: 'empty',
  data() {
    return {
      toggleModalPassword: false,
      toggleModalEmail: false,
      toggleModalName: false,
      inputOldPassorwd: '',
      inputNewPassorwd: '',
      inputNewEmail: '',
      inputConfirmEmail: '',
      inputNewName: '',
    };
  },
};
</script>
