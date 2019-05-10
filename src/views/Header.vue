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
    <ul class="login" v-if="!username">
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
import {mapState} from 'vuex'
export default {
  name: 'vheader',
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    login
  },
  // created () {
  //   let user = this.tool.cookie.get('user')
  //   let image = this.tool.cookie.get('image')
  //   if(user){
  //     this.isLogin = true
  //     this.user = this.tool.getPhone(user)
  //     this.img = image
  //   }else{
  //     this.isLogin = false
  //   }
  // },
  computed: {
      ...mapState(['username','image'])
  }
}
</script>
<style lang="less">
    @import '../assets/styles/_header.less';
</style>