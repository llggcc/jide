// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './vuex/store.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  store,
  template: '<App/>',
  components: { App }
})
