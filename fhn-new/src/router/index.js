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
import login from '@/components/person/Login'
import user from '@/components/person/User'
import cart from '@/components/goods/Cart.vue'
import order from '@/components/carts/Order.vue'
import evaluated from '@/components/carts/Evaluated.vue'
import payment from '@/components/carts/Payment.vue'
import receiving from '@/components/carts/Receiving.vue'
import coupon from '@/components/person/Coupon'
import notfound from '@/components/tabbar/Notfound'
import cinecism from '@/components/movie/Cinecism.vue'

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
          component: profile,
          children: [{
              path: '/user',
              component: user
            },
            {
              path: '',
              component: login
            },
            {
              path: '/login',
              component: login
            }
          ]
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
    {
      path: '/cart',
      component: cart,
      children: [{
          path: '',
          component: order
        },
        {
          path: '/order',
          component: order
        },
        {
          path: '/evaluated',
          component: evaluated
        },
        {
          path: '/payment',
          component: payment
        },
        {
          path: '/receiving',
          component: receiving
        },
      ]
    },
    {
      path: '/coupon',
      component: coupon
    },
    {
      path: '/cinecism/:lid',
      component: cinecism
    },
    {
      path: '/notfound',
      component: notfound
    },
    {
      path: "*",
      redirect: "/notfound"
    }
  ],
  mode: 'history'
})
