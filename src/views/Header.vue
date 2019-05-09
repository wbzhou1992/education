<template>
  <div class="header">
    <div class="logo"></div>
    <ul class="nav">
        <li>首页</li>
        <li>课程中心</li>
        <li>辅导教材</li>
        <li>题库</li>
        <li>直播</li>
        <router-link to="/about" tag="li">关于我们</router-link>
    </ul>
    <ul class="login">
        <li>登录</li>
        <li>注册</li>
    </ul>
    <!-- <login></login> -->
  </div>
  
</template>

<script>
import login from '@/components/Login.vue'
export default {
  name: 'vheader',
  components: {
    login
  }
}
</script>
<style lang="less">
    @import '../assets/styles/_header.less';
</style>