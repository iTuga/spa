import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import store from './store'
import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css"

Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
