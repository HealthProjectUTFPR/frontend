<template>
  <div>
    <BalanceEvaluation data-to-edit />
  </div>
</template>

<script>
import BalanceEvaluation from '@/components/evaluationsForms/balanceForm/index.vue';

export default {
  name: 'BalanceEvaluationEdit',
  components: { BalanceEvaluation },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style>

</style>
