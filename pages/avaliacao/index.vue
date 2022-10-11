<template>
  <div>
    <el-button @click="goToCardiorespiratoryCapacity()"
      >Capacidade Cardiorrespiratória</el-button
    >
  </div>
</template>

<script>
export default {
  name: 'EvaluationIndex',
  components: {},
  methods: {
    goToCardiorespiratoryCapacity() {
      this.$router.push('/avaliacao/criar/capacidadeCardiorrespiratoria');
    },
  },
};
</script>
