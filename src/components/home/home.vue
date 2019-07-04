<template>
    <div>
      <el-row class="container">
        <el-col :span="24" class="header">
          <el-col  class="logo">
            JLU_PISP管理系统
          </el-col>
        </el-col>
        <el-col :span="24" class="main">
          <aside>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleselect" router style="background-color: #F2F6FC">
              <el-menu-item index="status">
                <i class="el-icon-view"></i>
                <span>停车场的总信息展示</span>
              </el-menu-item>
              <el-menu-item index="control">
                <i class="el-icon-edit"></i>
                <span>车位管理</span>
              </el-menu-item>
              <el-menu-item index="find">
                <i class="el-icon-search"></i>
                <span>信息管理</span>
              </el-menu-item>
              <el-menu-item index="update">
                <i class="el-icon-upload2"></i>
                <span>停车记录上传</span>
              </el-menu-item>
              <el-menu-item index="mmz">
                <i class="el-icon-upload"></i>
                <span>管理员信息修改</span>
              </el-menu-item>
            </el-menu>
          </aside>
          <section class="content-container">
              <el-col :span="24" class="content-wrapper">
                  <router-view></router-view>
              </el-col>
          </section>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import axios from 'axios'
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
    getHomeInfo () {
      axios.get('/static/json/city.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res.data[0].code)
      this.city = res.data
    }
  }
}
</script>

<style scoped lang="stylus">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background:  #20a0ff
      color:#fff;
      .logo {
        //width:230px;
        height:60px;
        font-size: 22px;
        padding-left:20px;
        padding-right:20px;
        border-color: rgba(238,241,146,0.3);
        border-right-width: 1px;
        border-right-style: solid;
      }
    }
    .main {
      display: flex;
      // background: #324057;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        flex:0 0 230px;
        width: 230px;
        // position: absolute;
        // top: 0px;
        // bottom: 0px;
        .el-menu{
          height: 100%;
        }
        .collapsed{
          width:60px;
          .item{
            position: relative;
          }
          .submenu{
            position:absolute;
            top:0px;
            left:60px;
            z-index:99999;
            height:auto;
            display:none;
          }

        }
      }
      .content-container {
        // background: #f1f2f7;
        flex:1;
        // position: absolute;
        // right: 0px;
        // top: 0px;
        // bottom: 0px;
        // left: 230px;
        overflow-y: scroll;
        padding-left: 20px;
        .breadcrumb-container {
          //margin-bottom: 15px;
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
