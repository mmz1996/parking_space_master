<template>
  <div class="from-warpper">
    <div class="title">管理员信息修改</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" label-position="left">
      <el-form-item label="管理员姓名" prop="administrator_name">
        <el-input v-model="ruleForm.administrator_name"></el-input>
      </el-form-item>
      <el-form-item label="管理员联系方式" prop="administrator_tell">
        <el-input v-model="ruleForm.administrator_tell"></el-input>
      </el-form-item>
      <el-form-item label="管理员邮箱地址" prop="administrator_id">
        <el-input v-model="ruleForm.administrator_email"></el-input>
      </el-form-item>
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
  name: 'AdministratorModification',
  data () {
    return {
      ruleForm: {
        administrator_name: '',
        administrator_tell: '',
        administrator_email: ''
      },
      rules: {
        administrator_name: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' }
        ],
        administrator_tell: [
          { required: true, message: '请输入管理员联系方式', trigger: 'blur' }
        ],
        administrator_email: [
          { required: true, message: '请输入管理员邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let url = '/users/' + this.$store.state.id + '/'
      var that = this
      axios({
        method: 'patch',
        url: url,
        data: {
          name: that.ruleForm.administrator_name,
          mobile: that.ruleForm.administrator_tell,
          id: that.$store.state.id,
          email: that.ruleForm.administrator_email
        }
      }).then(function (response) {
        console.log(response)
        console.log('管理员信息上传成功')
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
    width 95%
    padding 20px
    border-radius 10px
    background-color white
    .title
      height 30px
      line-height 30px
      font-size 25px
      margin-bottom 30px
    .button
      text-align center
</style>
