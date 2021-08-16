<template>
  <div class="content-module">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="main-content">
      <slot name="main-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'content-module',
}
</script>

<style scoped>
  .title{
    height: 40px;
    margin: 20px 20px 0;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 1px solid  #f0f0f0;
  }
</style>