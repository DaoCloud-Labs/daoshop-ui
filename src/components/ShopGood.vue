<template>
  <li class="shop-goods-item">
    <div class="shop-goods-img">
      <img class="long" v-bind:src="item.img">
    </div>
    <div class="shop-goods-info">
      <p class="shop-goods-title" @click="$router.push('/good/' + item.id)">{{ item.name }}</p>
      <div class="shop-goods-price">
        <span>¥<b>{{ item.price }}</b></span>
      </div>
      <span class="grey sm">{{ item.sales }}人付款</span>
      <span class="save cp" @click="$store.dispatch('ADD_GOOD', item)">+</span>
    </div>
  </li>
</template>
<script>
export default {
  props: ['item'],
};
</script>
<style lang="scss">
.shop-goods-item {
  display: flex;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 10px 15px;
  background-color: #fff;
  min-height: 62px;
}

.shop-goods-img {
  margin-right: 10px;
  width: 80px;
  overflow: hidden;
}

.shop-goods-info {
  position: relative;
  width: 80%;
}

.shop-goods-title {
  width: 80%;
  height: 38px;
  color: #363636;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.shop-goods-price {
  margin-top: 6px;
  line-height: 1;
}

.shop-goods-price span {
  font-size: 15px;
  color: #7a45e5;

}
.save {
  position: absolute;
  right: 10px;
  bottom: 2px;
  width: 32px;
  height: 22px;
  background-color: #7a45e5;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  border-radius: 12px;
  overflow: hidden;
}
</style>
