<template>
  <div class="from-warpper">
    <div class="title">停车场车位修改</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" label-position="left">
      <el-form-item label="总车位数目" prop="space_num">
        <el-input v-model="ruleForm.space_num"></el-input>
      </el-form-item>
      <el-form-item label="无法使用车位数量" prop="broken_num">
        <el-input v-model="ruleForm.broken_num"></el-input>
      </el-form-item>
      <el-form-item label="当前可以使用车位数量" prop="use_num">
        <el-input v-model="ruleForm.use_num"></el-input>
      </el-form-item>
      <el-form-item label="车位实时更新日志" prop="broken_new">
        <el-input type="textarea" v-model="ruleForm.broken_new" autosize></el-input>
      </el-form-item>
      <div class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">上传提交</el-button>
        <el-button @click="resetForm('ruleForm')">全部重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { number } from '../../../api/api'
import axios from 'axios'
export default {
  name: 'ParkingspaceModification',
  data  () {
    return {
      ruleForm: {
        space_num: '',
        broken_num: '',
        broken_new: '',
        use_num: ''
      },
      rules: {
        space_num: [
          { required: true, message: '请输入停车场车位总数量', trigger: 'blur' }
        ],
        broken_num: [
          { required: true, message: '请填写停车场无法使用车位数量', trigger: 'blur' }
        ],
        broken_new: [
          { required: true, message: '请填写停车场车位更新日志', trigger: 'blur' }
        ],
        use_num: [
          { required: true, message: '请填写停车场可使用车位数量', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          number({
            space_num: this.ruleForm.space_num,
            broken_num: this.ruleForm.broken_num,
            broken_new: this.ruleForm.broken_new,
            use_num: this.ruleForm.use_num
          })
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
    background-color black
    width 600px
    padding 20px
    margin-top 30px
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
