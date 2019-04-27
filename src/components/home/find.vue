<template>
  <div>
    <div class="from-warpper">
      <div class="title">停车场信息修改</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="收费标准" prop="charging_standard">
          <el-input v-model="ruleForm.charging_standard"></el-input>
        </el-form-item>
        <el-form-item label="停车场地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="停车场名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="停车场经度" prop="longitude">
          <el-input  v-model="ruleForm.longitude"></el-input>
        </el-form-item>
        <el-form-item label="停车场纬度" prop="latitude">
          <el-input  v-model="ruleForm.latitude"></el-input>
        </el-form-item>
        <div class="button-warpper">
          <div class="button">
            <el-button type="primary" @click="submitForm('ruleForm')">完成修改</el-button>
            <el-button @click="resetForm('ruleForm')">全部重置</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { message } from '../../api/api'
export default {
  name: 'find',
  data  () {
    return {
      ruleForm: {
        address: '',
        name: '',
        latitude: '',
        longitude: '',
        charging_standard: ''
      },
      rules: {
        address: [
          { required: true, message: '请输入停车场地址', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入停车场名称', trigger: 'blur' }
        ],
        charging_standard: [
          { required: true, message: '请输入停车场收费标准', trigger: 'blur' }
        ],
        longitude: [
          { required: true, message: '请输入停车场经度', trigger: 'blur' }
        ],
        latitude: [
          { required: true, message: '请输入停车场纬度', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          message({
            address: this.address,
            name: this.name,
            latitude: this.latitude,
            longitude: this.longitude,
            charging_standard: this.charging_standard
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
