<template>
  <div>
    <!-- <EvaluationsFormsBalanceForm /> -->
    <!-- <BodyCompositionForm /> -->
    <!-- <SarcopeniaForm /> -->
    <CardioRespiratoryForm />
    <BalanceForm />
    <DepressForm />
    <BatForm />
  </div>
</template>

<script>
// import BodyCompositionForm from '@/components/evaluationsForms/bodyCompositionForm/index.vue';
// import SarcopeniaForm from '@/somponents/evaluationsForms/sarcopenia/index.vue';
// import BalanceForm from '@/components/evaluationsForms/balanceForm/index.vue';
// import CardioRespiratoryForm from '@/components/evaluationsForms/cardiorespiratoryCapacity/index.vue';
// import DepressForm from '../components/evaluationsForms/depressForm/index.vue';
import BatForm from '../components/dashboard/evaluationsForm/batForm/index.vue';

export default {
  name: 'IndexPage',
  components: { BatForm },
};
</script>
