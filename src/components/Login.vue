<template>
  <div class="login-box">
    <ul class="tab cf">
      <li @click="current=1" :class="current==1 ? 'active' : ''">免费注册</li>
      <li @click="current=2" :class="current==2 ? 'active' : ''">立即登录</li>
    </ul>
    <div v-if="current===1" class="login-tab">
      <div class="box">
        <span class="text">手机号</span>
        <input v-model="phone" placeholder="注册手机号">
      </div>
      <div class="box">
        
        <span class="text">密码</span>
        <input v-model="passward" placeholder="设置登录密码">
        <i class="open-eyes" @click="eyesSwitch($event)"></i>
      </div>
      <div class="box">
        
        <span class="text">验证码</span>

        <input v-model="valicode" placeholder="图形验证码">
        <a class="validimg">
            <img src="./images/verifyCode.png">
        </a>
      </div>
      <div class="agree cf">
          <a class="checkstatus" @click="check">
            <span v-if="isCheck" class='check'></span>
            <span v-else class='check not'></span>
          </a>
          <p class="agreement">
              我已阅读并同意<a href="">《注册服务协议》</a>
          </p>
      </div>
      <div class="register">免费注册</div>
    </div>
    <div v-if="current===2" class="register-tab">
      <div class="box">
                <span class="text">手机号</span>

        <input v-model="phone" placeholder="输入手机号">
      </div>
      <div class="box">
        
        <span class="text">密码</span>
        <input v-model="passward" placeholder="输入密码">
      </div>
      <div class="log-rightnow">立即登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      current: 1,
      phone: "",
      passward: "",
      valicode: "",
      isCheck: false
    };
  },
  methods: {
    eyesSwitch(ele) {
      ele.target.className =
        ele.target.className.indexOf("close") == -1
          ? "open-eyes close"
          : "open-eyes";
      if (ele.target.className.indexOf("close") == -1) {
        ele.target.previousElementSibling.setAttribute("type", "text");
      } else {
        ele.target.previousElementSibling.setAttribute("type", "password");
      }
    },
    check(){
        this.isCheck = !this.isCheck
    }
  }
};
</script>

<style lang="less">
@import "../assets/styles/_login.less";
</style>
