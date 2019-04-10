import axios from 'axios';

export const login = params => axios.post('/demo/user/v1/login', params);

export const registry = params => axios.post('/demo/user/v1/registry', params);

export const getProducts = () => axios.get('/demo/product/v1/products');

export const getProduct = id => axios.get(`/demo/product/v1/products/${id}`);

export const buyProduct = params => axios.post('/demo/product/v1/products/buy', params);

export const bugImage = () => axios.get('/demo/admin/v1/image/main');

export const getOrders = () => axios.get(`/demo/order/v1/user/${window.localStorage.getItem('token')}/orders`);

export const getOrder = id => axios.get(`/demo/order/v1/orders/${id}`);
