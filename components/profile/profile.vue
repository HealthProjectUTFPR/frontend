<template>
  <div>
    <div class=" my-2 flex w-full items-center justify-end">
      <typography class=" mr-1 font-sans text-xs">Professor Alexandre de Almeida</typography>
      <div class=" mr-1 h-8 w-8 rounded-full bg-black"></div>
    </div>
    <div class=" h-5 w-full bg-gray-700 text-center">
      <typography class=" font-sans text-xs font-bold text-white">Alunos</typography>
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class=" h-14 w-14 rounded-full bg-black"></div>
      <typography class="font-sans text-sm font-bold leading-5">Nome: Alexander de Almeida</typography>
    </div>
    <div class=" mx-auto mt-16 h-28 w-80 shadow-2xl">
      <div class=" mb-9 h-5 w-full bg-gray-700">
        <div class="text-center">
          <typography class=" font-sans text-xs font-bold text-white">E-mail</typography>
        </div>
        <typography class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">aaa</typography>
      </div>
      <div class=" mb-9 h-5 w-full bg-gray-700">
        <div class="text-center">
          <typography class=" font-sans text-xs font-bold text-white">Senha</typography>
        </div>
        <typography class=" my-1 ml-3 block font-sans text-xs font-medium leading-5">*****</typography>
      </div>
    </div>
    <div class=" absolute left-0 bottom-0 h-14 w-full bg-gray-700">
      <div class=" mx-8 my-2 flex items-center justify-between">
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <typography class=" flex text-xs text-white">Meus Alunos</typography>
        </div>
        <div>
          <i class="el-icon-date mx-8 text-2xl text-white"></i>
          <typography class=" flex text-xs text-white">Meu Calendario</typography>
        </div>
        <div>
          <i class="el-icon-user mx-5 text-2xl text-white"></i>
          <typography class=" flex text-xs text-white">Meus Dados</typography>
        </div>
        <div>
          <i class="el-icon-headset mx-2 text-2xl text-white"></i>
          <typography class=" flex text-xs text-white">Suporte</typography>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  layout: 'empty',
};
</script>
