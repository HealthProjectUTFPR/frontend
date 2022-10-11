<template>
  <div>
    <el-button @click="goToSarcopenia()">Sarcopenia</el-button>
  </div>
</template>

<script>
export default {
  name: 'EvaluationIndex',
  components: {},
  methods: {
    goToSarcopenia() {
      this.$router.push('/avaliacao/criar/sarcopenia');
    },
  },
};
</script>
