// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import {store} from './store/store'

Vue.use(VueRouter);

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
