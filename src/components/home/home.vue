<template>
    <div>
      <!--<el-row class="container">-->
        <!--<el-col :span="24" class="header">-->
          <!--<el-col  class="logo">-->
            <!--JLU_PISP停车场管理系统-->
          <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="24" class="main">-->
          <!--<aside>-->
            <!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleselect" router style="background-color: #E4E7ED">-->
              <!--<el-menu-item index="status">-->
                <!--<i class="el-icon-view"></i>-->
                <!--<span>停车场的总信息展示</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="ParkingspaceModification">-->
                <!--<i class="el-icon-edit"></i>-->
                <!--<span>车位管理</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="InformationModification">-->
                <!--<i class="el-icon-search"></i>-->
                <!--<span>信息管理</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="ParkinginrecordModification">-->
                <!--<i class="el-icon-upload2"></i>-->
                <!--<span>停车场进入车辆上传</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="ParkingoutrecordModification">-->
              <!--<i class="el-icon-download"></i>-->
              <!--<span>停车场离开车辆上传</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="AdministratorModification">-->
                <!--<i class="el-icon-upload"></i>-->
                <!--<span>管理员信息修改</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="ParkingFees">-->
                <!--<i class="el-icon-info"></i>-->
                <!--<span>停车场收费规则</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item @click="goback">-->
                <!--<i class="el-icon-close"></i>-->
                <!--<span>退出</span>-->
              <!--</el-menu-item>-->
            <!--</el-menu>-->
          <!--</aside>-->
          <!--<section class="content-container">-->
              <!--<el-col :span="24" class="content-wrapper">-->
                  <!--<router-view></router-view>-->
              <!--</el-col>-->
          <!--</section>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <el-container>
        <el-header>
          <div class="title">
            JLU_PISP停车场管理系统
          </div>
        </el-header>
        <el-container>
          <el-aside>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleselect" router style="background-color: white">
              <el-menu-item index="status">
                <i class="el-icon-view"></i>
                <span>停车场的总信息展示</span>
              </el-menu-item>
              <el-menu-item index="ParkingspaceModification">
                <i class="el-icon-edit"></i>
                <span>车位管理</span>
              </el-menu-item>
              <el-menu-item index="InformationModification">
                <i class="el-icon-search"></i>
                <span>信息管理</span>
              </el-menu-item>
              <el-menu-item index="ParkinginrecordModification">
                <i class="el-icon-upload2"></i>
                <span>停车场进入车辆上传</span>
              </el-menu-item>
              <el-menu-item index="ParkingoutrecordModification">
                <i class="el-icon-download"></i>
                <span>停车场离开车辆上传</span>
              </el-menu-item>
              <el-menu-item index="AdministratorModification">
                <i class="el-icon-upload"></i>
                <span>管理员信息修改</span>
              </el-menu-item>
              <el-menu-item index="ParkingFees">
                <i class="el-icon-info"></i>
                <span>停车场收费规则</span>
              </el-menu-item>
              <el-menu-item @click="goback">
                <i class="el-icon-close"></i>
                <span>退出</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      city: '',
      defaultActive: 'status',
      isUnique_opened: false,
      isCollapse_transition: true,
      isCollapse: false,
      isShow: false
    }
  },
  methods: {
    handleselect  (index) {
      if (index === '0') {
        return false
      }
      this.$router.push({
        name: index
      })
    },
    goback () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  .el-header
    height 60px
    line-height 60px
    background-color: #409EFF
    .title {
      //width:230px;
      text-align center
      color:#fff;
      height:50px;
      font-size: 22px;
      padding-left:20px;
      padding-right:20px;
      border-color: rgba(238,241,146,0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
  .el-aside
    flex:0 0 230px;
    width: 230px;
    background-color: white
    color: #333;
    text-align: center;
    line-height: 200px;
    min-height 710px
    border 1px solid black
  .el-main
    background-color: white;
    color: #333;
    border 1px solid black
</style>
