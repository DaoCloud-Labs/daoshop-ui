<template>
  <div>
    <div class="cross">或者</div>
    <el-button plain class="long" @click="sso">使用 SSO 登录</el-button>
  </div>
</template>

<script>
import axios from 'axios';

const sso = () => axios
  .get('/demo/user/v1/get-arch-url', {
    params: {
      redirect_uri: window.location.origin,
    },
  })
  .then(({ data }) => {
    window.open(data.url, '_self');
  });

export default {
  name: 'LoginSSO',
  methods: {
    sso(e) {
      e.preventDefault();
      sso();
    },
  },
};
</script>
<style lang="scss" scoped>
.cross{
  color: #9ba3af;
  font-size: 13px;
  margin: 15px auto;
  line-height: 1px;
  border-left: 120px solid #ddd;
  border-right: 120px solid #ddd;
  text-align: center;
}
</style>
