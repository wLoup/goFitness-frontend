import axios from '@/libs/api.request'

export const login = ({ username, password }) => {
  return axios.request({
    url: 'user/login/',
    data: {username:username,password:password},
    method: 'post'
  })
}


export const register = ({ username, password,email,phone,height,age,weight }) => {
  return axios.request({
    url: 'user/register/',
    data: {username:username,password:password,email:email,phone:phone,
    height:height,age:age,weight:weight},
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
