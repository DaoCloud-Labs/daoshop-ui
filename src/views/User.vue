<template>
  <div class="device" id="page-user">
    <main-header msg="用户" path="/">
     <router-link to="/order">
        <span>订单</span>
      </router-link>
    </main-header>
    <div class="page wrap">
      <h2 class="mt0">用户信息</h2>
      <div class="mb20">用户名： {{username}}</div>
      <el-button  type="danger" class="long mb10" @click="onSubmit">登出</el-button>
    </div>
</div>
</template>
<script>
import { getLocal } from '@/utils/index';

export default {
  methods: {
    onSubmit() {
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push('/login');
    },
  },
  mounted() {
    this.username = getLocal('user');
  },
  data() {
    return {
      username: '',
      form: {
        username: '',
        password: '',
      },
    };
  },
};
</script>
<style lang="scss">
</style>
