<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <head-nav-bar></head-nav-bar>
    <!-- 路由占位符 -->
    <router-view/>
  </div>
</template>
<script>
import headNavBar from './components/content/navBar/headNavBar.vue'
export default {
  name:'app',
  components:{
    headNavBar,
  }
}
</script>
<style>
 html,body,#app{
   margin: 0;
   padding: 0;
   list-style: none;
   background-color: #e1e1e1;
 }
 a{
    text-decoration: none;
    color: black;
 }
 a:hover{
   text-decoration: underline;
 }
li{
  list-style: none;
}
/* body,div,span,a,p,ul,li{
  padding: 0;
  margin: 0;
} */
</style>
