// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vant from 'vant';
import 'vant/lib/index.css';

import Mint from 'mint-ui';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';





import App from './App'
import router from './router'
import navbar from './components/tabbar/Navbar.vue'
import totop from './components/tabbar/GoTop.vue'

import $ from 'jquery'

Vue.config.productionTip = false


Vue.use(Vant);
Vue.use(Mint);
Vue.use(MuseUI);

import 'mint-ui/lib/style.css'

Vue.component(
  'mnav', navbar
)

Vue.component(
  'totop', totop
)



Vue.filter('mfixed', function (value) {
  return value.toFixed(2)
})
Vue.filter('textFilter', function (value) {
  return value.slice(0, 100) + "..."
})

Vue.directive('mcolor', {
  bind(el, binding, vnode) {
    if (binding.value == "red") {
      el.style.color = "#f00"
      el.style.fontSize = "12px"
    } else if (binding.value == 'size') {
      el.style.fontSize = "20px"
      el.style.fontWeight = "bold"
    }

    if (binding.arg == "bgr") {
      el.style.backgroundColor = "#ff6666"
      el.style.color = "#fff"
      el.style.padding = "10px 15px"
    }
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
