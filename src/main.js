// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import './element/theme/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.http = Vue.prototype.$http = axios

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/') {
    next({ path: '/' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
