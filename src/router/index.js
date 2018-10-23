import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Member from '@/components/member'
import Search from '@/components/search'
import Shopcar from '@/components/shopcar'
import Newslist from '@/components/news/newslist.vue'
import Newsinfo from '@/components/news/newsinfo.vue'

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
    },
    {
      path: '/home/newslist',
      component: Newslist
    },
    {
      path: '/home/newsinfo/:id',
      component: Newsinfo
    }
  ]
})
