// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './vue-axios'
import { beforeEachHook } from './router/beforeEach'

Vue.config.productionTip = false

router.beforeEach(beforeEachHook)
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
