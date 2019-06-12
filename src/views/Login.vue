<template>
  <div class="device" id="page-user">
    <main-header msg="用户"/>
    <div class="page wrap">
      <h2 class="mt0">登录</h2>
      <div class="tc">
      <img height="180px" src="https://qiniu-download-public.daocloud.io/DaoCloud_MicroServices_Platform/dmp_logo.svg">
      </div>
      <div class="mb5">账号</div>
      <el-input class="mb15" v-model="form.username" placeholder="请输入账号"></el-input>
      <div class="mb5">密码</div>
      <el-input class="mb20" type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      <el-button type="primary" class="long mb10" @click="onSubmit">登录</el-button>
      <br>
      <el-button plain class="long" @click="$router.push('/registry')">注册</el-button>
    </div>
</div>
</template>
<script>
import * as api from '@/api';
import { setLocal } from '@/utils/index';

export default {
  methods: {
    onSubmit() {
      api.login(this.form).then((res) => {
        setLocal('token', res.data.id);
        setLocal('user', res.data.username);
        if (res.data.error) {
          return;
        }
        this.$router.push('/');
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
