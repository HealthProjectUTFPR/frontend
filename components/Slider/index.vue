<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-slider
      v-model="value" max="3"
      :step="1"
      input>
    </el-slider>
    <span>{{value}}</span>
  </div>
</template>
  
  <script>
    export default {
      data() {
        return { 
          value: 0
        }
      }
    }
  </script>