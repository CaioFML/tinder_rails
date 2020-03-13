import Vue from 'vue';
import axios from 'axios';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import './registerServiceWorker';

Vue.use(Buefy);

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
