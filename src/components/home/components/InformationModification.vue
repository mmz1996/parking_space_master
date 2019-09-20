<template>
  <div>
    <div class="from-warpper">
      <div class="title">停车场信息修改</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" label-position="left">
        <el-form-item label="停车场简介" prop="business_brief">
          <el-input v-model="ruleForm.business_brief" autosize type="textarea"></el-input>
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
        <div class="button">
          <el-button type="primary" @click="submitForm('ruleForm')">上传提交</el-button>
          <el-button @click="resetForm('ruleForm')">全部重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InformationModification',
  data  () {
    return {
      ruleForm: {
        address: '',
        name: '',
        latitude: '',
        longitude: '',
        business_brief: ''
      },
      rules: {
        address: [
          { required: true, message: '请输入停车场地址', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入停车场名称', trigger: 'blur' }
        ],
        business_brief: [
          { required: true, message: '请输入停车场简介', trigger: 'blur' }
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
      axios.patch('/parkinglot/{' + this.ruleForm.space_num + '}/', {
        name: this.ruleForm.name,
        address: this.ruleForm.address,
        longitude: this.ruleForm.longitude,
        latitude: this.ruleForm.latitude,
        business_brief: this.ruleForm.business_brief,
        id: this.$store.id
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
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
