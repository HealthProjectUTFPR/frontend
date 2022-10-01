<template>
  <div>
    <el-button @click="goToSarcopenia()">Sarcopenia</el-button>
  </div>
</template>

<script>

export default {
  components: {},
  methods: {
    goToSarcopenia(){
      this.$router.push('/evaluation/create/sarcopenia')
    }
  }
}
</script>
