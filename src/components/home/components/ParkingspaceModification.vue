<template>
  <div class="from-warpper">
    <div class="title">停车场车位管理</div>
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
            { required: true, message: '请输入要修改车位的id值', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        var that = this
        let url = '/carport/'
        console.log(url)
        var that = this
        axios({
          method: 'get',
          url: url,
          data: {
            parkinglot: that.$store.state.id
          }
        }).then(function (response) {
          that.results = response.data.results
          for(let value of that.results){
            if(value.code == that.ruleForm.space_num){
              console.log(value.id)
              that.id = value.id
            }
          }
          console.log(that.id)
          let newurl = '/carport/'+that.id+'/'
          axios({
            method: 'patch',
            url: newurl,
            data: {
              id: that.id,
              status: that.ruleForm.status,
              parkinglot: that.$store.state.id
            }
          }).then(function (response) {
            console.log("response")
            console.log(response)
            console.log('车位信息修改成功')
          }).catch(function (error) {
            that.$message({
              showClose: true,
              message: '修改失败，停车位ID输入有误',
              type: 'error'
            })
          })
        }).catch(function (error) {
          that.$message({
            showClose: true,
            message: '修改失败，停车位ID输入有误',
            type: 'error'
          })
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
