import axios from 'axios'
axios.defaults.baseURL = 'https://api.ohaiyo.vip'
// axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('Authorization')
// 登录
export const login = params => {
  return axios.post(`/login/`, params)
}
// export const login = params => {
//   return axios({
//     url: '/login/',
//     data: params,
//     method: 'post'
//     // headers: {'Authorization': 'JWT ' + this.$store.state.token}
//   })
// }
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
