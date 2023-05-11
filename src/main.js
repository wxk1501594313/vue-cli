import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icons'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
