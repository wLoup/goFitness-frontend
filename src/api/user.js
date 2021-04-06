import axios from '@/libs/api.request'

export const login = ({ username, password }) => {
  return axios.request({
    url: 'user/login/',
    data: {username:username,password:password},
    method: 'post'
  })
}


export const register = ({ username, password,email,phone,sex,height,age,weight,sports }) => {
  return axios.request({
    url: 'user/register/',
    data: {username:username,password:password,email:email, phone:phone, sex:sex,
    height:height,age:age,weight:weight, sports:sports},
    method: 'post'
  })
}


export const pic = (username) => {
  return axios.request({
    url: 'recommend/',
    data: {"user_name":username},
    method: 'post'
  })
}
