<template>
 <nav class="main-nav">
  <ul class="cate-tab">
    <li class="cate" :class="{
      'tab-active': cate_index === index
    }" v-for="(item, index) in cate" @click="$emit('toggleCate',index)" :key="index">{{ item.des }}</li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['cate', 'cate_index'],
};
</script>
<style lang="scss">
.main-nav {
  flex-shrink: 0;
  overflow: hidden;
  height: 55px;
  background-color: #7a45e5;
  // background: linear-gradient(120deg, #12b979 10%, #2181FB 100%);
  .cate-tab {
    max-width: 960px;
    margin: 0 auto;
    box-sizing: border-box;
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .cate {
    display: inline-block;
    width: 80px;
    height: 55px;
    color: #fff;
    line-height: 55px;
    text-align: center;
  }

  .tab-active {
    background-color: #093b2842;
  }
}


</style>
