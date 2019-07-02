<template>
    <div class="box">
      <div class="title" align="center">JLU-PISP系统登录</div>
      <el-row type="flex" justify="center">
        <el-form :model="ruleForm" :rules="rules_login" ref="ruleForm" label-width="80px">
        <el-form-item  prop="username" class="input_box" label="用户名">
          <el-input  v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="input_box" label="密码">
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
      </el-row>
    </div>
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
      labelPosition: 'left',
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
      }
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
            this.$router.push({path: '/home'})
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
.box
  border  1px  #000000
  height 370px
  width: 500px
  margin: 0 auto
  position relative
  top: 50px
  .title
    margin 20px
</style>
