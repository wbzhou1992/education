<template>
<div>
  <div class="top">
    <span class="logo"></span>
    <span class="divider"></span>
    <span class="motto"></span>
    <span class="number">400-1767-214</span>
    <span class="phone"></span>
    
  </div>
  <div class="bg">
    <div class="header">
    <div class="logo"></div>
    <ul class="nav">
        <router-link v-for="li in nav" :to="li.path" tag="li" :key="li.name" active-class="active">{{li.name}}</router-link>
    </ul>
    <ul class="login" v-if="!username">
        <router-link to="/home" tag="li">登录</router-link>
        <router-link to="/home" tag="li">注册</router-link>
    </ul>
    <ul class="login-not" v-else>
        <li>{{username}}</li>
        <li><img :src="image"></li>
    </ul>
  </div>
  </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'vheader',
  data () {
    return {
      isLogin: false,
      nav:[
        {path:'/home',name:'首页'},
        {path:'/center',name:'课程中心'},
        {path:'/teach',name:'辅导教材'},
        {path:'/exam',name:'题库'},
        {path:'/live',name:'直播'},
        {path:'/about',name:'关于我们'},
      ]
    }
  },
  created () {

  },
  computed: {
      ...mapState(['username','image'])
  }
}
</script>
<style lang="less">
    @import '../assets/styles/_header.less';
</style>