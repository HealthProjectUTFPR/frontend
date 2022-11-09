<template>
  <div class="mt-2">
    <span class="demonstration"></span>
    <el-slider
      v-model="optionsGroups[group]" :max="4"
      :step="1"
      input-size="large"
      input>
    </el-slider>

    <span class="mt-3 block text-xs md:text-sm md:mt-0 md:inline">{{ getDescription(group, optionsGroups[group]) }}</span>
  </div>
</template>

<script>
import descriptions from '@/components/evaluationsForms/balanceForm/descriptions';

export default {
  name: 'RadioInputGroup',
  inject: ['optionsGroups'],

  props: {
    group: {
      type: String,
      default: '',
    },
  },

  data() {
    return { screenWidthSize: window.innerWidth };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.screenWidthSize = window.innerWidth;
    },

    getDescription(group, description) {
      return descriptions[group][description];
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .flex-important {
    display: flex !important;
  }

  .custom-color-gray {
    color: #303133;
    font-weight: normal;
  }
}
</style>
