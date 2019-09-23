<template>
  <div class="from-warpper">
    <div class="title">停车场信息展示</div>
    <div class="main">
      <p class="tag">停车场的名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{infomation.name}}</p>
      <p class="tag">停车场的编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.id}}</p>
      <p class="tag">停车场的地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.address}}</p>
      <p class="tag">停车场的总车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.sun_num}}</p>
      <p class="tag">停车场的可使用车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.space_num}}</p>
      <p class="tag">停车场的简介&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.desc}}</p>
      <p class="tag">停车场的收费标准&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在{{priceinfomation.free_time}}小时内停车免费</p>
      <p class="tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超过{{priceinfomation.free_time}}小时，停车价格为{{priceinfomation.unit_price}}块每小时</p>
      <p class="tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超过{{priceinfomation.limit_time}}小时，停车价格为{{priceinfomation.overtime_price}}块每小时</p>
    </div>
  </div>
</template>

<script>
import { space, getprice } from '../../../api/api'
export default {
  name: 'status',
  data () {
    return {
      infomation: '',
      priceinfomation: ''
    }
  },
  methods: {
    getinfomation () {
      space().then((response) => {
        console.log(response.data.results[0])
        this.infomation = response.data.results[0]
        this.$store.commit('set_id', this.infomation.id)
        console.log(this.$store.state.id)
      })
    },
    getpriceinfomation () {
      getprice().then((response) => {
        console.log(response.data.results[0])
        this.priceinfomation = response.data.results[0]
        console.log(this.priceinfomation, '收费信息')
      })
    }
  },
  mounted: function () {
    this.getinfomation()
    this.getpriceinfomation()
  }
}
</script>

<style lang='stylus' scoped>
  .from-warpper
    width 650px
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
