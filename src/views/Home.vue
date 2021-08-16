<template>
  <div class="home">
    <!-- <div class="container">  
      <div class="main">
        <contain-item></contain-item>
       </div>
      <div class="aside">
        <contain-aside></contain-aside>
      </div>
    </div> -->
     <home-content></home-content>   
  </div>
</template>

<script>
// import containItem from '../components/content/contain/containItem.vue'
// import containAside from '../components/content/aside/containAside.vue'
import homeContent from '../components/content/homeChildren/homeContent.vue'

// 引入api
 
// import {getTopic} from '../network/api'
export default {
  name:'home',
  components:{
    // containItem,
    // containAside,
    homeContent 

  },
  data() {
    return {
      topicList:[]
    }
  },
  /* created() {
    getTopic(1).then(res=>{
      console.log(res);
      this.topicList = res.data.data
    })
  }, */
  methods: {
    
  },
}
</script>

<style scoped>
  .container{  
    display: flex;
    margin: 20px auto 0;
    
    width: 90%;
  }
  .main{
    flex: 1;
    /* background-color: pink; */
  }
  .aside {
    margin-left:20px;
    min-width: 290px;
    background: red;
  }
</style>