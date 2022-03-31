import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import echarts from 'echarts';
import Vuex from 'vuex';
import store from './store/index.js'
import 'echarts-liquidfill'

  require('./mock/index.js')

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.use(Vuex);

Vue.prototype.$echarts = echarts;
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
