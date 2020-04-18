import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from './api/index.js';
import Url from './assets/script/url.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$api = Api;
Vue.prototype.$url = Url;

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
