<template>
  <div class="aboutContent">
    <!-- 布局容器 -->
    <container>
      <!-- 使用具名插槽 -->
      <template slot="mainContent">
        <!-- 面包屑导航 -->
        <breadcrumb></breadcrumb>
         <!-- 内容展示 -->
         <content-module>
           <template slot="title">
             <p> 关于</p>
           </template>
           <template slot="main-content">
             <p class="text">CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
             <p class="text">CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
             <p class="text">CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
             <p class="text">社区目前由 @alsotang 在维护，有问题请联系： <a href="https://github.com/alsotang"> https://github.com/alsotang</a></p>
             <p class="text">请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a> </p>
           </template>
           
         </content-module>
         <content-module>
           <template slot="title">
             <p> 移动客户端</p>
           </template>
           <template slot="main-content">
             <p class="text">客户端由 @soliury 开发维护。</p>
             <p class="text">源码地址：<a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a> 。</p>
             <p class="text">立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
             <p class="text">另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
             
           </template>
         </content-module>

      </template> 

      <template slot="asideContent">
      <aside-item></aside-item>
          
        
      </template>  
    </container> 
  </div>
</template>

<script>
import Container from '../../common/container/container.vue'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb.vue'
import contentModule from '../../common/content/content-module.vue'
import asideItem from '../../common/aside/asideItem.vue'

export default {
  name:'aboutContent',
  components:{
    Container,
    Breadcrumb,
    contentModule ,
    asideItem
  }
}
</script>

<style scoped>
  .text{
    margin:15px 0;
    margin-left: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 15px;
  }
  .text a{
    color:#0088cc;
  }
</style>