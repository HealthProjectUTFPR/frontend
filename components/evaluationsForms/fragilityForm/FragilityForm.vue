<template>
  <el-card class="box-card">
    <template #header>
      <div class="flex h-full w-full justify-center">
        <span class="text-center">TESTE DE EQUILÍBRIO DE BERG 1</span>
      </div>
    </template>

    <div class="px-6 py-3">
      <div class="mb-3 flex flex-col">
        <span class="w-auto">1. Sentado para em pé</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-1']" class="flex">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-1', optionsGroups['group-1']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>2. Em pé sem apoio</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-2']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-2', optionsGroups['group-2']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>3. Sentado sem apoio</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-3']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-3', optionsGroups['group-3']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>4. Em pé para sentado</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-4']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-4', optionsGroups['group-4']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>5. Transferências</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-5']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-5', optionsGroups['group-5']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>6. Em pé com os olhos fechados</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-6']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-6', optionsGroups['group-6']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>7. Em pé com os pés juntos</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-7']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-7', optionsGroups['group-7']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>8. Reclinar a frente com os braços estendidos</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-8']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-8', optionsGroups['group-8']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>9. Apanhar objeto do chão</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-9']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-9', optionsGroups['group-9']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>10. Virando-se para olhar para trás</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-10']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-10', optionsGroups['group-10']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>11. Girando 360°</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-11']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-11', optionsGroups['group-11']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>12. Colocar os pés alternadamente sobre um banco</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-12']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-12', optionsGroups['group-12']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>13. Em pé com um pé em frente ao outro</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-13']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-13', optionsGroups['group-13']) }}</span>
        </span>
      </div>

      <div class="mb-3 flex flex-col">
        <span>14. Em pé apoiado em um dos pés</span>

        <span class="mt-2">
          <el-radio-group v-model="optionsGroups['group-14']">
            <el-radio :label="0">0</el-radio>
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
          </el-radio-group>

          <span v-show="screenWidthSize < 768" class="mt-3 block text-xs md:mt-0 md:inline">{{ getDescription('group-14', optionsGroups['group-14']) }}</span>
        </span>
      </div>

      <div>
        <strong>TOTAL:</strong>
        {{ total }}
      </div>
    </div>
  </el-card>
</template>

<script>
import descriptions from '@/components/evaluationsForms/fragilityForm/descriptions';

export default {
  name: 'FragilityForm',

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
