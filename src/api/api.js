import axios from 'axios'

let host = 'https://api.ohaiyo.vip'

// 登录
export const login = params => {
  return axios.post(`${host}/login/`, params).then(res => res.data)
}
// 车位数量更新
export const number = params => {
  return axios.post(`${host}/number/`, params)
}
// 停车场信息更新
export const message = params => {
  return axios.post(`${host}/message/`, params)
}
// 停车场管理员信息更新
export const administrator = params => {
  return axios.post(`${host}/administrator/`, params)
}
// 停车场车辆记录更新
export const record = params => {
  return axios.post(`${host}/record/`, params)
}
