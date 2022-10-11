<template>
    <el-switch
      v-model="value1"
      active-text="Sim"
      inactive-text="Não">
  </el-switch>
</template>


<script>
  export default {
    name: 'SwitchInput',
    data() {
      return {
        value1: 0
      }
    }
  };
</script>


