<template>
  <header class="main-header">
    <div class="main-header-inner">
      <router-link v-if="path" :to="path" class="b logo"><i class="el-icon-arrow-left mr10 b"></i>DaoMall · {{msg}}</router-link>
      <a v-else class="b logo">DaoMall {{msg ?`· ${msg}` : ''}}</a>
      <div>
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    msg: String,
    path: String,
  },
};
</script>
<style lang="scss">
.main-header{
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.main-header-inner{
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
