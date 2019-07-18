<template>
  <div class="from-warpper">
    <div class="title">停车场当前车位管理</div>
    <div>
      <el-table :data="tableData">
        <el-table-column prop="car_number" label="车牌号码" width="200">
        </el-table-column>
        <el-table-column prop="in_time" label="进入时间" width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParkingspaceManagementnow',
  data () {
    const item = {
      car_number: '吉A12345',
      in_time: '20190514 12:30:15'
    }
    return {
      tableData: Array(20).fill(item)
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
