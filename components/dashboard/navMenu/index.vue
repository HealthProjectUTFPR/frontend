<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#313d4d"
  text-color="#fff"
  active-text-color="#fff">
  <el-menu-item index="1">Informações do Aluno</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="3">Monitoramento da Saúde</el-menu-item>
  <el-menu-item index="4">Agendar Avaliações</el-menu-item>
  <el-menu-item index="4">Realizar Avaliações</el-menu-item>
  <el-menu-item index="4">Histórico de Avaliações</el-menu-item>
  <el-menu-item index="4">Área do Professor</el-menu-item>
</el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>