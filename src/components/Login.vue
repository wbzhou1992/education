<template>
  <div class="reg">
      <!-- <div class="box-cont">
        <div class="box">
          <span class="text">邮箱</span>
          <input v-model="phoneNum" placeholder="输入邮箱" @focus="isPhoneNumErr=false">
        </div>
        <div v-show="isPhoneNumErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{phoneNumErr}}</span>
        </div>
      </div> -->
      <InputBox 
            v-model.trim="phoneNum" 
            placeholder="输入邮箱" 
            label="邮箱" 
            :errorMsg="phoneNumErr" 
            :errorShow="isPhoneNumErr" 
            @focus="isPhoneNumErr=false">
      </InputBox>
       <InputBox 
            v-model.trim="pwd" 
            placeholder="输入密码" 
            label="密码" 
            :errorMsg="passwordErr" 
            :errorShow="isPasswordErr" 
            @focus="isPasswordErr=false">
      </InputBox>
      
      <div class="log-rightnow" @click="login">立即登录</div>
      <div class="find-pwd">
        <span>立即注册</span>
        <span @click="isShow=true">找回密码</span>
      </div>
      <reset v-if="isShow" @close="close"></reset>
  </div>
</template>

<script>
import reset from './ResetPwd.vue'
import InputBox from './InputBox.vue'
import API from '../../api/api'

export default {
  name: "home",
  data() {
    return {
      isShow: false,
      phoneNum: "",
      pwd: "",
      isPhoneNumErr: false,
      isPasswordErr: false,
      passwordErr: "请输入密码",
      phoneNumErr: "请输入邮箱",
     }
  },
components: {
  reset,
  InputBox
},
  methods: {
    close () {
      this.isShow = false
    },
    login() {
      if (!this.phoneNum) {
        this.isPhoneNumErr = true
        this.phoneNumErr = "请输入邮箱"
      } else if (!this.pwd) {
        this.isPasswordErr = true
        this.phoneNumErr = "请输入密码"
      } else {
        let data ={
          username: this.phoneNum,
          password: this.pwd
        }
        API.login(data)
          .then(res => {
            if (res.data.code === 0) {
              // this.username = this.tool.getPhone(res.data.data.username);
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("token_exp",new Date().getTime() + 60 * 60 * 1000)
              this.$store.dispatch("setUser", {
                username: res.data.data.username,
                image: res.data.data.image
              })
            } else {
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
