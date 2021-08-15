
<template>

<!-- 
  /* 
    头部导航组件模块

 */
 -->
  <div class="navBar">
    <!-- 容器 -->
    <div class="container">
      <!-- 左侧图标和搜索框 -->
      <div class="left">
        <img src="../../../assets/img/cnodejs_light.svg" alt="">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
           <input type="text" class="sInput">
        </div>
    </div>
    <!-- 右侧导航栏 -->
    <div class="right">
        <div class="item" v-for="(item,index) in titleList" 
                          :key="index" 
                          @click="jumpTo(item,index)"
                          :class="{active:currentIndex ==index?true:false}">{{item.title}}</div>
        <!-- <div class="item">新手入门</div> 
        <div class="item">API</div>
        <div class="item">关于</div>
        <div class="item">注册</div>
        <div class="item">登录</div> -->
    </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name:'navBar',
  data() {
    return {
      // titleList:['首页', '新手入门','API','关于','注册','登录']
      titleList:[
        {
          title:'首页',
          path:'/home'
        },
        {
          title:'新手入门',
          path:'/getStar'
        },
        {
          title:'API',
          path:'/api'
        },
        {
          title:'关于',
          path:'/about'
        },
        {
          title:'注册',
          path:'/register'
        },
        {
          title:'登录',
          path:'/signin'
        },
        
      ],
      currentIndex : 0
    }
  },
  methods: {
    jumpTo(item,index){
      this.$router.push(item.path)
      console.log(item.path);
      this.currentIndex = index
    }
  },
}
</script>

<style scoped>
  .navBar {
    width: 100%;
    height: 50px;
    background-color: #444444;
  }
  .container{
    width: 90%;
    height: 100%;
    /* background-color: red; */
    margin: 0 auto;
    display: flex;
  }
  .left {
    flex: 1;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    
   
  }
  .left img {
    height:28px;
    margin-bottom: 5px;
  }
  .left .search{
    margin-left: 20px;
    width: 300px;
    height: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    background-color: #fff;
  }
  /* .search:hover {
    transition: all .5s;
    background-color: #fff;
  }
  .search:hover .sInput{
    transition: all .5s;
    background-color: #fff;
  } */
  .sInput:focus {
    
    outline: none
  }
  
  .left .sInput{
    flex: 1;
    border: none;
    display: inline-block;  
    /* background-color: #fff; */
  }
  .left .icon-sousuo {
    padding-left:5px ;
  }

  .right{
    flex: 1;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;
  }
  .right .item {
    /* flex: 1; */
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    margin: 10px 20px;
    color: #ccccc3;
    cursor: pointer;
  }
  .right .item:hover{
    color: #fff;

  }

  .right .active{
    color: #fff;
  }
</style>