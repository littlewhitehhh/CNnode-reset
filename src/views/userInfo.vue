<template>
  <div class="userInfo">
    {{userInfo}}
  </div>
</template>

<script>
import { getUserInfo } from '../network/api'

export default {
  name:'userInfo',
  data() {
    return {
      userInfo:[],
    }
  },
  created() {
    console.log(this.$route.params);
    getUserInfo(this.$route.params.loginname).then(res=>{
      this.userInfo= res.data.data
      console.log(res);
    })
  },
}
</script>

<style>

</style>