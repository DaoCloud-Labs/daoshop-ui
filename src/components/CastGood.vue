<template>
  <li class="cast-goods-item">
    <div class="item-selector">
      <div class="icon-selector"  v-bind:class="{'selector-active': $store.state.global.buy.indexOf(item.id) !== -1}"  @click="$store.commit('ADD_BUY',item.id)">
      </div>
    </div>
    <div class="cast-goods-img">
      <img class="long" v-bind:src="(process.env.NODE_ENV === 'development' ? 'https://dmp-n2.daocloud.io' : 'http://BASE_URL') + item.img">
    </div>
    <div class="cast-goods-info">
      <p class="cast-goods-title">{{ item.name }}</p>
      <div class="cast-goods-price">
        <span class="b">¥{{ item.price }} </span>
      </div>
      <span class="sm grey">库存{{ item.stock }}件</span>
      <div class="cast-goods-num">
        <div class="num-btn" @click="$store.commit('ADD_CAST_GOOD',index)">+</div>
        <div class="show-num">{{ item.num }}</div>
        <div class="num-btn" @click="$store.commit('MINUSE_CAST_GOOD',index)">-</div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ['item', 'index'],
};
</script>
<style lang="scss">
.cast-goods-item {
  display: flex;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 10px 15px;
  background-color: #fff;
  min-height: 62px;
}
.cast-goods-num {
    position: absolute;
    right: 10px;
    top: 4px;
    width: 32px;
    color: #999;
    text-align: center;
}
.cast-goods-img {
  margin-right: 10px;
  width: 80px;
  overflow: hidden;
}

.cast-goods-info {
  position: relative;
  width: 80%;
}

.cast-goods-title {
  width: 80%;
  height: 38px;
  color: #363636;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.cast-goods-price {
  margin-top: 6px;
  line-height: 1;
}

.cast-goods-price span {
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
.show-num {
  line-height: 28px;
}
.num-btn {
  width: 100%;
  height: 24px;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}

</style>
