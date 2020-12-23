import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    titleimg: require('@/assets/titleimg.png'),
    id: '001'
  },
  mutations: {
    set_token (state, token) {
      state.token = token
      localStorage.token = token
    },
    del_token (state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    set_id (state, id) {
      state.id = id
      localStorage.id = id
    },
    set_username (state, username) {
      state.username = username
      localStorage.username = username
    }
  }
})
export default store
