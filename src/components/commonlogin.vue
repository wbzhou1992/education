<template>
  <div class="login">
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
          <input
            v-model="password"
            type="password"
            @blur="validatePwd($event.target.value)"
            placeholder="设置登录密码"
          >
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
          <input
            v-model="imgValicode"
            @input="validateImgCode($event.target.value)"
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
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      phone: "",
      password: "",
      valicode: "",
      imgValicode: "",
      valicode: "",
      isCheck: false,
      isValidcodeShow: false,
      isImgValicodeShow: true,
      phoneErr: "手机号格式错误",
      imgCodeErr: "验证码错误",
      codeErr: "验证码错误",
      pwdErr: "密码输入错误",
      isPhoneErr: false,
      isPwdErr: false,
      isImgValicodeErr: false,
      isValicodeErr: false,
      isPhoneErr: false,
      imgCodeDom: "",
      countDown: "112s",
      isCodeAgain: false,
      src: "",
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
    refreshImgCode () {
        // let t = Math.random().toFixed(12)
        // let src = '/register/captcha.png?t=' + t
        // this.src = src
        this.$http
        .get("/register/authcode",{
            t:Math.random()
        })
        .then(res => {
            this.imgCodeDom = res.data.img
        })
    },
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
    validatePhone(val) {
      let reg = /^1[0-9]{10}$/;
      let phone = val;
      if (phone.trim() !== "" && reg.test(Number(phone))) {
        this.isPhoneErr = false;
        this.$axios
          .post("/register/isUserNameValid", {
            username: phone
          })
          .then(res => {
            if (res.data.code === 1) {
              this.isPhoneErr = true;
              this.phoneErr = res.data.message;
            }
          });
      } else if (phone.trim() === "") {
        this.isPhoneErr = false;
      } else {
        this.isPhoneErr = true;
      }
    },
    validatePwd(val) {
      this.isPwdErr = false;
    },
    validateImgCode(val) {
      let reg = /^1[0-9]{10}$/;
      let authcode = val;
      let captcha = this.tool.cookie.get("captcha");
      if (authcode.length === 4) {
        this.$axios
          .post("/register/isAuthcodeValid", {
            authcode: authcode
          })
          .then(res => {
            this.isImgValicodeShow = false;
            this.isValidcodeShow = true;
            this.isImgValicodeErr = false;
            this.sendSms();
          });
      }
    },
    validateImgCodeBlur(val) {
      let reg = /^1[0-9]{10}$/;
      let authcode = val;
      let captcha = this.tool.cookie.get("captcha");
      if (authcode.trim() !== "" && authcode.length !== 4) {
        this.isImgValicodeErr = true;
      } else if (authcode.trim() === "") {
        this.isImgValicodeErr = false;
      } else if (authcode !== captcha) {
        this.isImgValicodeErr = true;
      } else {
        this.isImgValicodeErr = false;
      }
    },
    validateCode(val) {
      if (Number(val) !== 1) {
        console.log("err");
      }
    },
    getCodeAgain() {
      this.$axios
        .get("/api/register/authcode", {
          username: this.phone
        })
        .then(res => {
          this.imgCodeDom = res.data.img;
        });
    },
    check() {
      this.isCheck = !this.isCheck;
    },
    register() {
      let res =
        this.isCheck &&
        this.imgValicode &&
        this.phone &&
        this.password &&
        this.valicode;
      let valid =
        !this.isPhoneErr &&
        !this.isPwdErr &&
        !this.isImgValicodeErr &&
        !this.isPhoneErr;
      if (!this.valicode) {
        this.isValicodeErr = true;
      }
      if (!this.check) {
        this.isValicodeErr = true;
        this.codeErr = "请阅读并勾选协议";
      }
      if (res) {
        this.validatePhone(this.phone);
        this.$axios
          .post("/register", {
            authcode: this.imgValicode,
            username: this.phone,
            password: this.password,
            smscode: this.valicode
          })
          .then(res => {
            console.log(res.data);
          });
      } else {
        if (!this.phone) {
          this.isPhoneErr = true;
        }
        if (!this.imgValicode) {
          this.isImgValicodeErr = true;
        }
        if (!this.password) {
          this.isPwdErr = true;
        }
      }
    },
    sendSms () {
      this.$axios
        .post("/register/sendSms", {
          authcode: this.authcode,
          username: this.phone
        })
        .then(res => {
          this.startCount(res.data.time)
        })
    },
    startCount (time) {
      this.timer = setInterval(()=>{
        this.countDown = String(time--)+'s'
        if(time==0){
          this.isCodeAgain = true
          clearInterval(this.timer)
        }
      },1000)
    }
  },
  beforeDestory () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less">

</style>
