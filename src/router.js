import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import { getLocal } from '@/utils/index';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
import Cast from './views/Cast.vue';
import User from './views/User.vue';
import Order from './views/Order.vue';
import OrderInfo from './views/OrderInfo.vue';
import Login from './views/Login.vue';
import Registry from './views/Registry.vue';

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

export default router;
