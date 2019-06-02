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
    <ul class="dropdown">
      <li class="item"><em></em>注册消防工程师<i></i>
      <ul class="submenu">
         <li v-for="(item,index) in submenuList" :key="index">
        <li>消防工程师</li>
        <li>天安财险</li>
        <li>教辅用书</li>
        <li>课程中心</li>
      </ul>
      </li>
      <li v-for="(item,index) in menuList" :key="index"><em></em>{{item.name}}<i></i></li>
    </ul>
    <ul class="nav">
      <li class="setting">
        <i></i>
        课程设置
      </li>
        <router-link v-for="li in nav" :to="li.path" tag="li" :key="li.name" active-class="active">{{li.name}}</router-link>
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
        {path:'/home',name:'课程中心'},
        {path:'/center',name:'教育研究院'},
        {path:'/teach',name:'学习方式'},
        {path:'/exam',name:'免费课程'},
        {path:'/live',name:'直播课程'},
        {path:'/live',name:'最新资讯'},
        {path:'/about',name:'关于我们'},
        {path:'/about',name:'售后服务'},
        
      ],
      menuList:[
        {name:'ACI国际注册营养师'},
        {name:'执业药师'},
        {name:'基金从业资格'},
        {name:'银行业从业资格'},
        {name:'国际金融理财师'},
        {name:'税务师'},
        {name:'注册会计师'}
      ],
      submenuList:[
        {name:'消防工程师'},
        {name:'天安财险'},
        {name:'教辅用书'},
        {name:'课程中心'}
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