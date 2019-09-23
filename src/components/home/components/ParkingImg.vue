<template>
  <div class="from-warpper">
    <div class="title">停车场标头图片更新</div>
    <input type="file"
           accept="image/*"
           @change="chooseImg" />
    <canvas ref="imgPreview"
            height="0"
            width="0"></canvas>
    <button @click="uploadImg">提交图片</button>
    <img :src="imgUrlFromServer">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParkingImg',
  data () {
    return {
      imgUrlFromServer: '#',
      base64: ''
    }
  },
  methods: {
    chooseImg (event) {
      let file = event.target.files[0]
      let reader = new FileReader()
      let img = new Image()
      // 读取图片
      reader.readAsDataURL(file)
      // 读取完毕后的操作
      reader.onloadend = (e) => {
        img.src = e.target.result
        // 这里的e.target就是reader
        // console.log(reader.result)
        // reader.result就是图片的base64字符串
        this.base64 = reader.result
      }
      // 预览图片
      let canvas = this.$refs['imgPreview']
      let context = canvas.getContext('2d')
      img.onload = () => {
        img.width = 100
        img.height = 100
        // 设置canvas大小
        canvas.width = 100
        canvas.height = 100
        // 清空canvas
        context.clearRect(0, 0, 100, 100)
        // 画图
        context.drawImage(img, 0, 0, 100, 100)
      }
    },
    uploadImg () {
      axios.post('https://api.ohaiyo.vip/userImage/', {
        img: this.base64
      }).then(response => {
        console.log('成功')
        console.log(response)
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
