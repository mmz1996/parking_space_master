import axios from 'axios'
axios.defaults.baseURL = 'https://api.ohaiyo.vip'
// axios.defaults.headers.common['Authentication-Token'] = this.$store.state.token
// let host = 'https://api.ohaiyo.vip'
// 添加请求拦截器，在请求头中加token
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization')
//     }
//
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   })

// axios.interceptors.request.use(config => {
//   if (this.$store.state.token) {
//     config.headers.common['Authentication-Token'] = this.$store.state.token
//   }
//
//   return config
// }, error => {
//   return Promise.reject(error)
// })
// 登录
export const login = params => {
  return axios.post(`/login/`, params)
}

// 车位数量更新
export const space = params => {
  return axios.post(`/space/`, params)
}
// 停车场信息更新
export const information = params => {
  return axios.post(`/information/`, params)
}
// 停车场管理员信息更新
export const administrator = params => {
  return axios.post(`/administrator/`, params)
}
// 停车场进入车辆记录更新
export const inrecord = params => {
  return axios.post(`/inrecord/`, params)
}
// 停车场离开车辆记录更新
export const outrecord = params => {
  return axios.post(`/inrecord/`, params)
}
// 停车场收费标准更新
export const fees = params => {
  return axios.post(`/fees/`, params)
}

export const window = params => {
  return axios.get(`/parkinglot/`)
}
