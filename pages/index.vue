<template>
  <div>
    <!-- <EvaluationsFormsBalanceForm /> -->
    <!-- <BodyCompositionForm /> -->
    <!-- <SarcopeniaForm /> -->
    <CardioRespiratoryForm />
    <BalanceForm />
    <DepressForm />
  </div>
</template>

<script>
// import BodyCompositionForm from '@/components/evaluationsForms/bodyCompositionForm/index.vue';
// import SarcopeniaForm from '@/somponents/evaluationsForms/sarcopenia/index.vue';
// import BalanceForm from '@/components/evaluationsForms/balanceForm/index.vue';
// import CardioRespiratoryForm from '@/components/evaluationsForms/cardiorespiratoryCapacity/index.vue';
import DepressForm from '../components/evaluationsForms/depressForm/index.vue';

export default {
  name: 'IndexPage',
  components: { DepressForm },
};
</script>
