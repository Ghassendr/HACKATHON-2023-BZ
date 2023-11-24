import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vuex from 'vuex';
import vuetify from './plugins/vuetify'
import setupInterceptors from './services/setupInterceptors';
import 'aos/dist/aos.css'
Vue.config.productionTip = false;

Vue.use(vuex);
setupInterceptors(store);


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
