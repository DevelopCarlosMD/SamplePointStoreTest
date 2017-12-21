// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Firebase from 'firebase'

// Vue.use(VueFire)
Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Firebase.auth.onAuthStateChanged(function (user) {
  alert('you know you alv')
})

/* Firebase.auth.onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
}) */
