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
    <ul class="login" v-if="!isLogin">
        <li>登录</li>
        <li>注册</li>
    </ul>
    <ul class="login" v-else>
        <li>{{username}}</li>
        <li><img :src="image"></li>
    </ul>
  </div>
  
</template>

<script>
import login from '@/components/Login.vue'
export default {
  name: 'vheader',
  data () {
    return {
      isLogin: false,
      username: this.$store.state.username,
      image: this.$store.state.image
    }
  },
  components: {
    login
  },
  created () {
    // this.user = this.tool.cookie.get('user')
    // this.image = this.tool.cookie.get('image')
    this.user = this.$store.state.username
    this.image = this.$store.state.image
    if(this.user){
      this.isLogin = true
      this.username = this.tool.getPhone(this.user)
    }else{
      this.isLogin = false
    }
  } 
}
</script>
<style lang="less">
    @import '../assets/styles/_header.less';
</style>