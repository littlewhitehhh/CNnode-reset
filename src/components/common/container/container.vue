<template>
<!-- 布局容器 -->
  <div class="container">
    <div class="main">
      <!-- 定义具名插槽 -->
      <slot name="mainContent"></slot>
    </div>
    <div class="aside">
      <slot name="asideContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .container{  
    display: flex;
    margin: 20px auto ; 
    width: 90%;
  }
  .main{
    flex: 1;
    background-color: #fff;
  }
  .aside {
    margin-left:20px;
    min-width: 290px;
    background: #e1e1e1;
  }
</style>