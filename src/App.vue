<template>
  <div id="app">
    <head-nav-bar></head-nav-bar>
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
 }
  
</style>
