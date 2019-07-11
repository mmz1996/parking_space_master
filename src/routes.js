
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
      path: 'ParkingrecordModification',
      component: require('@/components/home/components/ParkingrecordModification/').default,
      name: 'ParkingrecordModification'
    },
    {
      path: 'AdministratorModification',
      component: require('@/components/home/components/AdministratorModification/').default,
      name: 'AdministratorModification'
    }
    ]
  }
]

export default routes
