<template>
  <div>
    <div class="from-warpper">
      <div class="title">停车场信息修改</div>
      <el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm" label-position="left">
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
      }
    }
  },
  methods: {
    submitForm (formName) {
      let url = '/parkinglot/' + this.$store.state.id + '/'
      console.log(this.ruleForm.space_num)
      console.log(this.ruleForm.status)
      console.log(this.$store.state.id)
      console.log(url)
      var that = this
      axios({
        method: 'patch',
        url: url,
        data: {
          name: that.ruleForm.name,
          address: that.ruleForm.address,
          longitude: that.ruleForm.longitude,
          latitude: that.ruleForm.latitude,
          business_brief: that.ruleForm.business_brief,
          id: that.$store.state.id
        }
      }).then(function (response) {
        console.log(response)
        console.log('信息修改成功')
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
