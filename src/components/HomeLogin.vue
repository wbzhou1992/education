<template>
  <div>
    <div class="login-box" v-if="!username">
      <ul class="tab cf">
        <li
          v-for="(item,index) in tabs"
          @click="change(index)"
          :key="index"
          :class="current==index ? 'active' : ''"
        >{{item.name}}</li>
      </ul>
      <div v-if="current===0" class="login-tab">
       <register></register>
      </div>
      <div v-if="current===1" class="register-tab">
       <login></login>
      </div>
  </div>
  <div class="success-box" v-else>
    <p class="welcome">
      欢迎来到学习网
    </p>
    <div class="success">
      <p>您当前登陆的账户:</p>
      <p>{{username}}</p>
      <a href="">发现课程</a>
      <p @click="signout">安全退出</p>
    </div>
  </div>
  </div>
</template>

<script>
import login from './Login.vue'
import register from './Register.vue'
import {mapState} from 'vuex'
export default {
  name: "homelogin",
  data() {
    return {
      tabs: [{ name: "免费注册" }, { name: "立即登录" }],
      current: 1,
      user: '',
      isLogin: false
    }
  },
  methods: {
    change (index) {
      this.current = index
    },
    signout () {
      localStorage.removeItem('token')
      localStorage.removeItem('token_exp')
      this.$axios
          .post("/signout", {
                username:this.user
          })
          .then(res => {
            if(res.data.code === 0) {
              location.reload()
            } else if(res.data.code === 1) {
            }
          })
    }
  },
  computed: {
      ...mapState(['username'])
  },
  components:{
    login,
    register
  }
}
</script>

<style lang="less">
@import "../assets/styles/_login.less";
</style>
