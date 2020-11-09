<template>
  <div id = "building">
    <div class="imgtitle">
        <div class="titleinfo">
          <p class="title">JLU-PISP信息管理系统</p>
        </div>
        <userinput></userinput>
    </div>
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

  #building{
    background:url("../../assets/tingchechang.jpg");
    width:100%;			//大小设置为100%
    height:100%;			//大小设置为100%
    position:fixed;
    background-size:100% 100%;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .titleinfo
    text-align center
    /*background-color: #409EFF;*/
    color: white
    height 100px
    font-size 30px
    .title
      line-height 200px

</style>
