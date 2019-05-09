<template>
  <div class="login-box">
    <ul class="tab cf">
      <li
        v-for="(item,index) in tabs"
        @click="change(index)"
        :key="index"
        :class="current==index ? 'active' : ''"
      >{{item.name}}</li>
    </ul>
    <div v-if="current===0" class="login-tab">
      <div class="box-cont">
        <div class="box">
          <span class="text">手机号</span>
          <input v-model="phone" @blur="validatePhone($event.target.value)" placeholder="注册手机号">
        </div>
        <div v-show="isPhoneErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{phoneErr}}</span>
        </div>
      </div>
      <div class="box-cont">
        <div class="box">
          <span class="text">密码</span>
          <input v-model="password" type="password" @blur="validatePwd($event.target.value)" placeholder="设置登录密码">
          <i class="open-eyes close" @click="eyesSwitch($event)"></i>
        </div>
        <div v-show="isPwdErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{pwdErr}}</span>
        </div>
      </div>
      <div class="box-cont" v-if="isImgValicodeShow">
        <div class="box">
          <span class="text">验证码</span>
          <input v-model="imgValicode" @blur="validateImgCode($event.target.value)" placeholder="图形验证码">
          <a class="validimg">
            <span class="imgcode" v-html="imgCodeDom" @click="refreshImgCode"></span>
          </a>
        </div>
        <div v-show="isImgValicodeErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{imgCodeErr}}</span>
        </div>
      </div>
      <div class="box-cont validcode" v-if="isValidcodeShow">
        <div class="box">
          <span class="text">验证码</span>
          <input v-model="valicode" @blur="validateCode($event.target.value)" placeholder="短信验证码">
          <a class="validimg">
            <span class="count" v-if="!isCodeAgain">{{countDown}}</span>
            <span class="again" v-else @click="getCodeAgain">重新获取</span>
          </a>
        </div>
        <div v-show="isImgValicodeErr" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{codeErr}}</span>
        </div>
      </div>
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
      <div class="register" @click="register">免费注册</div>
    </div>
    <div v-if="current===1" class="register-tab">
      <div class="box-cont">
        <div class="box">
          <span class="text">手机号</span>
          <input v-model="phoneNum" placeholder="输入手机号">
        </div>
      </div>
      <div class="box-cont">
        <div class="box">
          <span class="text">密码</span>
          <input v-model="pwd" placeholder="输入密码">
        </div>
      </div>
      <div v-show="isLoginErr" class="err-box">
        <i class="err-icon"></i>
        <span class="err">{{loginErr}}</span>
      </div>
      <div class="log-rightnow" @click="login">立即登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      tabs: [{ name: "免费注册" }, { name: "立即登录" }],
      current: 0,
      phone: "",
      password: "",
      valicode: "",
      imgValicode: "",
      isCheck: false,
      isValidcodeShow: false,
      isImgValicodeShow: true,
      phoneErr: "手机号格式错误",
      imgCodeErr: "验证码错误",
      codeErr: "验证码错误",
      pwdErr: "密码输入错误",
      loginErr: "用户名或密码错误",
      isPhoneErr: false,
      isPwdErr: false,
      isImgValicodeErr: false,
      isPhoneErr: false,
      isLoginErr: false,
      phoneNum: "",
      pwd: "",
      imgCodeDom:'',
      countDown: '112s',
      isCodeAgain: false
    };
  },
  created () {
    this.$axios
    .get("/register/authcode",{
        t:Math.random()
    })
    .then(res => {
        this.imgCodeDom = res.data.img
    })
  },
  methods: {
    eyesSwitch (ele) {
      ele.target.className =
        ele.target.className.indexOf("close") == -1
          ? "open-eyes close"
          : "open-eyes"
      if (ele.target.className.indexOf("close") == -1) {
        ele.target.previousElementSibling.setAttribute("type", "text")
      } else {
        ele.target.previousElementSibling.setAttribute("type", "password")
      }
    },
    check () {
      this.isCheck = !this.isCheck
    },
    refreshImgCode () {
        this.$axios
        .get("/register/authcode",{
            t:Math.random()
        })
        .then(res => {
            this.imgCodeDom = res.data.img
        })
    },
    getCodeAgain () {
        this.$axios
        .get("/register/authcode",{
            username: this.phone
        })
        .then(res => {
            this.imgCodeDom = res.data.img
        })
    },
    change (index) {
      if (index == 0) {
        this.phone = ""
        this.passward = ""
        this.valicode = ""
        this.imgValicode = ""
        this.isPhoneErr = false
      } else {
        this.phoneNum = ""
        this.pwd = ""
        this.isPwdErr = false
      }
      this.isImgValicodeShow = true
      this.isValidcodeShow = false
      this.current = index
    },
    validatePhone (val) {
      let reg = /^1[0-9]{10}$/
      let phone = val
      if (phone.trim() !== "" && reg.test(Number(phone))) {
        this.isPhoneErr = false
        this.$axios
          .post("/register/isUserNameValid", {
                username:phone
          })
          .then(res => {
            this.isPhoneErr = false
          })
      } else if (phone.trim() === "") {
          this.isPhoneErr = false
      } else {
          this.isPhoneErr = true
      }
    },
    validateImgCode (val) {
      let reg = /^1[0-9]{10}$/
      let authcode = val
      let captcha = this.tool.cookie.get('captcha')
      if (authcode.trim()!=="" && authcode.length !==4) {
        this.isImgValicodeErr = true
      } else if(authcode.trim() === ""){
        this.isImgValicodeErr = false
      } else if(authcode!==captcha){
        this.isImgValicodeErr = true
      }else{
        this.$axios
          .post("/register/isAuthcodeValid", {
            authcode: authcode
          })
          .then(res => {
            this.isImgValicodeShow = false
            this.isValidcodeShow = true
            this.isImgValicodeErr = false
          })
      }
    },
    validateCode (val) {
      if (Number(val) !== 1) {
        console.log("err")
      }
    },
    validatePwd (val) {
        this.isPwdErr = false
    },
    register () {
        let res = this.isCheck && this.imgValicode && this.phone && this.password && this.valicode
        let valid = !this.isPhoneErr && !this.isPwdErr && !this.isImgValicodeErr && !this.isPhoneErr
        if (res) {
            this.$axios
            .post("/register", {
                authcode: this.imgValicode,
                username: this.phone,
                password: this.password,
                valicode: this.valicode
            })
            .then(res => {
                console.log(res.data)
            })
        } else {
            if(!this.phone){
                this.isPhoneErr = true
            }
            if(!this.imgValicode){
                this.isImgValicodeErr = true
            }
            if(!this.password){
                this.isPwdErr = true
            }
        }
    },
    login() {}
  }
}
</script>

<style lang="less">
@import "../assets/styles/_login.less";
</style>
