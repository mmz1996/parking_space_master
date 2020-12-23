<template>
  <div>
    <div class="wrapper">
      <v-head></v-head>
      <v-sidebar></v-sidebar>
      <div class="content-box" :class="{'content-collapse':collapse}">
<!--        <v-tags></v-tags>-->
        <div class="content">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
            </keep-alive>
          </transition>
          <el-backtop target=".content"></el-backtop>
        </div>
      </div>
    </div>
<!--      <el-container>-->
<!--        <el-header>-->
<!--          <div class="title">-->
<!--            JLU_PISP停车场管理系统-->
<!--          </div>-->
<!--        </el-header>-->
<!--        <el-container>-->
<!--          <el-aside>-->
<!--            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleselect" router style="background-color: white">-->
<!--              <el-menu-item index="status">-->
<!--                <i class="el-icon-view"></i>-->
<!--                <span>停车场总信息展示</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkingspaceModification">-->
<!--                <i class="el-icon-edit"></i>-->
<!--                <span>车位管理</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="InformationModification">-->
<!--                <i class="el-icon-search"></i>-->
<!--                <span>信息管理</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkinginrecordModification">-->
<!--                <i class="el-icon-upload2"></i>-->
<!--                <span>进入车辆上传</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkingoutrecordModification">-->
<!--                <i class="el-icon-download"></i>-->
<!--                <span>离开车辆上传</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkingspaceManagementnow">-->
<!--                <i class="el-icon-s-help"></i>-->
<!--                <span>停车场当前内部车辆信息</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkingspaceManagementall">-->
<!--                <i class="el-icon-help"></i>-->
<!--                <span>停车场停车记录</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="AdministratorModification">-->
<!--                <i class="el-icon-upload"></i>-->
<!--                <span>管理员用户信息修改</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="ParkingFees">-->
<!--                <i class="el-icon-info"></i>-->
<!--                <span>详细收费规则</span>-->
<!--              </el-menu-item>-->
<!--              &lt;!&ndash;<el-menu-item index="ParkingspaceStatus">&ndash;&gt;-->
<!--                &lt;!&ndash;<i class="el-icon-s-promotion"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;<span>车位状态管理</span>&ndash;&gt;-->
<!--              &lt;!&ndash;</el-menu-item>&ndash;&gt;-->
<!--              &lt;!&ndash;<el-menu-item index="ParkingImg">&ndash;&gt;-->
<!--                &lt;!&ndash;<i class="el-icon-picture"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;<span>标头图片修改</span>&ndash;&gt;-->
<!--              &lt;!&ndash;</el-menu-item>&ndash;&gt;-->
<!--              <el-menu-item index="jsj">-->
<!--                <i class="el-icon-magic-stick"></i>-->
<!--                <span>计算机大楼东区停车场车位实况</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="kym">-->
<!--                <i class="el-icon-magic-stick"></i>-->
<!--                <span>匡亚明大楼东区停车场车位实况</span>-->
<!--              </el-menu-item>-->
<!--              &lt;!&ndash;<el-menu-item index="ParkingspaceImageDingwest">&ndash;&gt;-->
<!--                &lt;!&ndash;<i class="el-icon-magic-stick"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;<span>鼎新楼西区停车场车位实况</span>&ndash;&gt;-->
<!--              &lt;!&ndash;</el-menu-item>&ndash;&gt;-->
<!--              &lt;!&ndash;<el-menu-item index="ParkingspaceImageDingeast">&ndash;&gt;-->
<!--                &lt;!&ndash;<i class="el-icon-magic-stick"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;<span>鼎新楼东区停车场车位实况</span>&ndash;&gt;-->
<!--              &lt;!&ndash;</el-menu-item>&ndash;&gt;-->
<!--              <el-menu-item index="dxleast">-->
<!--                <i class="el-icon-magic-stick"></i>-->
<!--                <span>鼎新楼东区停车场车位实况</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="dxlwest">-->
<!--                <i class="el-icon-magic-stick"></i>-->
<!--                <span>鼎新楼西区停车场车位实况</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="gfz">-->
<!--                <i class="el-icon-magic-stick"></i>-->
<!--                <span>超分子楼北区停车场车位实况</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item @click="goback">-->
<!--                <i class="el-icon-close"></i>-->
<!--                <span>退出</span>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
<!--          </el-aside>-->
<!--          <el-main>-->
<!--            <router-view></router-view>-->
<!--          </el-main>-->
<!--        </el-container>-->
<!--      </el-container>-->

  </div>
</template>

<script>
import bus from '@/components/home/common/bus.js'
import vHead from './Header.vue'
import vSidebar from './Sidebar.vue'
import vTags from './Tags.vue'
export default {
  name: 'home',
  data () {
    return {
      city: '',
      defaultActive: 'status',
      isUnique_opened: false,
      isCollapse_transition: true,
      isCollapse: false,
      isShow: false,
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHead,
    vSidebar,
    vTags
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
  },
  created() {
    bus.$on('collapse-content', msg => {
      this.collapse = msg;
    });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = [];
      console.log(msg)
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  }
}
</script>

