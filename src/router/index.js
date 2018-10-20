import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Member from '@/components/member'
import Search from '@/components/search'
import Shopcar from '@/components/shopcar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
