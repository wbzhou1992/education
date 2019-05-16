<template>
  <div class="login">
      <InputBox 
            v-model.trim="phone" 
            placeholder="注册邮箱" 
            label="邮箱" 
            :errorMsg="phoneErr" 
            :errorShow="isPhoneErr" 
            @focus="isPhoneErr=false"
            @blur="validateEmail">
      </InputBox>
      <InputBox 
            v-model.trim="password" 
            placeholder="设置登录密码" 
            label="密码" 
            type="password"
            :errorMsg="pwdErr" 
            :errorShow="isPwdErr" 
            @focus="isPwdErr=false"
            @blur="validatePwd">
            <i class="open-eyes close" @click="eyesSwitch($event)"></i>
      </InputBox>
      <InputBox 
            v-if="isImgValicodeShow"
            v-model.trim="imgValicode" 
            placeholder="图形验证码" 
            label="验证码" 
            key="imgValicode"
            :disabled="isPhoneErr"
            :errorMsg="imgCodeErr" 
            :errorShow="isImgValicodeErr" 
            @focus="isImgValicodeErr=false"
            @blur="validateImgCodeBlur"
            @input="validateImgCode">
            <a class="validimg">
              <span v-html="imgCodeDom" @click="refreshImgCode"></span>
          </a>
      </InputBox>
      <InputBox class="validcode"
            v-if="isValidcodeShow"
            v-model.trim="valicode" 
            placeholder="邮箱验证码" 
            label="验证码" 
            key="valicode"
            :errorMsg="codeErr" 
            :errorShow="isValicodeErr" 
            @focus="isValicodeErr=false">
            <a class="validimg">
              <span class="again" v-if="firstSend" @click="sendEmail">发送验证码</span>
              <span class="count" v-else-if="waitTime>0">{{countDown}}</span>
              <span class="again" v-else @click="sendEmail">重新获取</span>
            </a>
      </InputBox>
      <div class="agree cf">
        <a class="checkstatus" @click="check">
          <span v-if="isCheck" class="check"></span>
          <span v-else class="check not"></span>
        </a>
        <p class="agreement">
          我已阅读并同意
          <a href>《注册服务协议》</a>
        </p>
      </div>
      <div :class="isValidcodeShow ? 'register' :'register dis'" @click="register">免费注册</div>
  </div>
</template>

<script>
import InputBox from './InputBox.vue'
import API from '../../api/api'
export default {
  name: "home",
  data() {
    return {
      phone: "",
      password: "",
      valicode: "",
      imgValicode: "",
      isCheck: false,
      isValidcodeShow: false,
      isImgValicodeShow: true,
      isPhoneErr: false,
      phoneErr: "邮箱格式错误",
      isImgValicodeErr: false,
      imgCodeErr: "验证码错误",
      isValicodeErr: false,
      codeErr: "验证码错误",
      isPwdErr: false,
      pwdErr: "密码输入错误",
      imgCodeDom: "",
      countDown: "120s",
      firstSend: true,
      src: "",
      waitTime: 0,
      timer: null
    }
  },
  created () {
    this.username = this.tool.cookie.get('user')
    if(this.username){
      this.isLogin = true
    }else{
      this.isLogin = false
      this.refreshImgCode()
    }
  },
  methods: {
    check() {
      this.isCheck = !this.isCheck
    },
    refreshImgCode () {
        API.getCaptcha().then(res => {
          if(res.data.code == 0){
              this.imgCodeDom = res.data.img
          }
        })
    },
    eyesSwitch(ele) {
      ele.target.className =
        ele.target.className.indexOf("close") == -1
          ? "open-eyes close"
          : "open-eyes";
      if (ele.target.className.indexOf("close") == -1) {
        ele.target.previousElementSibling.setAttribute("type", "text")
      } else {
        ele.target.previousElementSibling.setAttribute("type", "password")
      }
    },
    validateEmail (val) {
      let phone = val
      if (!this.phone) {
        this.isPhoneErr = true
        this.phoneErr = "邮箱输入错误"
      } else if (phone.indexOf('@')!==-1) {
        this.isPhoneErr = false
       API.isUsernameValid({username: phone}).then(res => {
          if (res.data.code !== 0) {
            this.isPhoneErr = true
            this.phoneErr = res.data.message
          }
        })
      } 
    },
    validatePwd(val) {
      this.isPwdErr = false;
    },
    validateImgCode(val) {
      let captcha = val;
      if(captcha.length !== 4){
        this.isImgValicodeErr = true
        this.imgCodeErr = "验证码错误"
      } else {
        API.isCaptchaValid({captcha: captcha}).then(res => {
          if(res.data.code===0){
            this.isImgValicodeShow = false
            this.isValidcodeShow = true
            this.isImgValicodeErr = false
          } else {
            this.isImgValicodeErr = true
            this.imgCodeErr = res.data.message
          }
        })
      }
    },
    validateImgCodeBlur(val) {
      let authcode = val
      let captcha = this.tool.cookie.get("captcha")
      if (!authcode || authcode.length !== 4 || authcode !== captcha) {
        this.isImgValicodeErr = true
        this.imgCodeErr = "验证码错误"
      } else {
        this.isImgValicodeErr = false
      }
    },
    register() {
      if (!this.isValidcodeShow) return
      if (!this.check) {
        this.isValicodeErr = true
        this.codeErr = "请阅读并勾选协议"
      } else if (!this.phone) {
        this.isPhoneErr = true
        this.phoneErr = "请输入邮箱"
      } else if (!this.valicode) {
        this.isValicodeErr = true
        this.codeErr = "请输入验证码"
      } else if (!this.password) {
        this.isPwdErr = true
        this.pwdErr = "请输入密码"
      } else {
        let data = {
          captcha: this.imgValicode,
          username: this.phone,
          password: this.password,
          emailauthcode: this.valicode
        }
        API.register(data).then(res => {
          if(res.data.code === 0){
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("token_exp",new Date().getTime() + 60 * 60 * 1000)
            this.$store.dispatch("setUser", {
              username: res.data.data.username,
              image: res.data.data.image
            })
          } else {
            this.isValicodeErr = true
            this.codeErr = res.data.message
          }
        }) 
      } 
    },
    sendEmail () {
      if (!this.phone) {
        this.isPhoneErr = true
        this.phoneErr = "请输入邮箱"
      } else {
        API.sendemail({username: this.phone}).then(res => {
          if(res.data.code===0){
            this.isValicodeErr = false
            this.waitTime = res.data.time
            this.startCount(res.data.time)
            this.firstSend = false
          } else {
            this.isValicodeErr = true
            this.codeErr = res.data.message
          }
        })
      }
    },
    startCount (time) {
      this.timer = setInterval(()=>{
        this.countDown = String(time--)+'s'
        if(time==0){
          clearInterval(this.timer)
        }
      },1000)
    }
  },
  components: {
    InputBox
  },
  beforeDestory () {
    clearInterval(this.timer)
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
