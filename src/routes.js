
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
      name: 'ParkingspaceModification'
    },
    {
      path: 'status',
      component: require('@/components/home/components/StatusWindow/').default,
      name: 'status'
    },
    {
      path: 'InformationModification',
      component: require('@/components/home/components/InformationModification/').default,
      name: 'InformationModification'
    },
    {
      path: 'ParkingFees',
      component: require('@/components/home/components/ParkingFees/').default,
      name: 'ParkingFees'
    },
    {
      path: 'ParkinginrecordModification',
      component: require('@/components/home/components/ParkinginrecordModification/').default,
      name: 'ParkinginrecordModification'
    },
    {
      path: 'ParkingoutrecordModification',
      component: require('@/components/home/components/ParkingoutrecordModification/').default,
      name: 'ParkingoutrecordModification'
    },
    {
      path: 'AdministratorModification',
      component: require('@/components/home/components/AdministratorModification/').default,
      name: 'AdministratorModification'
    },
    {
      path: 'ParkingspaceManagementnow',
      component: require('@/components/home/components/ParkingspaceManagementnow/').default,
      name: 'ParkingspaceManagementnow'
    },
    {
      path: 'ParkingspaceManagementall',
      component: require('@/components/home/components/ParkingspaceManagementall/').default,
      name: 'ParkingspaceManagementall'
    },
    {
      path: 'ParkingspaceStatus',
      component: require('@/components/home/components/ParkingspaceStatus/').default,
      name: 'ParkingspaceStatus'
    },
    {
      path: 'ParkingImg',
      component: require('@/components/home/components/ParkingImg/').default,
      name: 'ParkingImg'
    },
    {
      path: 'ParkingspaceImage',
      component: require('@/components/home/components/ParkingspaceImage/').default,
      name: 'ParkingspaceImage'
    },
    {
      path: 'ParkingspaceImagewest',
      component: require('@/components/home/components/ParkingspaceImagewest/').default,
      name: 'ParkingspaceImagewest'
    },
    {
      path: 'ParkingspaceImagetang',
      component: require('@/components/home/components/ParkingspaceImagetang/').default,
      name: 'ParkingspaceImagetang'
    },
    {
      path: 'ParkingspaceImageDingeast',
      component: require('@/components/home/components/ParkingspaceImageDingeast/').default,
      name: 'ParkingspaceImageDingeast'
    },
    {
      path: 'ParkingspaceImageDingwest',
      component: require('@/components/home/components/ParkingspaceImageDingwest/').default,
      name: 'ParkingspaceImageDingwest'
    },
    {
      path: 'ParkingspaceImageChao',
      component: require('@/components/home/components/ParkingspaceImageChao/').default,
      name: 'ParkingspaceImageChao'
    },
    {
      path: 'ParkingspaceEcharts',
      component: require('@/components/home/components/ParkingspaceEcharts/').default,
      name: 'ParkingspaceEcharts'
    },
    {
      path: 'gfz',
      component: require('@/components/home/components/gfz/').default,
      name: 'gfz'
    },
    {
      path: 'jsj',
      component: require('@/components/home/components/jsj/').default,
      name: 'jsj'
    },
    {
      path: 'kym',
      component: require('@/components/home/components/kym/').default,
      name: 'kym'
    },
    {
      path: 'dxleast',
      component: require('@/components/home/components/dxleast/').default,
      name: 'dxleast'
    },
      {
        path: 'dxlwest',
        component: require('@/components/home/components/dxlwest/').default,
        name: 'dxlwest'
      }
    ]
  }
]

export default routes
