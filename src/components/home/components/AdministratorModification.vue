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
      <el-form-item label="管理员身份证号码" prop="administrator_id">
        <el-input v-model="ruleForm.administrator_id"></el-input>
      </el-form-item>
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">上传提交</el-button>
        <el-button @click="resetForm('ruleForm')">全部重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
// import { administrator } from '../../../api/api'
export default {
  name: 'AdministratorModification',
  data () {
    return {
      ruleForm: {
        administrator_name: '',
        administrator_tell: '',
        administrator_id: ''
      },
      rules: {
        administrator_name: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' }
        ],
        administrator_tell: [
          { required: true, message: '请输入管理员联系方式', trigger: 'blur' }
        ],
        administrator_id: [
          { required: true, message: '请输入管理员身份证号码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // submitForm (formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       administrator({
    //         administrator_name: this.administrator_name,
    //         administrator_tell: this.administrator_tell,
    //         administrator_id: this.administrator_id
    //       })
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang='stylus' scoped>
  .from-warpper
    width 500px
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
