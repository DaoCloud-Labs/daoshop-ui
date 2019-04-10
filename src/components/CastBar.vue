<template>
  <div class="action-bar" v-bind:class="{ 'del-box': delFlag }">
    <div class="g-selector">
      <!-- <div class="item-selector">
        <div class="icon-selector" v-bind:class="{'selector-active': checkAllFlag}">
          <svg t="1504061791962" class="icon" style viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
            <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z" fill="#ffffff" p-id="2923"></path>
          </svg>
        </div>
      </div>
      <span>全选</span> -->
    </div>
    <div class="action-btn buy-btn" @click="handleBuy">去结算</div>
    <div class="action-btn del-btn">删除</div>
    <div class="total">合计：
      <span>¥
        <b>{{ totalPrice }}</b>
      </span>
    </div>
  </div>
</template>
<script>
import * as api from '@/api';

export default {
  computed: {
    totalPrice() {
      let count = 0;
      const buys = [...this.$store.state.global.buy];
      for (let index = 0; index < buys.length; index += 1) {
        const element = buys[index];
        const item = this.$store.state.global.cast.filter(good => good.id === element)[0];
        count += item.num * item.price;
      }
      return count;
    },
  },
  data() {
    return {
      checkAllFlag: false,
      selectedNum: 0,
      delFlag: false,
    };
  },
  methods: {
    handleBuy() {
      api.buyProduct(
        this.$store.state.global.cast.map(i => ({
          productId: i.id, count: i.num,
        })),
      ).then(() => {
        this.$store.commit('EMPTY_CAST');
      });
    },
  },
};
</script>
<style lang="scss">

.action-bar {
  height: 52px;
  font-size: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.g-selector {
  float: left;
  width: 70px;
  margin-left: 4%;
  height: 52px;
  cursor: pointer;
}

.g-selector .item-selector {
  position: relative;
  display: inline-block;
}

.g-selector span {
  margin-left: 20px;
  color: #5F646E;
}

.total {
  float: right;
  color: #363636;
  font-size: 14px;
  line-height: 50px;
  margin-right: 20px;
}

.total span {
  color: #7A45E5;
}

.total b {
  font-size: 17px;
  margin-left: 4px;
}

.action-btn {
  float: right;
  width: 120px;
  height: 100%;
  color: #fff;
  text-align: center;
  font-weight: 300;
  line-height: 52px;
  cursor: pointer;
}

.buy-btn {
  background-color: #7A45E5;
}

.del-btn {
  display: none;
  background-color: #FF4069;
}

.del-box .total {
  display: none;
}

.del-box .buy-btn {
  display: none;
}

.del-box .del-btn {
  display: block;
}
</style>
