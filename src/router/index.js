import Vue from 'vue'
import Router from 'vue-router'
import Stocks from '@/components/stocks/Stocks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
