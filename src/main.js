// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import Vuex from 'vuex'
import store from './store/index.js'
import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css';
import '@/components/home/common/directives';
import '@/assets/css/icon.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (this.$store.state.token) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (this.$store.state.token) {
//       next()
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   }
//   else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
