<template>
  <div class="from-warpper">
    <div class="title">停车场信息展示</div>
    <div class="main">
      <p class="tag">停车场的名称 {{name}}</p>
      <p class="tag">停车场的编号 {{id}}</p>
      <p class="tag">停车场的地址 {{address}}</p>
      <p class="tag">停车场的总车位数量 {{space_num}}</p>
      <p class="tag">停车场的可使用车位数量 {{use_num}}</p>
      <p class="tag">停车场的简介{{desc}}</p>
      <p class="tag">停车场的收费标准 {{charging_standard}}</p>
      <p>{{token}}</p>
    </div>
  </div>
</template>

<script>
import { window } from '../../../api/api'
export default {
  name: 'status',
  data () {
    return {
      id: '123123',
      name: '123213',
      address: '123',
      desc: '213',
      space_num: '213',
      use_num: '213',
      charging_standard: '',
      token: this.$store.state.token
    }
  },
  mounted: function () {
    window().then((res) => {
      res = res.data.results
      console.log(res)
    })
  }

}
</script>

<style lang='stylus' scoped>
  .from-warpper
    width 600px
    padding 20px
    border-radius 10px
    .title
      margin-top 30px
      height 30px
      line-height 30px
      font-size 25px
      text-align left
    .main
      font-size 20px
      padding 0px 50px
      .tag
        padding 10px

</style>
