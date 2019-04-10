<template>
  <div class="device" id="page-user">
    <main-header msg="注册" path="/"/>
    <div class="page wrap">
      <h2 class="mt0">注册</h2>
      <div class="mb5">用户名</div>
      <el-input class="mb15" v-model="form.username" placeholder="请输入内容"></el-input>
      <div class="mb5">密码</div>
      <el-input class="mb20" type="password" v-model="form.password" placeholder="请输入内容"></el-input>
      <el-button plain class="long mb10" @click="onSubmit">注册</el-button>
      <br>
      <el-button plain class="long" @click="$router.push('/login')">返回登录</el-button>
    </div>
</div>
</template>
<script>
import * as api from '@/api';

export default {
  methods: {
    onSubmit() {
      api.registry(this.form).then(() => {
        this.$router.push('/login');
      });
    },
  },
  data() {
    return {
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
