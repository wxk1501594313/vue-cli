import Login from '../views/Login'
import Index from '../views/Index'
import DeviceDetail from '../views/DeviceDetail'
import VueRouter from 'vue-router'
export const constantRoutes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/deviceDetail/:code/:deviceName',
    component: DeviceDetail
  }
]

export default new VueRouter({
  mode: 'history', // 去掉url中的#
  routes: constantRoutes
})