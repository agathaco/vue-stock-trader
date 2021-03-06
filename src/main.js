// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://stock-trader-68055.firebaseio.com/';

Vue.use(VueRouter);

Vue.filter('currency',(value) => {
  return '£'+ value.toLocaleString()
})

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
