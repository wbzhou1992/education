<template>
  <div class="reset">
    <div class="resetpwd-popup" v-show="firstStep">
      <div class="popup-body">
        <div class="logo"></div>
        <div class="close" @click="close"></div>
        <h1>找回密码</h1>
        <div class="box-cont">
          <div class="box">
            <span class="text">邮箱</span>
            <input
              class="emial"
              v-model="resetEmail"
              type="text"
              placeholder="输入找回密码的邮箱"
              @blur="validateEmail($event.target.value)"
            >
          </div>
          <div v-show="isPhoneErr" class="err-box">
            <i class="err-icon"></i>
            <span class="err">{{phoneErr}}</span>
          </div>
        </div>
        <div class="box-cont">
          <div class="box">
            <span class="text">验证码</span>
            <input
              v-model="imgValicode"
              @blur="validateImgCodeBlur($event.target.value)"
              placeholder="图形验证码"
              :disabled="isPhoneErr"
            >
            <a class="validimg">
              <!-- <img class="imgcode" :src="src" @click="refreshImgCode"> -->
              <span v-html="imgCodeDom" @click="refreshImgCode"></span>
            </a>
          </div>
          <div v-show="isImgValicodeErr" class="err-box">
            <i class="err-icon"></i>
            <span class="err">{{imgCodeErr}}</span>
          </div>
        </div>
        <div class="register" @click="nextStepFirst">下一步</div>
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
        <div class="box-cont">
          <div class="box">
            <span class="text">验证码</span>
            <input class="code" v-model="resetCode" type="text" placeholder="验证码">
            <a class="validimg">
              <span class="count" v-if="firstSend" @click="getCode">发送验证码</span>
              <span class="count" v-if="!firstSend&&!isCodeAgain">{{countDown}}</span>
              <span class="again" v-if="isCodeAgain" @click="getCode">重新获取</span>
            </a>
          </div>
          <div v-show="isResetError" class="err-box">
            <i class="err-icon"></i>
            <span class="err">{{resetErr}}</span>
          </div>
        </div>
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
          <input class="emial" type="password" v-model="resetPwd" placeholder="输入找回密码的邮箱">
        </div>
        <div class="box-cont">
          <div class="box">
            <span class="text">确认密码</span>
            <input class="code" type="password" v-model="resetPwdRe" placeholder="确认密码">
          </div>
          <div v-show="isResetErr" class="err-box">
            <i class="err-icon"></i>
            <span class="err">{{resetErr}}</span>
          </div>
        </div>
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
export default {
  name: "home",
  data() {
    return {
      firstStep: true,
      secondStep: false,
      thirdStep: false,
      isImgValicodeErr: false,
      imgCodeDom: "",
      imgValicode: "",
      isCodeValid: false,
      isNextStep: false,
      nextStep: false,
      isPhoneErr: false,
      firstSend: true,
      hasSend: false,
      countDown: "120s",
      resetCode: "",
      resetEmail: "",
      isResetError: false,
      isResetErr: false,
      resetErr: "密码输入错误",
      phoneErr: "",
      isCodeAgain: false,
      resetEml: "",
      resetPwd: "",
      resetPwdRe: "",
      timer: null,
      authcode: "",
      imgCodeErr: "验证码错误",
      fourthStep: false
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
      // let t = Math.random().toFixed(12)
      // let src = '/register/captcha.png?t=' + t
      // this.src = src
      this.$axios
        .get("/auth/captcha", {
          t: Math.random()
        })
        .then(res => {
          if(res.data.code === 0){

          }
          this.imgCodeDom = res.data.img
        })
    },
    validateEmail(val) {
      let phone = val
      if (phone.trim() !== "" && phone.indexOf("@") !== -1) {
        this.isPhoneErr = false;
        this.$axios
          .post("/register/isUsernameValid", {
            username: phone
          })
          .then(res => {
            if (res.data.code === 1) {
              this.isPhoneErr = false
            } else {
              this.isPhoneErr = true
              this.phoneErr = "用户不存在"
            }
          });
      } else {
        this.isPhoneErr = true
        this.phoneErr = "邮箱错误"
      }
    },
    validateImgCodeBlur(val) {
      let authcode = val
      let captcha = this.tool.cookie.get("captcha")
      console.log(captcha, authcode)
      if (captcha == authcode) {
        this.isImgValicodeErr = false
      } else {
        this.isImgValicodeErr = true
      }
    },
    getCode() {
      this.$axios
        .post("/auth/sendEmailAuthcode", {
          username: this.resetEmail
        })
        .then(res => {
          if (res.data.code === 0) {
            this.firstSend = false
            this.isCodeAgain = false
            this.startCount(res.data.time)
            console.log(res.data)
          } else if (res.data.code === 1) {
            this.isResetError = true
          }
        });
    },
    nextStepValidate(val) {
      let authcode = val;
      if (authcode.trim() === "" || authcode.length !== 4) {
        this.isImgValicodeErr = true
      } else {
        this.$axios
          .post("/register/isCaptchaValid", {
            captcha: authcode
          })
          .then(res => {
            if (res.data.code === 0) {
              this.isImgValicodeErr = false
              this.isPhoneErr = false
              this.secondStep = true
            } else {
              this.isPhoneErr = true
            }
          })
      }
    },
    nextStepFirst() {
      if (this.isPhoneErr) {
        return;
      }
      if (this.resetEmail && this.imgValicode) {
        this.nextStepValidate(this.imgValicode);
      } else if (!this.resetEmail) {
        this.isImgValicodeErr = true
        this.imgCodeErr = "请输入邮箱"
      } else if (!this.imgValicode) {
        this.isImgValicodeErr = true
        this.imgCodeErr = "请输入验证码"
      }
    },
    isCodeValidM() {
      this.$axios
        .post("/auth/isEmailAuthcodeValid", {
          authcode: this.resetCode
        })
        .then(res => {
          if (res.data.code === 0) {
            this.firstStep = false
            this.secondStep = false
            this.thirdStep = true
          } else if (res.data.code === 1) {
            this.isResetError = true
            this.imgCodeErr = "验证码错误"
          }
        });
    },
    nextStepSecond() {
      this.isCodeValidM()
    },
    startCount(time) {
      this.timer = setInterval(() => {
        this.countDown = String(time--) + "s"
        if (time == 0) {
          this.isCodeAgain = true
          this.countDown = "120s"
          clearInterval(this.timer)
        }
      }, 1000);
    },
    reset() {
      if (this.resetPwd !== this.resetPwdRe) {
        this.isResetErr = true
        this.resetErr = '两次密码输入不一致'
      } else {
        this.$axios
          .post("/resetpwd", {
            smscode: this.resetCode,
            username: this.resetEmail,
            pwd: this.resetPwd
          })
          .then(res => {
            if (res.data.code === 0) {
              this.fourthStep = true
              this.firstStep = false
              this.secondStep = false
              this.thirdStep = false
              setTimeout(()=>{
                this.fourthStep = false
              },1000)
            } else if (res.data.code === 1) {
              this.isResetError = true
            }
          })
      }
    }
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
