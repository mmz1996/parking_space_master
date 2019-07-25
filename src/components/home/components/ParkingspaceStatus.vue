<template>
  <div class="from-warpper">
    <div class="title">停车场当前状态管理</div>
    <div>
      <el-table :data="tableData">
        <el-table-column prop="space_id" label="车位编号" width="200">
        </el-table-column>
        <el-table-column prop="space_status" label="车位状态" width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParkingspaceStatus',
  data () {
    return {
      tableData: [{
        space_id: '001',
        space_status: '有车'
      }, {
        space_id: '002',
        space_status: '无车'
      }, {
        space_id: '003',
        space_status: '已被租赁'
      }, {
        space_id: '东区001',
        space_status: '有车'
      }, {
        space_id: '地下一层001',
        space_status: '已被租赁'
      }, {
        space_id: '西区005',
        space_status: '无车'
      }]
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
