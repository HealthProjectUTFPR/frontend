<template>
  <div>
    <BodyComposition data-to-edit />
  </div>
</template>

<script>
import BodyComposition from '@/components/evaluationsForms/bodyCompositionForm/index.vue';

export default {
  name: 'BodyCompositionEdit',
  components: { BodyComposition },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style>

</style>
