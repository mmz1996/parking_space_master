import axios from 'axios'

let host = 'http://api.ohaiyo.vip'

// 登录
export const login = params => {
  return axios.post(`${host}/login/`, params)
}
