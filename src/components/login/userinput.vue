<template>
  <div>
    <div class="form-warpper">
      <div class="title">登录</div>
      <el-form :model="ruleForm" status-icon :rules="rules_login" ref="ruleForm" label-width="0px" size="mini">
        <el-form-item  prop="username">
          <el-input  v-model="ruleForm.username" placeholder="请输入用户名">
            <template slot="prepend">
              <i class="iconfont icon-yonghu"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码">
            <template slot="prepend">
              <i class="iconfont icon-mima"></i>
            </template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item> -->
        <div class="button-warpper">
          <div class="button">
            <el-button size="mini" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/api'
import router from '../../router'
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
            router.push({path: '/home'})
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

<style scoped>

</style>
