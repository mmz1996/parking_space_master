import axios from 'axios'
axios.defaults.baseURL = 'https://api.ohaiyo.vip'
axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('token')
// 登录
export const login = params => {
  return axios.post(`/login/`, params)
}
// 登录

export const space = params => {
  return axios.get(`/parkinglot/`)
}
// 停车场信息获取

export const getprice = params => {
  return axios.get(`/price/`)
}
// 停车场收费信息获取

export const carportstatus = params => {
  return axios.post(`/carportstatus/`, params)
}
// 停车场车位信息修改

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
