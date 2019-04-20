<template>
    <div>
      <el-container>
        <el-header>欢迎来到JLU_PISP管理系统</el-header>
        <el-container>
          <el-aside width="200px">
            <div class="menu-warpper">
              <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                       :unique-opened="isUnique_opened"
                       ::default-active="defaultActive"
                       :collapse-transition="isCollapse_transition"
                       :collapse="isCollapse"
                       @select="handleSelect"
                       background-color="#545c64"
                       text-color="#fff"
                       active-text-color="#ffd04b">
                <el-menu-item active-text-color="#ffd04b" index="0" @click="Open" v-show="isShow">
                  <i class="el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item active-text-color="#ffd04b" index="0" @click="Close" v-show="!isShow">
                  <i class="el-icon-arrow-left"></i>
                </el-menu-item>
                <el-menu-item index="status">
                  <i class="el-icon-view"></i>
                  <span>信息</span>
                </el-menu-item>
                <el-menu-item index="control">
                  <i class="el-icon-edit"></i>
                  <span>车位管理</span>
                </el-menu-item>
                <el-menu-item index="find">
                  <i class="el-icon-search"></i>
                  <span>信息管理</span>
                </el-menu-item>
              </el-menu>
            </div>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
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
      isUnique_opened: true,
      isCollapse_transition: false,
      isCollapse: true,
      isShow: true
    }
  },
  methods: {
    handleSelect (index) {
      if (index === '0') {
        return false
      }
      this.$router.push({
        name: index
      })
    },
    Open () {
      this.isCollapse = false
      this.isShow = false
    },
    Close () {
      this.isCollapse = true
      this.isShow = true
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } // 去除边框
  .window
    position fixed
    display -webkit-flex
    display flex
    justify-content flex-start
    top 26px
    left 0
    right 0
    bottom 0
    .menu-warpper
      height 100%
      background-color #545c64
      .el-menu-vertical-demo:not(.el-menu--collapse)
        position relative
        max-width 130px
        min-height 1000px
    .warpper
      position relative
      width 100%
      height 100%
      margin-left -1px
      background-color rgb(200,200,200)
</style>
