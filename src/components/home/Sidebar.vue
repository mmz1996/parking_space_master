<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import bus from '@/components/home/common/bus.js'
  export default {
    name: "Sidebar",
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-view',
            index: 'status',
            title: '信息展示'
          },
          {
            icon: 'el-icon-edit',
            index: 'ParkingspaceModification',
            title: '车位管理'
          },
          {
            icon: 'el-icon-search',
            index: 'InformationModification',
            title: '信息管理'
          },
          {
            icon: 'el-icon-upload2',
            index: 'ParkinginrecordModification',
            title: '进入车辆上传'
          },
          {
            icon: 'el-icon-download',
            index: 'ParkingoutrecordModification',
            title: '离开车辆上传'
          },
          {
            icon: 'el-icon-s-help',
            index: 'ParkingspaceManagementnow',
            title: '当前内部车辆信息'
          },
          {
            icon: 'el-icon-help',
            index: 'ParkingspaceManagementall',
            title: '停车记录'
          },
          {
            icon: 'el-icon-upload',
            index: 'AdministratorModification',
            title: '管理员用户信息修改'
          },
          {
            icon: 'el-icon-info',
            index: 'ParkingFees',
            title: '详细收费规则'
          },
          // {
          //   icon: 'el-icon-lx-calendar',
          //   index: '3',
          //   title: '表单相关',
          //   subs: [
          //     {
          //       index: 'form',
          //       title: '基本表单'
          //     },
          //     {
          //       index: '3-2',
          //       title: '三级菜单',
          //       subs: [
          //         {
          //           index: 'editor',
          //           title: '富文本编辑器'
          //         },
          //         {
          //           index: 'markdown',
          //           title: 'markdown编辑器'
          //         }
          //       ]
          //     },
          //     {
          //       index: 'upload',
          //       title: '文件上传'
          //     }
          //   ]
          // },
          {
            icon: 'el-icon-magic-stick',
            index: 'jsj',
            title: '计算机大楼东区停车场车位实况'
          },
          {
            icon: 'el-icon-magic-stick',
            index: 'gfz',
            title: '超分子北区停车场停车位实况'
          },
          {
            icon: 'el-icon-magic-stick',
            index: 'kym',
            title: '匡亚明大楼东区停车场停车位实况'
          },
          {
            icon: 'el-icon-magic-stick',
            index: 'dxleast',
            title: '鼎新楼东区停车场停车位实况'
          },
          {
            icon: 'el-icon-magic-stick',
            index: 'dxlwest',
            title: '鼎新楼西区停车场停车位实况'
          },
        ]
      };
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    created() {
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
        bus.$emit('collapse-content', msg);
      });
    }
  }
</script>
<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .sidebar > ul {
    height: 100%;
  }
</style>

