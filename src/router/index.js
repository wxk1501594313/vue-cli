import Login from '../views/Login'
import Index from '../views/Index'
import VueRouter from 'vue-router'
export const constantRoutes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/index',
    component: Index
  }
]

export default new VueRouter({
  mode: 'history', // 去掉url中的#
  routes: constantRoutes
})