<template>
  <div class="asideItem">
    <div class="login">
      <p >CNode：Node.js专业中文社区</p>
      <p>您可以登录或注册,也可以</p>
      <div>通过github登录</div>
    </div>
    <!-- 插槽,万一需要填东西呢 -->
    <div class="">
      <slot></slot>  
    </div> 
    <!-- 友情社区 -->
    <div class="community">
      <div class="title">
        友情社区
      </div>
      <div class="content">
        我是社区内容
      </div>
    </div>

    <!-- 二维码 -->
    <div class="community">
      <div class="title">
        客户端二维码
      </div>
      <div class="content">
        我是二维码
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  name:'asideItem',

}
</script>

<style scoped>
  /* .asideItem{
    width: 100%;
    background-color: #fff;
  } */
  .login{
    height: 120px;
    background-color: #fff;
    box-sizing: border-box;
    /* padding: 10px 0 10px 10px; */
  }
  .login p{
    margin: 10px 0  0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;

  }
  .login div {
    margin: 0 auto;
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    background-color: skyblue;
    color: #fff;
    font-size: 14px;
  }
  .login div:hover{
    background-color: blue;
  }

  .community{
    margin-top: 15px;
    background-color: #fff;
   
    /* margin-left: 10px; */
  }
  .title{
    background-color: #f0f0f0;
    padding-left:10px ;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
  .content{
    height: 300px;
    text-align: center;
    line-height: 300px;
  }
</style>