<template>
  <div class="from-warpper">
    <div class="title">停车场详细收费规则</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="500px" class="demo-ruleForm" label-position="left">
      <el-form-item label="在若小时内内停车不收费" prop="first_hours" >
        <el-input v-model="ruleForm.first_hours"></el-input>
      </el-form-item>
      <el-form-item label="超过上述时间，每小时停车价格为" prop="first_charge">
        <el-input v-model="ruleForm.first_charge"></el-input>
      </el-form-item>
      <el-form-item label="超过最大限度时间" prop="last_hours">
        <el-input v-model="ruleForm.last_hours" ></el-input>
      </el-form-item>
      <el-form-item label="每小时停车价格为" prop="last_charge">
        <el-input v-model="ruleForm.last_charge"></el-input>
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
  name: 'ParkingFees',
  data () {
    return {
      ruleForm: {
        first_hours: '',
        first_charge: '',
        last_hours: '',
        last_charge: ''
      },
      rules: {
        first_hours: [
          { required: true, message: '请输入时间限制', trigger: 'blur' }
        ],
        first_charge: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        last_hours: [
          { required: true, message: '请输入时间限制', trigger: 'blur' }
        ],
        last_charge: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let url = '/price/' + this.$store.state.id + '/'
      var that = this
      axios({
        method: 'patch',
        url: url,
        data: {
          unit_price: that.ruleForm.first_charge,
          overtime_price: that.ruleForm.last_charge,
          limit_time: that.ruleForm.last_hours,
          free_time: that.ruleForm.first_hours
        }
      }).then(function (response) {
        console.log(response)
        console.log('更新成功收费标准')
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
