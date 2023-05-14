import request from '@/utils/request'

export function getScreen() {
  // const data = {
  //   code
  // }
  return request(
    {
      url: "/screen",
      method: 'get',
      // params: data,
      headers:{
        isToken: false
      }
    }
  )
}