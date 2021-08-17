<template>
    <div class="apiContent">
      <container>
        <!-- 使用具名插槽 -->
      <template slot="mainContent">
        <!-- 面包屑导航 -->
        <breadcrumb></breadcrumb>  
        <!-- 内容展示 -->
        <content-module v-for="(itemList,index) in contentList" :key="index">
          <template slot="title">
            <span>{{itemList.title}}</span>
          </template>
          <template slot="main-content">
              <div class="item-list" v-for="(item,index) in itemList.books" :key="index">
                <p class="bookName">{{item.bookName}}</p>
                <p class="path"><a :href="item.path">{{item.path}}</a></p>
              </div>  
          </template>
        </content-module>
        <div class="last">
          <p class="title"> Node.js 服务器</p>
          <p class="path">新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></p>
         </div>
      </template> 
       <!-- 使用具名插槽 -->
      <template slot="asideContent">
        <aside-item></aside-item>

      </template>  
      </container>
    </div>
</template>

<script>
// 布局容器组件
import  Container from '../../common/container/container.vue'
// 引入面包屑导航
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb.vue'
// 内容展示没模块
import contentModule from '../../common/content/content-module.vue'
import asideItem from '../../common/aside/asideItem.vue'

export default {
  name:'api',
  components:{
     Container,
     Breadcrumb,
     contentModule,
     asideItem
  },
  data() {
    return {
      contentList:[
        {
          title:'Node.js入门',
          books:[
            {
            bookName:'《汇智网 Node.js 课程》',
            path:'http://www.hubwiz.com/course/?type=nodes'
            },
            {
            bookName:'《快速搭建 Node.js 开发环境以及加速 npm》',
            path:'http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html'
            },
            {
            bookName:'《Node.js 包教不包会》',
            path:'https://github.com/alsotang/node-lessons'
            },
            {
            bookName:'《ECMAScript 6入门》',
            path:'http://es6.ruanyifeng.com/'
            },
            {
            bookName:'《ECMAScript 6入门》',
            path:'http://es6.ruanyifeng.com/'
            },
            {
            bookName:'《七天学会NodeJS》',
            path:'https://github.com/nqdeng/7-days-nodejs'
            },
            {
            bookName:'《ECMAScript 6入门》',
            path:'http://www.nodebeginner.org/index-zh-cn.html'
            },
          ]
        },
        {
          title:'Node.js资源',
          books:[
            {
              bookName:'《node weekly》',
              path:'http://nodeweekly.com/issues'
            },
            {
              bookName:'《node123-node.js中文资料导航》',
              path:'https://github.com/youyudehexie/node123'
            },
            {
              bookName:'《A curated list of delightful Node.js packages and resources》',
              path:'https://github.com/sindresorhus/awesome-nodejs'
            },
            {
              bookName:'《Node.js Books》',
              path:'https://github.com/pana/node-books'
            }
          ]
        },
        {
          title:'Node.js 名人',
          books:[{
            bookName:'《名人堂》',
            path:'https://github.com/cnodejs/nodeclub/wiki/名人堂'
          }]
        },
      ]
    }
  },
}
</script>

<style scoped>
  .bookName , 
  .path{
    margin:15px 0;
    margin-left: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 15px;
  }
  .bookName{
    font-weight: 700;
  }
  .path a{
    color: #0088cc;
  }
  .title{
    height: 40px;
    margin: 20px 20px 0;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 1px solid  #f0f0f0;
  }
</style>