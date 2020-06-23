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
      .get('/demo/user/v1/get-arch-token', {
        params: {
          code: code[2],
          redirect_uri: window.location.origin,
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.access_token);
        return Axios.get('/demo/user/v1/get-arch-user', {
          params: {
            token: data.access_token,
          },
        });
      }).then(({ data }) => {
        localStorage.setItem('user', data.preferred_username);
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
  router.push({ path: '/', query: {} });
})();
