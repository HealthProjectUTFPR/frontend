<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center">TESTE DE EQUILÍBRIO DE BERG 1</span>
      </div>
    </template>

    <div class="px-6 py-3">
      <div class="mb-3 flex flex-col">
        <span>1. Sentado para em pé</span>
        <div class="mt-2">
          <el-radio-group v-model="optionsGroups['group-1']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-1', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-1', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-1', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-1', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-1', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-1', optionsGroups['group-1']) }}</span>
        </div>
      </div>

      <div class="mb-3 flex flex-col">
        <span>2. Em pé sem apoio</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-2']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-2', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-2', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-2', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-2', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-2', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-2', optionsGroups['group-2']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>3. Sentado sem apoio</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-3']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-3', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-3', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-3', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-3', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-3', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-3', optionsGroups['group-3']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>4. Em pé para sentado</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-4']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-4', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-4', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-4', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-4', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-4', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-4', optionsGroups['group-4']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>5. Transferências</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-5']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-5', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-5', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-5', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-5', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-5', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-5', optionsGroups['group-5']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>6. Em pé com os olhos fechados</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-6']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-6', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-6', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-6', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-6', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-6', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-6', optionsGroups['group-6']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>7. Em pé com os pés juntos</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-7']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-7', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-7', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-7', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-7', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-7', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-7', optionsGroups['group-7']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>8. Reclinar a frente com os braços estendidos</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-8']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-8', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-8', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-8', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-8', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-8', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-8', optionsGroups['group-8']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>9. Apanhar objeto do chão</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-9']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-9', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-9', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-9', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-9', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-9', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-9', optionsGroups['group-9']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>10. Virando-se para olhar para trás</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-10']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-10', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-10', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-10', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-10', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-10', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-10', optionsGroups['group-10']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>11. Girando 360°</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-11']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-11', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-11', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-11', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-11', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-11', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-11', optionsGroups['group-11']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>12. Colocar os pés alternadamente sobre um banco</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-12']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-12', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-12', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-12', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-12', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-12', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-12', optionsGroups['group-12']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>13. Em pé com um pé em frente ao outro</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-13']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-13', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-13', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-13', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-13', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-13', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-13', optionsGroups['group-13']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>14. Em pé apoiado em um dos pés</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-14']" class="flex-important flex-col">
            <el-radio :label="0">
              0
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-14', 0) }}</span>
            </el-radio>

            <el-radio :label="1" class="md:mt-2">
              1
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-14', 1) }}</span>
            </el-radio>

            <el-radio :label="2" class="md:mt-2">
              2
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-14', 2) }}</span>
            </el-radio>

            <el-radio :label="3" class="md:mt-2">
              3
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-14', 3) }}</span>
            </el-radio>

            <el-radio :label="4" class="md:mt-2">
              4
              <span v-show="screenWidthSize >= 768" class="custom-color-gray ml-24 inline-block font-normal">{{ getDescription('group-14', 4) }}</span>
            </el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-14', optionsGroups['group-14']) }}</span>
        </span>
      </div>

      <div>
        <strong class="mr-2">TOTAL:</strong>
        {{ total }}
      </div>
    </div>
  </el-card>
</template>

<script>
import descriptions from '@/components/evaluationsForms/balanceForm/descriptions';

export default {
  name: 'BalanceForm',
  data() {
    return {
      screenWidthSize: window.innerWidth,
      optionsGroups: {
        'group-1': 4,
        'group-2': 4,
        'group-3': 4,
        'group-4': 4,
        'group-5': 4,
        'group-6': 4,
        'group-7': 4,
        'group-8': 4,
        'group-9': 4,
        'group-10': 4,
        'group-11': 4,
        'group-12': 4,
        'group-13': 4,
        'group-14': 4,
      },
    };
  },

  computed: {
    total() {
      return Object.values(this.optionsGroups).reduce((a, b) => a + b);
    },
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
