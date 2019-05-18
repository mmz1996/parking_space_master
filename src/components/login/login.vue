<template>
  <div>
    <div class="titleinfo">JLU-PISP停车场信息管理系统</div>
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
  @import url("//unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } // 去除边框
  .titleinfo
    padding 30px
    text-align center
    background-color: #409EFF;
    color: white;
    height 100px
    font-size 30px
</style>
