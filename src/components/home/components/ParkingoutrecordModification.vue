<template>
  <div class="from-warpper">
    <div class="title">停车场离开车辆上传</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" label-position="left">
      <el-form-item label="车牌号码">
        <el-input v-model="ruleForm.car_number"></el-input>
      </el-form-item>
      <!--<el-form-item label="车辆离开时间">-->
        <!--<el-col :span="11">-->
          <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.out_time" style="width: 100%;"></el-date-picker>-->
        <!--</el-col>-->
      <!--</el-form-item>-->
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">上传提交</el-button>
        <el-button @click="resetForm('ruleForm')">全部重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParkingioutrecordModification.vue',
  data () {
    return {
      ruleForm: {
        car_number: ''
      },
      rules: {
        car_number: [
          { required: true, message: '请输入进入的车牌号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    formatDate (date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      var h = date.getHours()
      var minute = date.getMinutes()
      minute = minute < 10 ? ('0' + minute) : minute
      var second = date.getSeconds()
      second = second < 10 ? ('0' + second) : second
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
    },
    submitForm (formName) {
      let date = new Date()
      let time = this.formatDate(date)
      let url = '/outrecord/'
      console.log(time)
      console.log(url)
      var that = this
      axios({
        method: 'post',
        url: url,
        data: {
          car: that.ruleForm.car_number,
          parkinglot: that.$store.state.id,
          out_time: time
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
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
      height 30px
      line-height 30px
      font-size 25px
      margin-bottom 30px
    .button
      text-align center
</style>
