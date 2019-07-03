
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
      path: 'control',
      component: require('@/components/home/control').default,
      name: 'control'
    },
    {
      path: 'status',
      component: require('@/components/home/StatusWindow/').default,
      name: 'status'
    },
    {
      path: 'setting',
      component: require('@/components/home/setting/').default,
      name: 'setting'
    },
    {
      path: 'find',
      component: require('@/components/home/find/').default,
      name: 'find'
    },
    {
      path: 'update',
      component: require('@/components/home/update/').default,
      name: 'update'
    },
    {
      path: 'mmz',
      component: require('@/components/home/mmz/').default,
      name: 'mmz'
    }
    ]
  }
]

export default routes
