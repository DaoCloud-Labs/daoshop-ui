<template>
  <div class="device">
    <main-header>
      <router-link to="/cast" class="mr20">
        <el-badge v-if="$store.state.global.cast.length" :value="$store.state.global.cast.length" class="item mr10">
          <i class="el-icon-goods b"></i>
        </el-badge>
        <i v-else class="el-icon-goods mr10 b"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/user">
        <span>用户</span>
      </router-link>
    </main-header>
    <shop-nav :cate_index="cate_index" :cate="cate" @toggleCate="toggleCate" />
    <div class="page">
    <el-carousel height="180px">
      <el-carousel-item v-for="i in images" :key="i" class="tc">
        <img height="180px" :src="(process.env.NODE_ENV === 'development' ? 'https://dmp-n2.daocloud.io' : 'BASE_URL') + i">
      </el-carousel-item>
    </el-carousel>
    <ul class="clear" style="max-width: 960px;margin: 10px auto;">
      <ShopGood v-for="(item, index) in list" :item="item" :key="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ShopNav from '@/components/ShopNav.vue';
import ShopGood from '@/components/ShopGood.vue';
import * as api from '@/api';

export default {
  name: 'home',
  components: {
    ShopNav,
    ShopGood,
  },
  data() {
    return {
      cate_index: 0,
      cate: [
        { id: 0, des: '推荐' },
        { id: 1, des: '母婴' },
        { id: 2, des: '鞋包饰品' },
        { id: 3, des: '食品' },
        { id: 4, des: '数码家电' },
        { id: 5, des: '居家百货' },
      ],
      goods: [],
      images: [],
    };
  },
  created() {
    this.getProducts();
    this.bugImage();
  },
  computed: {
    list() {
      return this.goods.filter(item => (this.cate_index !== 0 ? item.type === this.cate_index : item));
    },
  },
  methods: {
    getProducts() {
      api.getProducts().then((res) => {
        this.goods = res.data;
      });
    },
    bugImage() {
      api.bugImage().then((res) => {
        this.images = res.data;
      });
    },
    toggleCate(index) {
      this.cate_index = index;
    },
  },
};
</script>
<style lang="scss">
.el-carousel__item:nth-child(2n+1){
  background-color: #fff;
}
</style>
