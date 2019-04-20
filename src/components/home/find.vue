<template>
  <div>
    <div class="from-warpper">
      <div class="title">停车场信息修改</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="收费标准" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="停车场地址" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="停车场名称" prop="space_num">
          <el-input v-model="ruleForm.space_num"></el-input>
        </el-form-item>
        <el-form-item label="停车场经度" prop="desc">
          <el-input  v-model="ruleForm.longitude"></el-input>
        </el-form-item>
        <el-form-item label="停车场纬度" prop="desc">
          <el-input  v-model="ruleForm.latitude"></el-input>
        </el-form-item>
        <div class="button-warpper">
          <div class="button">
            <el-button type="primary" @click="submitForm('ruleForm')">完成修改</el-button>
            <el-button @click="resetForm('ruleForm')">全部重置</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'find',
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
          { required: true, message: '请输入停车场收费标准', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入停车场地址', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        space_num: [
          { required: true, message: '请输入停车场名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        longitude: [
          { required: true, message: '请输入停车场经度', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        latitude: [
          { required: true, message: '请输入停车场纬度', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
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
