<template>
  <div class="api">
    <api-content></api-content>
  </div>
</template>

<script>
// 引入api组件
import apiContent from '../components/content/apiChildren/apiContent.vue'
export default {
  name:'Api',
  components:{
    apiContent
  }
}
</script>

<style  scoped>
  
</style>