<template>
  <div class="device" id="page-user">
    <main-header>
      <router-link to="/cast" class="mr20">
        <el-badge v-if="$store.state.global.cast.length" :value="$store.state.global.cast.length" class="item mr10">
          <i class="el-icon-goods b"></i>
        </el-badge>
        <i v-else class="el-icon-goods mr10 b"></i>
        <span>购物车</span>
      </router-link>
    </main-header>
    <div class="page product-container">
      <img :src="'http://BASE_URL' + item.img" class="long">
      <h3>{{data.name}}</h3>
      <span class="save cp r" @click="$store.dispatch('ADD_GOOD', data)">+</span>
      <div class="shop-goods-price mb5">
        <span>¥<b>{{ data.price }}</b></span>
      </div>
      <span class="grey sm mb5">{{ data.sales }}人付款</span>
    </div>
</div>
</template>
<script>
import * as api from '@/api';

export default {
  methods: {
    getProduct() {
      api.getProduct(this.$route.params.id).then((res) => {
        this.data = res.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>
<style lang="scss">
.product-container{
  background-color: #fff;
  .save{
    position: relative;
    display: block;
  }
}
</style>
