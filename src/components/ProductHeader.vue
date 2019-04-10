<template>
  <header class="main-header">
    <div class="main-header-inner">
      <router-link to="/" class="b logo"><i class="el-icon-arrow-left mr10 b"></i>DaoMall · 商品</router-link>
      <div>
        <router-link to="/cast" class="mr20">
          <el-badge v-if="$store.state.global.cast.length" :value="$store.state.global.cast.length" class="item mr10">
            <i class="el-icon-goods b"></i>
          </el-badge>
          <i v-else class="el-icon-goods mr10 b"></i>
          <span>购物车</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
.user-header{
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.user-header-inner{
  // max-width: 960px;
  // margin: 0 auto;
  display: flex;
   height: 50px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  .logo{
    font-size: 16px;
  }
}
</style>
