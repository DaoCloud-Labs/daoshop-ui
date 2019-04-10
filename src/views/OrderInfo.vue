<template>
  <div class="device" id="page-order">
    <main-header msg="订单详情" path="/order"/>
    <div class="page">
      <ul class="cast-list" style="max-width: 960px; margin: 10px auto;">
        <OrderGood v-for="(item, index) in orders" :item="item" :key="index"/>
      </ul>
    </div>
</div>
</template>
<script>
import * as api from '@/api';
import OrderGood from '@/components/OrderGood.vue';

export default {
  components: {
    OrderGood,
  },
  methods: {
    getProducts() {
      api.getOrder(this.$route.params.id).then((res) => {
        this.orders = res.data.items;
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
