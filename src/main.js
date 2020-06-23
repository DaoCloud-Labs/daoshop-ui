import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Components from '@/components';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

const dceRedirct = () => {
  const reg = new RegExp('(^|&)code=([^&]*)(&|$)', 'i');
  const code = window.location.search.substr(1).match(reg);
  let p;
  if (!code) {
    p = new Promise((resolve) => {
      resolve();
    });
  } else {
    p = Axios
      .get('/user-center/sso/oauth/token', {
        headers: {
          CODE: code[2],
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.access_token);
      });
  }
  return p;
};
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Components);

(async () => {
  await dceRedirct();
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
})();
