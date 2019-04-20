<template>
  <div class="form-position">
    <div class="titleinfo">停车场信息管理系统</div>
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

<style lang="stylus">
  @import url("//unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } // 去除边框
  .form-position
    position fixed
    display: -webkit-flex
    display fixe
    -webkit-align-items: center
    justify-content center
    -webkit-align-items: center
    align-items center
    -webkit-flex-direction: column
    flex-direction columns
    overflow hidden
    top 26px
    left 0
    right 0
    bottom 0
    .titleinfo
      font-size 30px
      margin-bottom 20px
      padding 0 10px
      border-radius 25px
      background-color rgba(255, 255, 255, 0.5)
</style>
