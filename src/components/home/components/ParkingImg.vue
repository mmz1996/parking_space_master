<template>
  <div class="from-warpper">
    <div class="title">停车场标头图片更新</div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://0.0.0.0:8000/paringlotimage/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="onChange"
      :before-upload="beforeUpload"
      :data="postdate"
      :headers="header"
      :http-request="upImage"
      accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParkingImg',
  data () {
    return {
      fileList: [],
      postdate: {
        'ParkingLot': '001'
      },
      header: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjM3MjQ2MTIzOUBxcS5jb20iLCJleHAiOjE1NzE0ODI5OTMsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyX2lkIjoxfQ.0jMjkROeqAFcEKOMsnpkeg9xvbdoq8Q63oMWqcMxj_E'
      }
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    beforeUpload (file) {
      console.log(file)
    },
    onChange (file, fileList) {
      console.log(file, fileList)
    },
    upImage (file) {
      console.log('file', file)
      let imagedata = file.file
      file.image = imagedata
      console.log(file)
      const param = new FormData()
      param.append('ParkingLot', '001')
      param.append('image', file.file)
      const config = {
        headers: { 'Content-Type': 'multipart/form-data',
          'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjM3MjQ2MTIzOUBxcS5jb20iLCJleHAiOjE1NzE0ODI5OTMsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyX2lkIjoxfQ.0jMjkROeqAFcEKOMsnpkeg9xvbdoq8Q63oMWqcMxj_E'}
      }
      axios.post('https://api.ohaiyo.vip/paringlotimage/', param, config).then(res => {
        this.$message({
          message: '上传成功',
          type: 'success',
          showClose: true
        })
      })
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
