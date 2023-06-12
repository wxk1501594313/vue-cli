import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import device from './modules/device'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    device
  },
  getters
})