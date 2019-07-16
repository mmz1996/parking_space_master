<template>
  <div>
    <div class="titleinfo">
      <p class="title">JLU-PISP停车场信息管理系统</p>
    </div>
    <userinput></userinput>
  </div>
</template>

<script>
import userinput from './userinput'
export default {
  name: 'login',
  components: {
    userinput
  }
}
</script>

<style lang="stylus" scoped>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } // 去除边框
  .titleinfo
    text-align center
    background-color: #409EFF;
    color: white
    height 100px
    font-size 30px
    .title
      line-height 100px
</style>
