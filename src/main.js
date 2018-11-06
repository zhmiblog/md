import Vue from 'vue'
import router from './router'
import './assets/weui.min.css'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
