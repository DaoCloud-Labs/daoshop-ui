import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import Components from '@/components';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Components);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
