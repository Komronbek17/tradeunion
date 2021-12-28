import Vue from 'vue'
import VueCookies from 'vue-cookies'
import vmodal from 'vue-js-modal'
import Paginate from 'vuejs-paginate'
import * as rules from 'vee-validate/dist/rules';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

import App from './App.vue'
import router from './router'
import store from './store'
Vue.component('paginate', Paginate)
Vue.use(vmodal)
Vue.use(VueCookies)

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
