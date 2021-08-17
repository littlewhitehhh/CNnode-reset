<template>

<!-- 面包屑导航 -->
  <div class="bread-crumb">
    <span class="s1"><router-link to="/home" class="link">主页</router-link></span> 
    <span class="s2">/</span>
    <span class="s3">{{title}}</span>
  </div>
</template>

<script>
export default {
  name:'Breadcrumb',
  data() {
    return {
          titleLists:['首页','新手入门','api','关于','注册','登录'],
          currentIndex:1
      }
  },
  created() {
    this.currentIndex = window.sessionStorage.getItem('navIndex')
  },
  computed:{
    title(){
      return this.titleLists[this.currentIndex]
    }
  }
}
</script>

<style scoped>
  .bread-crumb{
    background-color: #f6f6f6;
    height: 50px;
    line-height: 50px;
    width: 100%;  
  }
  .bread-crumb span {
    margin: 0 5px;
    font-size: 14px;
  }
  .link {
    color: #80bd01;
  }
</style>