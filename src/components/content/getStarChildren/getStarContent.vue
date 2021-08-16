<template>
    <div class="getStarContent">
      <container>
        <!-- 使用具名插槽 -->
      <template slot="mainContent">
        <!-- 面包屑导航 -->
        <breadcrumb></breadcrumb>  
      </template> 
       <!-- 使用具名插槽 -->
      <template slot="asideContent">
        hahaha
      </template>  
      </container>
    </div>
</template>

<script>
// 布局容器组件
import  Container from '../../common/container/container.vue'
// 引入面包屑导航
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb.vue'
export default {
  name:'getStarContent',
  components:{
     Container,
     Breadcrumb
  }
}
</script>

<style>

</style>