<template>
  <div class="device" id="page-cast">
    <main-header msg="购物车" path="/"/>
    <div class="page">
      <div class="empty-states" v-if="$store.state.global.cast.length === 0">
        <span>这里是空的，快去逛逛吧</span>
      </div>
      <ul class="cast-list" v-else style="max-width: 960px; margin: 10px auto;">
        <CastGood v-for="(item, index) in $store.state.global.cast" :item="item" :index="index" :key="index"/>
      </ul>
    </div>
    <CastBar/>
</div>
</template>
<script>
import CastGood from '@/components/CastGood.vue';
import CastBar from '@/components/CastBar.vue';

export default {
  components: {
    CastGood,
    CastBar,
  },
  computed: {
    totalPrice() {
      return 0;
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

  },
};
</script>
