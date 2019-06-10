import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import { getLocal } from '@/utils/index';
import { Message } from 'element-ui';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
import Cast from './views/Cast.vue';
import User from './views/User.vue';
import Order from './views/Order.vue';
import OrderInfo from './views/OrderInfo.vue';
import Login from './views/Login.vue';
import Registry from './views/Registry.vue';
import ErrorPage from './views/Error.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/good/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/cast',
      name: 'cast',
      component: Cast,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/order/:id',
      name: 'order-info',
      component: OrderInfo,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        login: true,
      },
    },
    {
      path: '/registry',
      name: 'registry',
      component: Registry,
      meta: {
        login: true,
      },
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage,
      meta: {
        login: true,
      },
    },
  ],
});
router.beforeEach((to, _, next) => {
  const token = getLocal('token');
  axios.defaults.timeout = 60000;
  if (token) {
    axios.defaults.headers.common.token = token;
  }
  if (to.meta.login && token === null) {
    next();
  } else if (token === null) {
    next('/login');
  } else {
    next();
  }
});
axios.interceptors.response.use(response => response, (err) => {
  if (err.response) {
    if (err.response.status >= 500 || err.response.status === 400 || err.response.status === 405 || err.response.status === 403 || err.response.status === 412) {
      Message({
        message: err.response.data.message ? err.response.data.message : err.response.data,
        type: 'error',
        showClose: true,
      });
    }
  }
  if (err && err.response) {
    if (err.response.data.error === 'invalid_token'
    || err.response.data.error === 'unauthorized') {
      localStorage.clear();
      window.location.href = '/login.html';
    }
  }
  return window.Promise.reject(err);
});
export default router;
