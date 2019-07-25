import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '123',
    titleimg: require('@/assets/titleimg.png')
  },
  mutations: {
    set_token (state, token) {
      state.token = token
      localStorage.token = token
    },
    del_token (state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  }
})
export default store
