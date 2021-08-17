<template>
  <div class="topicDetail">
    <!-- 布局容器 -->
    <container>
      <!-- 使用插槽 -->
      <template slot="mainContent">
        <!-- 头部 -->
        <div class="head">
          <div class="title">
            <!-- 是否置顶 -->
            <div class="top" v-if="detailList.top == true">置顶</div>
            <!-- 标题名 -->
            <span class="topic-title">{{detailList.title}}</span>
          </div>
          <!-- 底部标签 -->
          <ul class="tag">
            <li class="item">发布于 {{detailList.create_at | formatDate}}</li>
            <li class="item">作者 {{detailList.author.loginname}}</li>
            <li class="item">{{detailList.visit_count}}次浏览</li>
            <li class="item">来自{{detailList.tab}}</li>
          </ul>
        </div>
        <div class="content">
          <p v-html="detailList.content"></p>
        </div>
        
      </template>
      <template slot="asideContent">
        嘿嘿嘿
      </template>
      
    </container>
  </div>
</template>

<script>
import Container from '../components/common/container/container.vue'
//引入api
import {getTopicDetial} from '../network/api'
export default {
  name:'topicDetail',
  components:{
    Container
  },
  data() {
    return {
      detailList:[],
    }
  },
  created() {
   console.log(this.$route.params.id);
   getTopicDetial(this.$route.params.id).then(res=>{
     console.log(res);
     this.detailList = res.data.data
   })
  },
}

</script>

<style scoped>
li{
  list-style-type: disc;
}
.head{
  height: 80px;
  /* line-height: 110px; */
  border-bottom: 1px solid #e5e5e5;
}
.title {
  display: flex;
  height: 60px;
  align-items: center;
}
.top {
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #80bd01;
    color: #fff;
    font-size: 12px;
    margin-left: 14px;
    border-radius: 5px;
  }
.topic-title{
  flex: 1;
  margin-left: 10px;
 font-size: 22px;
 font-weight: 700;
}
.tag{
  height:20px ;
  margin:0;
  padding: 0;
  margin-left: 10px;
}
.tag .item{
  float: left;
  margin-left: 20px;
  font-size: 12px;
  color: #838383;
}
img{
  width: 100%;
}
</style>