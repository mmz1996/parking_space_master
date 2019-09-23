<template>
  <div class="from-warpper">
    <div class="title">停车场车位修改</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" label-position="left">
      <el-form-item label="车位的id值" prop="space_num" >
        <el-input v-model="ruleForm.space_num" placeholder="请输入要修改车位的id值"></el-input>
      </el-form-item>
      <el-form-item label="车位状态选择">
        <el-select v-model="ruleForm.status" placeholder="请选择车位状态">
          <el-option label="预定" value="reserved"></el-option>
          <el-option label="空闲" value="unoccupied"></el-option>
          <el-option label="占用" value="engaged"></el-option>
        </el-select>
      </el-form-item>
      <div class="button">
        <el-button type="primary" @click="submitForm()">上传提交</el-button>
        <el-button @click="resetForm('ruleForm')">全部重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParkingspaceModification',
  data  () {
    return {
      ruleForm: {
        space_num: '',
        status: ''
      },
      rules: {
        space_num: [
          { required: true, message: '请输入停车场车位总数量', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let url = '/carport/' + this.ruleForm.space_num + '/'
      console.log(this.ruleForm.space_num)
      console.log(this.ruleForm.status)
      console.log(this.$store.state.id)
      console.log(url)
      var that = this
      axios({
        method: 'patch',
        url: url,
        data: {
          id: that.ruleForm.space_num,
          status: that.ruleForm.status,
          parkinglot: that.$store.state.id
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.ruleForm.status = ''
    }
  },
  mounted () {
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
