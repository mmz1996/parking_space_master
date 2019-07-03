<template>
  <el-form :model="ruleForm" :rules="rules_login" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">JLU-PISP系统登录</h3>
    <el-form-item  prop="username" >
      <el-input  v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password" class="input_box" >
    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
  <!-- <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
  </el-form-item> -->
  <div class="button-warpper">
    <div class="button" align="center">
      <el-button size="mini" type="primary" @click="submitForm('ruleForm')" icon="el-icon-upload">登录</el-button>
      <el-button size="mini" @click="resetForm('ruleForm')" >重置</el-button>
    </div>
  </div>
</el-form>
</template>

<script>
import { login } from '../../api/api'
export default {
  name: 'userinput',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请数密码'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules_login: {
        username: [
          { validator: validateName, trigger: 'blur' },
          { min: 3, max: 12, message: '长度在3到12个字符', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then((data) => {
            sessionStorage.setItem('user', JSON.stringify(this.ruleForm.username))
            console.log(data)
            this.$router.push({ path: '/home' })
          })
        } else {
          console.log('error submit!!') // 验证失败
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

<style scoped lang="stylus">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
