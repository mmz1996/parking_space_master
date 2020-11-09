<template>
  <div id = "building">
    <div class="imgtitle">
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
  .imgtitle
    width: 100px;
    height: 100px;
    position: absolute;
    left: 35%;
    top 15%

</style>
