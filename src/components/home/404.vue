<template>
  <div>
    <el-col  class="logo">
      JLU_PISP管理系统
    </el-col>
    <p class="page-container">404 page not found</p>
    <p class="page-container">你输入的url有误，请重新输入</p>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped lang="stylus">
  .page-container {
    font-size: 40px
    text-align: center
    color: #303133
  }
  .logo {
    //width:230px;
    font-size: 22px;
    padding-left:20px;
    padding-right:20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;
    background:  #20a0ff
    color:#fff;
}
</style>
