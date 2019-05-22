import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VuePaginate from 'vue-paginate';
import ElementUI from 'element-ui';

import axios from './assets/js/http';
import { formatDate } from './assets/js/formatDate';
import utils from '../utils';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/reset.css';

const IMG_URL = 'http://124.156.160.86';

Vue.config.productionTip = false;

Vue.use(ElementUI)

Vue.prototype.$axios = axios;
Vue.prototype.$formatDate = formatDate;
Vue.prototype.$IMG_URL = IMG_URL;
Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
