<template>
  <div class="from-warpper">
    <div class="title">停车场标头图片更新</div>
    <el-upload
      class="upload-demo"
      ref="upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      list-type="picture">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb 且规格为1920*100</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'ParkingImg',
  data () {
    return {
      fileList: [{name: 'titleimg.jpeg', url: this.$store.state.titleimg}]
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
      this.$message({
        message: '上传成功',
        type: 'success',
        showClose: true
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
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
