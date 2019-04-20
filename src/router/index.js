import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/login/login').default
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
        path: 'userupdate',
        component: require('@/components/home/userupdate/').default,
        name: 'userupdate'
      }
      ]
    }
  ]
})
