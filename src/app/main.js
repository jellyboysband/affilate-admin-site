// Polyfills
import 'es6-promise/auto';
import 'babel-polyfill';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { ColorThemePlugin } from 'vuestic-ui/src/services/ColorThemePlugin';
import store from '../store/index';
import router from '../router/index';
import VuesticPlugin from 'vuestic-ui/src/components/vuestic-plugin';
import '../i18n/index';
import YmapPlugin from 'vue-yandex-maps';
import VueClipboard from 'vue-clipboard2';
import VeeValidate from 'vee-validate';
import Axios from 'axios';
import qs from 'querystring';

import '../metrics';

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });

Vue.use(VuesticPlugin);
Vue.use(YmapPlugin);
Vue.use(VueClipboard);

Vue.use(ColorThemePlugin, {
  // Add or change theme colors here
  themes: {
    primary: '#3f51b5',
    secondary: '#002c85',
    success: '#00CC50',
    info: '#2c82e0',
    danger: '#e34a4a',
    warning: '#ffc200',
    gray: '#293b4d',
    dark: '#17212b',
    light: '#dde3f9',
  },
});

// Axios Setup
Axios.defaults.paramsSerializer = params => {
  for (const key in params) {
    if (params[key] === null) {
      delete params[key];
    }
  }
  return qs.stringify(params);
};
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/json';

const token = localStorage.getItem('token');

if (token) {
  Vue.prototype.$http.defaults.headers.common['token'] = token;
}

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next({ name: 'login' });
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  store.commit('setLoading', false);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
