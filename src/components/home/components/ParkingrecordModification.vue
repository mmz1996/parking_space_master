<template>
  <div class="from-warpper">
    <div class="title">停车场停车记录上传</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" label-position="left">
      <el-form-item label="车牌号码">
        <el-input v-model="ruleForm.car_number"></el-input>
      </el-form-item>
      <el-form-item label="车辆进入时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.in_time" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="车辆离开时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.out_time" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">上传提交</el-button>
        <el-button @click="resetForm('ruleForm')">全部重置</el-button>
      </div>
    </el-form>
    </div>
</template>

<script>
import { record } from '../../../api/api'
export default {
  name: 'ParkingrecordModification',
  data () {
    return {
      ruleForm: {
        car_number: '',
        in_time: '',
        out_time: ''
      },
      rules: {
        car_number: [
          { required: true, message: '请输入进入的车牌号码', trigger: 'blur' }
        ],
        in_time: [
          { required: true, message: '请记录进入的时间', trigger: 'blur' }
        ],
        out_time: [
          { required: true, message: '请记录离开的时间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          record({
            name: this.name,
            date1: this.date1
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
