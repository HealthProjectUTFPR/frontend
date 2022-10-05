<template>
  <div class="mt-2">
    <el-radio-group v-model="optionsGroups[group]" class="flex-important flex-col">
      <el-radio :label="0">
        0
        <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription(group, 0) }}</span>
      </el-radio>

      <el-radio :label="1" class="md:mt-2">
        1
        <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription(group, 1) }}</span>
      </el-radio>

      <el-radio :label="2" class="md:mt-2">
        2
        <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription(group, 2) }}</span>
      </el-radio>

      <el-radio :label="3" class="md:mt-2">
        3
        <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription(group, 3) }}</span>
      </el-radio>

      <el-radio :label="4" class="md:mt-2">
        4
        <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription(group, 4) }}</span>
      </el-radio>
    </el-radio-group>

    <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription(group, optionsGroups[group]) }}</span>
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
