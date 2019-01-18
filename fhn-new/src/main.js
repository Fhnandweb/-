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
Vue.config.productionTip = false


Vue.use(Vant);
Vue.use(Mint);
Vue.use(MuseUI);

import 'mint-ui/lib/style.css'

Vue.component(
  'mnav', navbar
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
