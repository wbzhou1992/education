<template>
  <div class="reg">
      <div class="box-cont">
        <div class="box">
          <span class="text">手机号</span>
          <input v-model="phoneNum" placeholder="输入手机号">
        </div>
        <div v-show="isPhoneNumErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{phoneNumErr}}</span>
        </div>
      </div>
      <div class="box-cont">
        <div class="box">
          <span class="text">密码</span>
          <input v-model="pwd" type="password" placeholder="输入密码">
        </div>
        <div v-show="isPasswordErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{passwordErr}}</span>
        </div>
      </div>
      <div class="log-rightnow" @click="login">立即登录</div>
      
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      phoneNum: "",
      pwd: "",
      isPhoneNumErr: false,
      isPasswordErr: false,
      passwordErr: "请输入密码",
      phoneNumErr: "请输入手机号"
    };
  },
  methods: {
    login() {
      if (this.phoneNum.trim() === "") {
        this.isPhoneNumErr = true;
      } else if (this.pwd.trim() === "") {
        this.isPasswordErr = true;
      } else {
        this.$axios
          .post("/login", {
            username: this.phoneNum,
            password: this.pwd
          })
          .then(res => {
            if (res.data.code === 0) {
              this.username = this.tool.getPhone(res.data.data.username);
              localStorage.setItem("token", res.data.token)
              localStorage.setItem(
                "token_exp",
                new Date().getTime() + 60 * 60 * 1000
              )

              this.$store.dispatch("setUser", {
                username: res.data.data.username,
                image: res.data.data.image
              })
              console.log(this.$store.state.username)
            } else if (res.data.code === 1) {
              this.isPasswordErr = true
              this.passwordErr = res.data.message
            }
          })
      }
    }
  }
}
</script>
<style lang="less">
.home {
  position: relative;
}
.log {
  position: absolute;
  right: 36px;
  top: 40px;
  z-index: 100;
}
</style>
