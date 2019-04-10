<template>
  <div class="device" id="page-order">
    <main-header msg="订单" path="/"/>
    <div class="page">
      <ul class="cast-list" style="max-width: 960px; margin: 10px auto;">
        <OrderItem v-for="(item, index) in orders" :item="item" :key="index"/>
      </ul>
    </div>
</div>
</template>
<script>
import * as api from '@/api';
import OrderItem from '@/components/OrderItem.vue';

export default {
  components: {
    OrderItem,
  },
  methods: {
    getProducts() {
      api.getOrders().then((res) => {
        this.orders = res.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      orders: [],
    };
  },
};
</script>
<style lang="scss">
</style>
