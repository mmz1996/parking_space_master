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
      component: require('@/components/home/home').default
    }
  ]
})
