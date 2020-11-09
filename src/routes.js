import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'login',
    component: require('@/components/login/login').default
  },
  {
    path: '/404',
    component: require('@/components/home/404/').default,
    name: '404'
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  },
  {
    path: '/home',
    name: 'home',
    component: require('@/components/home/home').default,
    children: [{
      path: 'ParkingspaceModification',
      component: require('@/components/home/components/ParkingspaceModification').default,
      name: 'ParkingspaceModification',
      meta: { title: '车位管理' },
    },
    {
      path: 'status',
      component: require('@/components/home/components/StatusWindow/').default,
      name: 'status',
      meta: { title: '信息展示' },
    },
    {
      path: 'InformationModification',
      component: require('@/components/home/components/InformationModification/').default,
      name: 'InformationModification',
      meta: { title: '信息管理' },
    },
    {
      path: 'ParkingFees',
      component: require('@/components/home/components/ParkingFees/').default,
      name: 'ParkingFees',
      meta: { title: '详细收费规则' },
    },
    {
      path: 'ParkinginrecordModification',
      component: require('@/components/home/components/ParkinginrecordModification/').default,
      name: 'ParkinginrecordModification',
      meta: { title: '进入车辆上传' },
    },
    {
      path: 'ParkingoutrecordModification',
      component: require('@/components/home/components/ParkingoutrecordModification/').default,
      name: 'ParkingoutrecordModification',
      meta: { title: '离开车辆上传' },
    },
    {
      path: 'AdministratorModification',
      component: require('@/components/home/components/AdministratorModification/').default,
      name: 'AdministratorModification',
      meta: { title: '管理员用户信息修改' },

    },
    {
      path: 'ParkingspaceManagementnow',
      component: require('@/components/home/components/ParkingspaceManagementnow/').default,
      name: 'ParkingspaceManagementnow',
      meta: { title: '当前内部车辆信息' },
    },
    {
      path: 'ParkingspaceManagementall',
      component: require('@/components/home/components/ParkingspaceManagementall/').default,
      name: 'ParkingspaceManagementall',
      meta: { title: '停车记录' },
    },
    // {
    //   path: 'ParkingspaceStatus',
    //   component: require('@/components/home/components/ParkingspaceStatus/').default,
    //   name: 'ParkingspaceStatus',
    // },
    // {
    //   path: 'ParkingImg',
    //   component: require('@/components/home/components/ParkingImg/').default,
    //   name: 'ParkingImg'
    // },
    // {
    //   path: 'ParkingspaceImage',
    //   component: require('@/components/home/components/ParkingspaceImage/').default,
    //   name: 'ParkingspaceImage'
    // },
    // {
    //   path: 'ParkingspaceImagewest',
    //   component: require('@/components/home/components/ParkingspaceImagewest/').default,
    //   name: 'ParkingspaceImagewest'
    // },
    // {
    //   path: 'ParkingspaceImagetang',
    //   component: require('@/components/home/components/ParkingspaceImagetang/').default,
    //   name: 'ParkingspaceImagetang'
    // },
    // {
    //   path: 'ParkingspaceImageDingeast',
    //   component: require('@/components/home/components/ParkingspaceImageDingeast/').default,
    //   name: 'ParkingspaceImageDingeast'
    // },
    // {
    //   path: 'ParkingspaceImageDingwest',
    //   component: require('@/components/home/components/ParkingspaceImageDingwest/').default,
    //   name: 'ParkingspaceImageDingwest'
    // },
    // {
    //   path: 'ParkingspaceImageChao',
    //   component: require('@/components/home/components/ParkingspaceImageChao/').default,
    //   name: 'ParkingspaceImageChao'
    // },
    // {
    //   path: 'ParkingspaceEcharts',
    //   component: require('@/components/home/components/ParkingspaceEcharts/').default,
    //   name: 'ParkingspaceEcharts'
    // },
    {
      path: 'gfz',
      component: require('@/components/home/components/gfz/').default,
      name: 'gfz',
      meta: { title: '超分子北区停车场停车位实况' },

    },
    {
      path: 'jsj',
      component: require('@/components/home/components/jsj/').default,
      name: 'jsj',
      meta: { title: '计算机大楼东区停车场停车位实况' }
    },
    {
      path: 'kym',
      component: require('@/components/home/components/kym/').default,
      name: 'kym',
      meta: { title: '匡亚明大楼东区停车场停车位实况' }
    },
    {
      path: 'dxleast',
      component: require('@/components/home/components/dxleast/').default,
      name: 'dxleast',
      meta: { title: '鼎新楼东区停车场停车位实况' }
    },
    {
      path: 'dxlwest',
      component: require('@/components/home/components/dxlwest/').default,
      name: 'dxlwest',
      meta: { title: '鼎新楼西区停车场停车位实况' }
    }
    ]
  }
]

export default routes
