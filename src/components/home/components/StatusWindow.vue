<template>
  <div class="from-warpper">
    <el-row :gutter="20">
<!--      <el-col :span="8">-->
<!--        <el-card shadow="hover" class="mgb20" style="height:150px;">-->
<!--          <div class="user-info">-->
<!--            <div class="user-info-cont">-->
<!--              <div class="user-info-name">{{name}}</div>-->
<!--              <div>{{role}}</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </el-col>-->
      <el-col>
        <el-card>
          停车场名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{infomation.name}}
        </el-card>
        <el-card>
          停车场编号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.id}}
        </el-card>
        <el-card>
          停车场创建时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.add_time}}
        </el-card>
        <el-card>
          停车场地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.address}}
        </el-card>
        <el-card>
          停车场总车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.sum_num}}
        </el-card>
        <el-card>
          停车场可使用车位数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.space_num}}
        </el-card>
        <el-card>
          停车场经度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.bd_longitude}}
        </el-card>
        <el-card>
          停车场纬度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.bd_latitude}}
        </el-card>
        <el-card>
          停车场简介&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{infomation.desc}}
        </el-card>
        <el-card>
          停车场收费标准&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在{{priceinfomation.free_time}}小时内停车免费
        </el-card>
        <el-card>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超过{{priceinfomation.free_time}}小时，停车价格为{{priceinfomation.unit_price}}块每小时
        </el-card>
        <el-card>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超过{{priceinfomation.limit_time}}小时，停车价格为{{priceinfomation.overtime_price}}块每小时
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { space, getprice } from '../../../api/api'
export default {
  name: 'status',
  data () {
    return {
      name:'mmz',
      infomation: '',
      priceinfomation: ''
    }
  },
  methods: {
    getinfomation () {
      space().then((response) => {
        console.log()
        console.log(response.data.results[0])
        this.infomation = response.data.results[0]
        this.$store.commit('set_id', this.infomation.id)
        console.log('获取停车场信息成功')
      })
    },
    getpriceinfomation () {
      getprice().then((response) => {
        console.log(response.data.results[0])
        this.priceinfomation = response.data.results[0]
        console.log('获取收费标准接口成功')
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
    width 70%
    padding 20px
    border-radius 10px

  .el-row {
    margin-bottom: 20px;
  }

  .grid-content {
    display: flex;
    align-items: center;
    height: 100px;
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }

  .grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }

  .grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
  }

  .grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
  }

  .grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
  }

  .grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
  }

  .grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
  }

  .grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
  }

  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }

  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }

  .user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }

  .user-info-list span {
    margin-left: 70px;
  }

  .mgb20 {
    margin-bottom: 20px;
  }

  .todo-item {
    font-size: 14px;
  }

  .todo-item-del {
    text-decoration: line-through;
    color: #999;
  }

  .schart {
    width: 100%;
    height: 300px;
  }

</style>
