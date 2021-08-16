<template>
    <div class="listItem">
      <!-- 作者头像 -->
      <div class="author">
        <img :src="listItem.author.avatar_url" :title="listItem.author.loginname" :alt="listItem.author.loginname">
      </div>
      <!-- 转发和浏览 -->
      <div class="reply-visit">{{replyAndVisit}}</div>
      <!-- 是否置顶 -->
      <div class="top" v-if="listItem.top == true">置顶</div>
      <!-- <div class="top" v-else-if="listItem.tab == good">精华</div> -->

      <!-- <div class="top" v-else-if="listItem.tab == share">分享</div> -->
      <!-- <div class="top" v-if="listItem.top == true">指定</div> -->
      <div class="title">
        <router-link to="/" class="link">{{listItem.title}}</router-link>
      </div>

      <div class="lastReply">
       <span> {{listItem.last_reply_at | formatDate}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name:'listItem',
  props:['listItem'],
  computed:{
    replyAndVisit(){
      return this.listItem.reply_count + '/' + this.listItem.visit_count
    }
  }
}
</script>

<style scoped>
  .listItem{
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
    line-height:50px;
    display: flex;
    align-items: center;
  }
  .author {
    margin-left:14px ;
    height: 40px;
    overflow: hidden;
  }
  .author img {
    height: 100%;
  }
  .reply-visit{
    font-size: 12px;
    color: #b4b4c5;
    margin-left: 14px;
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
  .title{
    margin-left: 14px;
    /* display: flex; */
    width: 70%;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  
  .lastReply{
    flex: 1;
    
  }
  .lastReply span{
    float: right;
    margin-right: 10px;
    font-size: 10px;
  }
</style>