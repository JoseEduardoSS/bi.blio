import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './css/main.css'
import VueRouter from 'vue-router'
import {routes} from './routes';
import FirebaseVue from './firebase'

Vue.use(VueRouter)
Vue.use(FirebaseVue)

const router = new VueRouter({
  routes,
  mode:'history',
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
