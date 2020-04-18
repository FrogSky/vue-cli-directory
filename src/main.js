import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from './api/index.js';

Vue.config.productionTip = false

Vue.prototype.$api = Api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
