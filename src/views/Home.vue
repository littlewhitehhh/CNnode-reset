<template>
  <div class="hhh">
      这里是home页面
      <contain-item></contain-item>
      <contain-aside></contain-aside>
  </div>
</template>

<script>
import containItem from '../components/content/contain/containItem.vue'
import containAside from '../components/content/aside/containAside.vue'

export default {
  name:'home',
  components:{
    containItem,
    containAside
  }
}
</script>

<style>

</style>