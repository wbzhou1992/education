<template>
  <div class="reset">
    <div class="resetpwd-popup" v-show="firstStep">
      <div class="popup-body">
        <div class="logo"></div>
        <div class="close" @click="close"></div>
        <h1>找回密码</h1>
        <InputBox 
            v-model.trim="resetEmail" 
            placeholder="输入找回密码的邮箱" 
            label="邮箱" 
            type="text"
            :errorMsg="phoneErr" 
            :errorShow="isPhoneErr" 
            @focus="isPhoneErr=false"
            @blur="validateEmail">
        </InputBox>
        <InputBox 
            v-model.trim="captcha" 
            placeholder="输入图形验证码" 
            label="验证码" 
            type="text"
            :disabled="isPhoneErr"
            :errorMsg="imgCodeErr" 
            :errorShow="isImgValicodeErr" 
            @focus="isImgValicodeErr=false"
            @blur="validateImgCodeBlur">
            <a class="validimg">
              <!-- <img class="imgcode" :src="src" @click="refreshImgCode"> -->
              <span v-html="imgCodeDom" @click="refreshImgCode"></span>
            </a>
        </InputBox>
        <div :class="isPhoneErr||!resetEmail || !captcha ? 'register dis':'register'" @click="nextStepFirst">下一步</div>
      </div>
    </div>
    <div class="resetpwd-popup" v-show="secondStep">
      <div class="popup-body">
        <div class="logo"></div>
        <div class="close"></div>
        <h1>找回密码</h1>
        <div class="box eml">
          <span class="text">邮箱</span>
          <span class="emial" type="text">{{resetEmail}}</span>
        </div>
        <InputBox 
            v-model.trim="resetCode" 
            placeholder="输入邮箱验证码" 
            label="验证码" 
            type="text"
            :errorMsg="resetCodeError" 
            :errorShow="isResetCodeError" 
            @focus="isResetCodeError=false"
            @blur="validateImgCodeBlur">
           <a class="validimg" href="javascript:void(0)">
              <span class="count" v-if="firstSend" @click="getCode">发送验证码</span>
              <span class="count" v-else-if="waitTime>0">{{countDown}}</span>
              <span class="again" v-else @click="getCode">重新获取</span>
            </a>
        </InputBox>
        <div class="register" @click="nextStepSecond">下一步</div>
      </div>
    </div>
    <div class="resetpwd-popup" v-show="thirdStep">
      <div class="popup-body">
        <div class="logo"></div>
        <div class="close"></div>
        <h1>找回密码</h1>
        <div class="box eml">
          <span class="text">邮箱</span>
          <span class="emial" type="text">{{resetEmail}}</span>
        </div>
        <div class="box">
          <span class="text">密码</span>
          <input class="emial" type="password" v-model="resetPwd" placeholder="输入新密码">
        </div>
         <InputBox 
            v-model.trim="resetPwdRe" 
            placeholder="确认新密码" 
            label="确认密码" 
            type="password"
            :errorMsg="resetErr" 
            :errorShow="isResetErr" 
            @focus="isResetErr=false">
        </InputBox>
        <div @click="reset" class="register">重置密码</div>
      </div>
    </div>
    <div class="resetpwd-popup resetpwd-popup-success" v-show="fourthStep">
      <div class="popup-body">
        <div class="logo"></div>
        <h1>重置成功</h1>
        <div class="box eml">
          <span class="text">邮箱</span>
          <span class="emial" type="text">{{resetEmail}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputBox from './InputBox.vue'
import API from '../../api/api.js'
export default {
  name: "home",
  data() {
    return {
      firstStep: true,
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
      imgCodeDom: "",
      captcha: '',
      isPhoneErr: false,
      isImgValicodeErr: false,
      isResetCodeError: false,
      isResetErr: false,
      resetCode: "",
      resetEmail: "",
      imgCodeErr: "验证码错误",
      phoneErr: "邮箱错误",
      resetCodeError: "邮箱验证码错误",
      resetErr: "密码输入错误",
      resetEml: "",
      resetPwd: "",
      resetPwdRe: "",
      timer: null,
      authcode: "",
      firstSend: true,
      hasSend: false,
      countDown: "120s",
      waitTime: 0
    };
  },
  created() {
    this.refreshImgCode();
  },
  methods: {
    close () {
      this.$emit('close')
    },
    refreshImgCode() {
      API.getCaptcha({t: Math.random()}).then(res => {
        if(res.data.code === 0){
          this.imgCodeDom = res.data.img
        } else {
          
        }
      })
    },
    validateEmail(val) {
      let phone = val
      if (!phone){
        this.isPhoneErr = true
        this.phoneErr = "请输入邮箱"
      } else if (phone.indexOf("@") === -1) {
        this.isPhoneErr = true
        this.phoneErr = "邮箱格式错误"
      } else {
        this.isPhoneErr = false
        API.isUsernameValid({username: phone}).then(res => {
          if (res.data.code === 1) {
            this.isPhoneErr = false
          } else {
            this.isPhoneErr = true
            this.phoneErr = res.data.message
          }
        })
      }
    },
    validateImgCodeBlur(val) {
      let captcha = val
      if(captcha.length !== 4){
        this.isImgValicodeErr = true
        this.imgCodeErr = "验证码错误"
      } else {
        API.isCaptchaValid({captcha: captcha}).then(res => {
          if(res.data.code===0){
            this.isImgValicodeErr = false
          } else {
            this.isImgValicodeErr = true
            this.imgCodeErr = res.data.message
          }
        })
      }
    },
    getCode() {
      console.log('getcode') 
      debugger
      API.sendEmailAuthcode({username: this.resetEmail}).then(res => {
        console.log(res)
          if (res.data.code === 0) {
            this.firstSend = false
            this.startCount(res.data.time)
          } else {
            this.isResetCodeError = true
            this.resetCodeError = res.data.message
          }
        })
    },
    nextStepFirst() {
      if (this.isPhoneErr) {
        this.isPhoneErr = true
        this.phoneErr = "请输入邮箱"
      } else if(!this.captcha) {
        this.isImgValicodeErr = true
        this.imgCodeErr = "请输入验证码"
      } else {
        API.isCaptchaValid({captcha: this.captcha}).then(res => {
          if (res.data.code === 0) {
            this.isImgValicodeErr = false
            this.isPhoneErr = false
            this.secondStep = true
          } else {
            this.isPhoneErr = true
            this.phoneErr = res.data.message
          }
        })
      }
    },
    nextStepSecond() {
      if(!this.resetCode) {
        this.isResetCodeError = true
        this.resetCodeError = "请输入验证码"
      } else {
        API.isEmailAuthcodeValid({authcode: this.resetCode}).then(res => {
          if (res.data.code === 0) {
            this.firstStep = false
            this.secondStep = false
            this.thirdStep = true
          } else {
            this.isResetError = true
            this.imgCodeErr = res.data.message
          }
        })
      }
    },
    startCount(time) {
      this.timer = setInterval(() => {
        this.countDown = String(time--) + "s"
        if (time == 0) {
          clearInterval(this.timer)
        }
      }, 1000);
    },
    reset() {
      if (!this.resetPwd) {
        this.isResetErr = true
        this.resetErr = '请输入密码'
      } else if (!this.resetPwdRe) {
        this.isResetErr = true
        this.resetErr = '请输入确认密码'
      } else if (this.resetPwd !== this.resetPwdRe) {
        this.isResetErr = true
        this.resetErr = '两次密码输入不一致'
      } else {
        let data = {
          smscode: this.resetCode,
          username: this.resetEmail,
          pwd: this.resetPwd
        }
        API.register(data).then(res => {
            if (res.data.code === 0) {
              this.fourthStep = true
              this.firstStep = false
              this.secondStep = false
              this.thirdStep = false
              setTimeout(()=>{
                this.fourthStep = false
              },1000)
            } else {
              this.isResetError = true
              this.resetErr = res.data.message
            }
          })
      }
    }
  },
  components: {
    InputBox
  },
  beforeDestory() {
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
