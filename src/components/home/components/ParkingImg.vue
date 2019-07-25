<template>
  <div class="from-warpper">
    <div class="title">停车场标头图片更新</div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
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
      fileList: [{name: 'titleimg.jpeg', url: 'https://www.baidu.com/link?url=Ssos_6Pv_p-YCSqqlS-w3k_EGNZCrOH5i8-qKbtEPDQbyPfwd8abhQbse9hpFaFX3ZiuyUziLBo2P-BCPjr8uDyTqP-7GSWX6s26Fy9VYYxm1L20aAfdFngydPyyhClywabYy2lEBoDU1ix1T5FLCiZCcuhjnsq8DB44xiRIbco7HceiLoPEJC6fgARSplnw2HWx1z7-XO2RhIaK1OFjXZMJHxchAddq2kAlHiI9967doo6UrPNu2u9kYHdDDCaFd0hJ2gHVa-13lJpf-rKli0IgcaTrdCIGAmtq2m5gnpqFtlPTU09j7nAMbpvQPukZTuL8XZ8q_tdSC2E_kybiYvkBn1GJYJJLbvgvTAf-6MWVjOm6zj7IFG3xcmrsPLUCcMXDlRhkM9Bxtvbb0TPJQOrSxre4ebi3UxruU6MnrzYbSR00eAI3QpZMaIOS7wyRRYzKceXBp1VLdWfbSkZU0WyYci4tC05OfKZvKkQJnp0CdjsVxnLLpPmpw_EW-F86u4LOTWxZuPqZ9jdKN4W5Lidj4LmJIuO5bLw-5T50_CpGSSvGxouESs97IDnyhFaALgZks3SzMIQlXDfniMjbga&timg=&click_t=1564041565038&s_info=1519_731&wd=&eqid=c41dbbda00037519000000035d395e89'}]
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
