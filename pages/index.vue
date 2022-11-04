<template>
  <div>
    <!-- <EvaluationsFormsBalanceForm /> -->
    <!-- <BodyCompositionForm /> -->
    <!-- <SarcopeniaForm /> -->
    <BalanceForm />
  </div>
</template>

<script>
import BodyCompositionForm from '@/components/evaluationsForms/bodyCompositionForm/index.vue';
import SarcopeniaForm from '@/somponents/evaluationsForms/sarcopenia/index.vue';
import BalanceForm from '@/components/evaluationsForms/balanceForm/index.vue';

export default {
  name: 'IndexPage',
  components: { BodyCompositionForm, SarcopeniaForm, BalanceForm },
};
</script>
