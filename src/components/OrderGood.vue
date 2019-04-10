<template>
  <li class="order-goods-item">
    <div class="order-goods-info">
      <p class="order-goods-title">{{item.productName}}</p>
      <div class="order-goods-price">
        <span class="b">¥ {{ item.price * item.count }} </span>
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
.order-goods-item {
  display: flex;
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 10px 15px;
  background-color: #fff;
  min-height: 62px;
}
.order-goods-num {
    position: absolute;
    right: 10px;
    top: 4px;
    width: 32px;
    color: #999;
    text-align: center;
}
.order-goods-img {
  margin-right: 10px;
  width: 60px;
  overflow: hidden;
}

.order-goods-info {
  position: relative;
  width: 100%;
}

.order-goods-title {
  width: 80%;
  height: 38px;
  color: #363636;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.order-goods-price {
  margin-top: 6px;
  line-height: 1;
}

.order-goods-price span {
  font-size: 15px;
  color: #7a45e5;

}
.order-save {
  position: absolute;
  right: 10px;
  bottom: 2px;
  width: 32px;
  height: 22px;
  background-color: #7a45e5;
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
