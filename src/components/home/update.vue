<template>
  <div class="from-warpper">
    <div class="title">停车场停车记录上传</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="车牌号码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="车辆进入时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
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
  name: 'update',
  data () {
    return {
      form: {
        name: '',
        date1: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
