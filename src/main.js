// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastClick'
import "babel-polyfill"
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
