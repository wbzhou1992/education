<template>
  <div>
    <div class="login-box" v-if="!isLogin">
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
            <input v-model="imgValicode" @input="validateImgCode($event.target.value)" @blur="validateImgCodeBlur($event.target.value)" placeholder="图形验证码" :disabled="isPhoneErr">
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
        <div class="box-cont validcode" v-if="isValidcodeShow">
          <div class="box">
            <span class="text">验证码</span>
            <input v-model="valicode" @blur="validateCode($event.target.value)" placeholder="短信验证码">
            <a class="validimg">
              <span class="count" v-if="!isCodeAgain">{{countDown}}</span>
              <span class="again" v-else @click="getCodeAgain">重新获取</span>
            </a>
          </div>
          <div v-show="isValicodeErr" class="err-box">
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
  </div>
  <div class="success-box" v-else>
    <p class="welcome">
      欢迎来到学习网
    </p>
    <div class="success">
      <p>您当前登陆的账户，{{username}}</p>
      <a href="">发现课程</a>
      <p @click="signout">安全退出</p>
    </div>
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
      passwordErr: "请输入密码",
      phoneNumErr: "请输入手机号",
      isPhoneErr: false,
      isPwdErr: false,
      isImgValicodeErr: false,
      isValicodeErr: false,
      isPhoneErr: false,
      isLoginErr: false,
      isPhoneNumErr: false,
      isPasswordErr: false,
      phoneNum: "",
      pwd: "",
      imgCodeDom:'',
      countDown: '112s',
      isCodeAgain: false,
      username: '',
      isLogin: false,
      src: '',
      timer:null
    };
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
        // let t = Math.random().toFixed(12)
        // let src = '/register/captcha.png?t=' + t
        // this.src = src
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
        this.password = ""
        this.valicode = ""
        this.imgValicode = ""
        this.valicode = ""
        this.isPhoneErr = false
        this.isImgValicodeErr = ""
        this.isValicodeErr = false
        this.isPhoneNumErr = false
        this.isPasswordErr = false
        this.pwd = ""
        this.phoneNum = ""
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
            if(res.data.code === 1){
                this.isPhoneErr = true
                this.phoneErr = res.data.message
            }
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
      if(authcode.length === 4){
        this.$axios
          .post("/register/isAuthcodeValid", {
            authcode: authcode
          })
          .then(res => {
            this.isImgValicodeShow = false
            this.isValidcodeShow = true
            this.isImgValicodeErr = false
            this.startCount(res.data.time)
          })
      }
    },
    startCount (time) {
      this.timer = setInterval(()=>{
        this.countDown = String(time--)+'s'
        if(time==0){
          this.isCodeAgain = true
          clearInterval(this.timer)
        }
      },1000)
    },
    validateImgCodeBlur (val) {
      let reg = /^1[0-9]{10}$/
      let authcode = val
      let captcha = this.tool.cookie.get('captcha')
      if (authcode.trim()!=="" && authcode.length !==4) {
        this.isImgValicodeErr = true
      } else if(authcode.trim() === ""){
        this.isImgValicodeErr = false
      } else if(authcode!==captcha){
        this.isImgValicodeErr = true
      } else {
        this.isImgValicodeErr = false
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
        if(!this.valicode){
          this.isValicodeErr = true
        }
        if(!this.check){
          this.isValicodeErr = true
          this.codeErr = "请阅读并勾选协议"
        }
        if (res) {
            this.validatePhone(this.phone)
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
    login () {
      if (this.phoneNum.trim() === "") {
        this.isPhoneNumErr = true
      } else if (this.pwd.trim() === "") {
        this.isPasswordErr = true
      } else {
          this.$axios
          .post("/login", {
                username:this.phoneNum,
                password: this.pwd
          })
          .then(res => {
            if(res.data.code === 0) {
              this.username = this.tool.getPhone(res.data.data.username)
              this.isLogin = true
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('token_exp', new Date().getTime()+60*60*1000)
          
              this.$store.dispatch('setUser',{
                username:res.data.data.username,
                image:res.data.data.image
              })
              console.log(this.$store.state.username)
            } else if(res.data.code === 1) {
                this.isPasswordErr = true
                this.passwordErr = res.data.message
            }
          })
      }
    },
    signout () {
      localStorage.removeItem('token')
      localStorage.removeItem('token_exp')
      this.$axios
          .post("/signout", {
                username:this.username
          })
          .then(res => {
            if(res.data.code === 0) {
              location.reload()
            } else if(res.data.code === 1) {
            }
          })
    }
  },
  beforeDestory () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less">
@import "../assets/styles/_login.less";
</style>
