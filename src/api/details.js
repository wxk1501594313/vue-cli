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

export function getDeviceDetails() {
  return request(
    {
      url: "/getCoreInformation",
      method: 'get',
      // params: data,
      headers:{
        isToken: false
      }
    }
  )
}