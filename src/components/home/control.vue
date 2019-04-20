<template>
  <div class="from-warpper">
    <div class="title">停车场车位修改</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="总车位数目" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="损坏车位数量" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <div class="button-warpper">
        <div class="button">
          <el-button type="primary" @click="submitForm('ruleForm')">完成修改</el-button>
          <el-button @click="resetForm('ruleForm')">全部重置</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'control',
  data  () {
    return {
      ruleForm: {
        id: '',
        name: '',
        space_num: '',
        desc: '',
        address: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入停车场id', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入停车场名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        space_num: [
          { required: true, message: '请填写车位数目', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写停车场描述', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写停车场地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.select)
          console.log(this.car)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getHomeInfo () {
      axios.get('/static/json/BaseCity.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res.data)
      this.city = res.data
      console.log(this.city[0])
    }
  },
  mounted () {
    this.getHomeInfo()
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
