<template>
  <div class="from-warpper">
    <div class="title">停车场信息展示</div>
    <div class="main">
      <p class="tag">停车场的名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{name}}</p>
      <p class="tag">停车场的编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{id}}</p>
      <p class="tag">停车场的地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{address}}</p>
      <p class="tag">停车场的总车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{space_num}}</p>
      <p class="tag">停车场的可使用车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{use_num}}</p>
      <p class="tag">停车场的简介&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{desc}}</p>
      <p class="tag">停车场的收费标准&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{charging_standard}}</p>
    </div>
  </div>
</template>

<script>
import { window } from '../../../api/api'
export default {
  name: 'status',
  data () {
    return {
      id: '001',
      name: '吉大停车场',
      address: '吉林省长春市朝阳区前进大街2699号',
      desc: '公共停车场',
      space_num: '8',
      use_num: '1',
      charging_standard: '暂无'
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
