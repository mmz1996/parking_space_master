<template>
  <div class="from-warpper">
    <div class="title">停车场当前车位记录</div>
    <div>
      <el-table :data="results">
        <el-table-column prop="car" label="车牌号码" width="200">
        </el-table-column>
        <el-table-column prop="add_time" label="进入时间" width="200">
        </el-table-column>
        <el-table-column prop="parking" label="所属停车场" width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParkingspaceManagementnow',
  data () {
    return {
      results: ''
    }
  },
  methods: {
    getInformation () {
      var that = this
      axios({
        method: 'get',
        url: '/carinparking/'
      }).then(function (response) {
        console.log(response.data.results)
        console.log('get停车记录数据正常')
        that.results = response.data.results
      })
    }
  },
  mounted: function () {
    this.getInformation()
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
