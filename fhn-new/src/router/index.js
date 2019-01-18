import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Home'
import index from '@/components/Index'
import search from '@/components/Search'
import profile from '@/components/Profile'
import setting from '@/components/Setting'
import detail from '@/components/goods/Detail'
import address from '@/components/person/Address'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: index,
      children: [{
          path: '',
          component: home
        },
        {
          path: '/search',
          component: search
        },
        {
          path: '/prifile',
          component: profile
        },
        {
          path: '/setting',
          component: setting
        }
      ]
    },
    {
      path: '/detail/:lid',
      component: detail
    },
    {
      path: '/addr',
      component: address
    },
  ],
  mode: 'history'
})
