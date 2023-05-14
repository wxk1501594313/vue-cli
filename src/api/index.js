import request from '@/utils/request'

export function getUserInfo(username) {
  const data = {
    username
  }
  return request(
    {
      url: "/getUserInfo",
      method: 'get',
      params: data,
      headers:{
        isToken: false
      }
    }
  )
}