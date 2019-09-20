<template>
  <el-form :model="ruleForm" :rules="rules_login" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">JLU-PISP系统登录</h3>
    <el-form-item  prop="username">
      <el-input  v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <!--这是用户名的输入-->
    <el-form-item prop="password" class="input_box" >
    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
    </el-form-item>
    <!--这是密码的输入-->
  <div class="button-warpper">
    <div class="button" align="center">
      <el-button size="mini" type="primary" @click="submitForm('ruleForm')" icon="el-icon-upload">登录</el-button>
      <el-button size="mini"  type="danger" @click="resetForm('ruleForm')" >重置</el-button>
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
        return callback(new Error('请输入密码'))
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
          }).then((response) => {
            // this.$router.push('/home')
            let token = response.data.token
            console.log(token)
            // console.log(response)
            // console.log(this.$store.state.token)
            this.$store.commit('set_token', token)
            localStorage.setItem('token', token)
            // let { code } = data
            // if (code !== 200) {
            //   this.$message({
            //     showClose: true,
            //     message: '登录失败，密码错误',
            //     type: 'error'
            //   })
            // }
            this.$message({
              message: '登录成功',
              type: 'success',
              showClose: true
            })
            this.$router.push('/home/status')
            // if (this.$store.state.token) {
            //   this.$router.push('/home')
            //   console.log(this.$store.state.token)
            // }
          })
            .catch((error) => {
              console.log(error.response)
              this.$message({
                showClose: true,
                message: '登录失败，用户名密码错误',
                type: 'error'
              })
            })
        } else {
          console.log('error submit!!') // 验证失败
          this.$message({
            showClose: true,
            message: '请检查用户名输入',
            type: 'error'
          })
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
    width: 400px;
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
