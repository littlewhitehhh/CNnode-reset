<template>
  <div class="homeContent">
    <container>
      <!-- 使用插槽 -->
        <template slot="mainContent">
          <!-- 导航栏区域 -->
          <div class="containNavBar">  
            <div class="navBarItem"
                 v-for="(item,index) in navBarList"
                :key="index"
                @click="changeNavItem(item,index)"
                :class="{active:currentIndex == index?true:false}">
              {{item.title}}
            </div>
        </div>
          <!-- 内容展示区域 -->
      <list-item v-for="(item) in itemLists" :key="item.id" :listItem="item" class="list-item"></list-item>
    
        </template>
        <template slot="asideContent">
          <!-- 引入侧边元素组件 -->
          <aside-item></aside-item>
        </template>
    </container>
  </div>
</template>

<script>
import Container from '../../common/container/container.vue'
import listItem from './listItem.vue'
import asideItem from '../../common/aside/asideItem.vue'

// 引入api
import {getTopic} from '../../../network/api'
export default {  
  name:'homeContent',
  components:{
    Container,
    listItem,
    asideItem
  },
  data() {
    return {
      //内容导航栏
      navBarList:[
        {
          title:'全部',
          tab:'all'
        },
        {
          title:'精华',
          tab:'good'
        },
        {
          title:'分享',
          tab:'share'
        },
        {
          title:'问答',
          tab:'ask'
        },
        {
          title:'招聘',
          tab:'job'
        },
        {
          title:'客户端测试',
          tab:'dev'
        },
      ],
      currentIndex:0,
      // 当前页码
      currentPage:1,
  
      // 内容数据
      itemLists:[],
    }
  },
  created() {
    getTopic(1).then((res)=>{
      this.itemLists = res.data.data
      // let data = new Date('2021-08-16T03:49:41.386Z')
      // console.log(data);
    })
    this.currentIndex = window.sessionStorage.getItem('topicIndex')
  },
  methods: {
    // 改变navBar标题 显示不同的内容
    changeNavItem(item,index){
        // console.log(item.tab);
        this.currentIndex =  index
        window.sessionStorage.setItem('topicIndex',index)
        getTopic(this.currentPage,item.tab).then(res=>{
          // console.log(res);
          this.itemLists = res.data.data

        })
        // this.$emit('getItemByTab',item.tab)
    }
  },

}
</script>

<style scoped>
/* .contain{
    background-color: #fff;
  } */
  .containNavBar{
    background-color: #f6f6f6;
    height: 50px;
    width: 100%;
    
  }
  .navBarItem{
    float: left;
    /* width: 45px; */
    /* height: 30px; */
    /* line-height: 30px; */
    margin-left: 20px;
    margin-top: 10px;
    padding: 5px 5px;
    /* box-sizing: border-box; */
    color: #80bd01;
    cursor: pointer;
    font-size: 14px;
    
  }
  .active{
    background-color: #80bd01;
    color: #fff;
    
    border-radius: 5px;
  }
  .list-item:hover{
    background-color: #f5f5f5;
  }
</style>