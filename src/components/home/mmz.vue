<template>
  <div class="from-warpper">
    <div class="title">管理员</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号所属管理员姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="管理员的联系方式">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="管理员的身份证号码">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'mmz',
  data () {
    return {
      form: {
        name: '',
        number: '',
        id: ''
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .from-warpper
    width 600px
    padding 20px
    margin-top 30px
    border-radius 10px
    background-color rgba(255, 255, 255, 0.5)
    .title
      text-align center
      height 30px
      line-height 30px
      font-size 20px
      margin-bottom 30px
    .button-warpper
      position relative
      margin 0 auto
      .button
        position relative
        margin 0 auto
        width 160px
</style>
