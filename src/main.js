// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './languages/i18n';
import App from './App';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(AsyncComputed);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
});
