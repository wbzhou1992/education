(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)r=o[u],i[r]&&m.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},n=[];function r(e){return o.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"ef50f919"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,s){a=i[e]=[t,s]});t.push(a[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(e),n=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+s+": "+n+")");r.type=s,r.request=n,a[1](r)}i[e]=void 0}};var l=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"0549":function(e,t,a){},"0623":function(e,t,a){},"1e4b":function(e,t,a){"use strict";var s=a("be85"),i=a("75e5"),n=(a("d44d"),a("2877")),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},"1fd1":function(e,t,a){"use strict";var s=a("4346"),i=a.n(s);i.a},"3d5f":function(e,t,a){},4346:function(e,t,a){},"4dc3":function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("vHeader"),a("router-view")],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"}),a("ul",{staticClass:"nav"},e._l(e.nav,function(t){return a("router-link",{key:t.name,attrs:{to:t.path,tag:"li","active-class":"active"}},[e._v(e._s(t.name))])}),1),e.username?a("ul",{staticClass:"login-not"},[a("li",[e._v(e._s(e.username))]),a("li",[a("img",{attrs:{src:e.image}})])]):a("ul",{staticClass:"login"},[a("router-link",{attrs:{to:"/home",tag:"li"}},[e._v("登录")]),a("router-link",{attrs:{to:"/home",tag:"li"}},[e._v("注册")])],1)])},o=[],c=a("cebc"),l=a("2f62"),u={name:"vheader",data:function(){return{isLogin:!1,nav:[{path:"/home",name:"首页"},{path:"/center",name:"课程中心"},{path:"/teach",name:"辅导教材"},{path:"/exam",name:"题库"},{path:"/live",name:"直播"},{path:"/about",name:"关于我们"}]}},created:function(){},computed:Object(c["a"])({},Object(l["b"])(["username","image"]))},d=u,m=(a("d350"),a("2877")),h=Object(m["a"])(d,r,o,!1,null,null,null),p=h.exports,v={name:"home",components:{vHeader:p}},g=v,f=(a("034f"),a("94fb"),Object(m["a"])(g,i,n,!1,null,null,null)),b=f.exports,w=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("login",{staticClass:"log"}),a("Swiper",{staticClass:"cf"})],1)},x=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("swiper",{ref:"mySwiper",staticClass:"swiper-wrap",attrs:{options:e.swiperOption}},[a("swiper-slide",{staticClass:"slide1"}),a("swiper-slide",{staticClass:"slide2"}),a("swiper-slide",{staticClass:"slide3"}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},E=[],k={name:"HelloWorld",data:function(){var e=this;return{imgIndex:1,swiperOption:{notNextTick:!0,loop:!0,initialSlide:0,autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,direction:"horizontal",grabCursor:!0,on:{slideChangeTransitionStart:function(){e.imgIndex=this.realIndex-1}},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"}}}}},P=k,O=(a("cb6e"),Object(m["a"])(P,_,E,!1,null,null,null)),j=O.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.username?a("div",{staticClass:"success-box"},[a("p",{staticClass:"welcome"},[e._v("\n    欢迎来到学习网\n  ")]),a("div",{staticClass:"success"},[a("p",[e._v("您当前登陆的账户:")]),a("p",[e._v(e._s(e.username))]),a("a",{attrs:{href:""}},[e._v("发现课程")]),a("p",{on:{click:e.signout}},[e._v("安全退出")])])]):a("div",{staticClass:"login-box"},[a("ul",{staticClass:"tab cf"},e._l(e.tabs,function(t,s){return a("li",{key:s,class:e.current==s?"active":"",on:{click:function(t){return e.change(s)}}},[e._v(e._s(t.name))])}),0),0===e.current?a("div",{staticClass:"login-tab"},[a("login")],1):e._e(),1===e.current?a("div",{staticClass:"register-tab"},[a("register")],1):e._e()])])},I=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"box-cont"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("邮箱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"email",placeholder:"注册邮箱"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isPhoneErr,expression:"isPhoneErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.phoneErr))])])]),a("div",{staticClass:"box-cont"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"设置登录密码"},domProps:{value:e.password},on:{blur:function(t){return e.validatePwd(t.target.value)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("i",{staticClass:"open-eyes close",on:{click:function(t){return e.eyesSwitch(t)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isPwdErr,expression:"isPwdErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.pwdErr))])])]),e.isImgValicodeShow?a("div",{staticClass:"box-cont"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("验证码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.imgValicode,expression:"imgValicode"}],attrs:{placeholder:"图形验证码",disabled:e.isPhoneErr},domProps:{value:e.imgValicode},on:{input:[function(t){t.target.composing||(e.imgValicode=t.target.value)},function(t){return e.validateImgCode(t.target.value)}],blur:function(t){return e.validateImgCodeBlur(t.target.value)}}}),a("a",{staticClass:"validimg"},[a("span",{domProps:{innerHTML:e._s(e.imgCodeDom)},on:{click:e.refreshImgCode}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isImgValicodeErr,expression:"isImgValicodeErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.imgCodeErr))])])]):e._e(),e.isValidcodeShow?a("div",{staticClass:"box-cont validcode"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("验证码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.valicode,expression:"valicode"}],attrs:{placeholder:"短信验证码"},domProps:{value:e.valicode},on:{blur:function(t){return e.validateCode(t.target.value)},input:function(t){t.target.composing||(e.valicode=t.target.value)}}}),a("a",{staticClass:"validimg"},[e.isCodeAgain?a("span",{staticClass:"again",on:{click:e.getCodeAgain}},[e._v("重新获取")]):a("span",{staticClass:"count"},[e._v(e._s(e.countDown))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isValicodeErr,expression:"isValicodeErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.codeErr))])])]):e._e(),a("div",{staticClass:"agree cf"},[a("a",{staticClass:"checkstatus",on:{click:e.check}},[e.isCheck?a("span",{staticClass:"check"}):a("span",{staticClass:"check not"})]),e._m(0)]),a("div",{class:e.isValidcodeShow?"register":"register dis",on:{click:e.register}},[e._v("免费注册")])])},V=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"agreement"},[e._v("\n        我已阅读并同意\n        "),a("a",{attrs:{href:""}},[e._v("《注册服务协议》")])])}],N=(a("c5f6"),a("bd86")),$={name:"home",data:function(){var e;return e={phone:"",password:"",valicode:"",imgValicode:""},Object(N["a"])(e,"valicode",""),Object(N["a"])(e,"isCheck",!1),Object(N["a"])(e,"isValidcodeShow",!1),Object(N["a"])(e,"isImgValicodeShow",!0),Object(N["a"])(e,"phoneErr","邮箱格式错误"),Object(N["a"])(e,"imgCodeErr","验证码错误"),Object(N["a"])(e,"codeErr","验证码错误"),Object(N["a"])(e,"pwdErr","密码输入错误"),Object(N["a"])(e,"isPhoneErr",!1),Object(N["a"])(e,"isPwdErr",!1),Object(N["a"])(e,"isImgValicodeErr",!1),Object(N["a"])(e,"isValicodeErr",!1),Object(N["a"])(e,"isPhoneErr",!1),Object(N["a"])(e,"imgCodeDom",""),Object(N["a"])(e,"countDown","112s"),Object(N["a"])(e,"isCodeAgain",!1),Object(N["a"])(e,"src",""),Object(N["a"])(e,"timer",null),e},created:function(){this.username=this.tool.cookie.get("user"),this.username?this.isLogin=!0:(this.isLogin=!1,this.refreshImgCode())},methods:{refreshImgCode:function(){var e=this;this.$axios.get("/register/authcode",{t:Math.random()}).then(function(t){e.imgCodeDom=t.data.img})},eyesSwitch:function(e){e.target.className=-1==e.target.className.indexOf("close")?"open-eyes close":"open-eyes",-1==e.target.className.indexOf("close")?e.target.previousElementSibling.setAttribute("type","text"):e.target.previousElementSibling.setAttribute("type","password")},validatePhone:function(e){var t=this,a=/^1[0-9]{10}$/,s=e;""!==s.trim()&&a.test(Number(s))?(this.isPhoneErr=!1,this.$axios.post("/register/isUserNameValid",{username:s}).then(function(e){1===e.data.code&&(t.isPhoneErr=!0,t.phoneErr=e.data.message)})):""===s.trim()?this.isPhoneErr=!1:this.isPhoneErr=!0},validatePwd:function(e){this.isPwdErr=!1},validateImgCode:function(e){var t=this,a=e;this.tool.cookie.get("captcha");4===a.length&&this.$axios.post("/register/isAuthcodeValid",{authcode:a}).then(function(e){0===e.data.code&&(t.isImgValicodeShow=!1,t.isValidcodeShow=!0,t.isImgValicodeErr=!1,t.sendEmail(),t.startCount(e.data.time))})},validateImgCodeBlur:function(e){var t=e,a=this.tool.cookie.get("captcha");""!==t.trim()&&4!==t.length?this.isImgValicodeErr=!0:""===t.trim()?this.isImgValicodeErr=!1:this.isImgValicodeErr=t!==a},validateCode:function(e){1!==Number(e)&&console.log("err")},getCodeAgain:function(){var e=this;this.$axios.get("/register/authcode",{username:this.phone}).then(function(t){e.imgCodeDom=t.data.img})},check:function(){this.isCheck=!this.isCheck},register:function(){var e=this;if(this.isValidcodeShow){var t=this.isCheck&&this.imgValicode&&this.phone&&this.password&&this.valicode;!this.isPhoneErr&&!this.isPwdErr&&!this.isImgValicodeErr&&this.isPhoneErr;this.valicode||(this.isValicodeErr=!0),this.check||(this.isValicodeErr=!0,this.codeErr="请阅读并勾选协议"),t?this.$axios.post("/register",{authcode:this.imgValicode,username:this.phone,password:this.password,smscode:this.valicode}).then(function(t){console.log(t.data),0===t.data.code&&(localStorage.setItem("token",t.data.token),localStorage.setItem("token_exp",(new Date).getTime()+36e5),e.$store.dispatch("setUser",{username:t.data.data.username,image:t.data.data.image}))}):(this.phone||(this.isPhoneErr=!0),this.imgValicode||(this.isImgValicodeErr=!0),this.password||(this.isPwdErr=!0))}},sendSms:function(){var e=this;this.$axios.post("/register/sendSms",{authcode:this.authcode,username:this.phone}).then(function(t){e.startCount(t.data.time)})},sendEmail:function(){var e=this;this.$axios.post("/register/sendemail",{authcode:this.authcode,username:this.phone}).then(function(t){0===t.data.code||(e.isValicodeErr=!0)})},startCount:function(e){var t=this;this.timer=setInterval(function(){t.countDown=String(e--)+"s",0==e&&(t.isCodeAgain=!0,clearInterval(t.timer))},1e3)}},beforeDestory:function(){clearInterval(this.timer)}},D=$,T=(a("7d57"),Object(m["a"])(D,S,V,!1,null,null,null)),A=T.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reg"},[a("div",{staticClass:"box-cont"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("手机号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNum,expression:"phoneNum"}],attrs:{placeholder:"输入手机号"},domProps:{value:e.phoneNum},on:{input:function(t){t.target.composing||(e.phoneNum=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isPhoneNumErr,expression:"isPhoneNumErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.phoneNumErr))])])]),a("div",{staticClass:"box-cont"},[a("div",{staticClass:"box"},[a("span",{staticClass:"text"},[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"输入密码"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isPasswordErr,expression:"isPasswordErr"}],staticClass:"err-box"},[a("i",{staticClass:"err-icon"}),a("span",{staticClass:"err"},[e._v(e._s(e.passwordErr))])])]),a("div",{staticClass:"log-rightnow",on:{click:e.login}},[e._v("立即登录")])])},M=[],L={name:"home",data:function(){return{phoneNum:"",pwd:"",isPhoneNumErr:!1,isPasswordErr:!1,passwordErr:"请输入密码",phoneNumErr:"请输入手机号"}},methods:{login:function(){var e=this;""===this.phoneNum.trim()?this.isPhoneNumErr=!0:""===this.pwd.trim()?this.isPasswordErr=!0:this.$axios.post("/login",{username:this.phoneNum,password:this.pwd}).then(function(t){0===t.data.code?(e.username=e.tool.getPhone(t.data.data.username),localStorage.setItem("token",t.data.token),localStorage.setItem("token_exp",(new Date).getTime()+36e5),e.$store.dispatch("setUser",{username:t.data.data.username,image:t.data.data.image}),console.log(e.$store.state.username)):1===t.data.code&&(e.isPasswordErr=!0,e.passwordErr=t.data.message)})}}},B=L,H=(a("d6c0"),Object(m["a"])(B,U,M,!1,null,null,null)),R=H.exports,q={name:"homelogin",data:function(){return{tabs:[{name:"免费注册"},{name:"立即登录"}],current:0,user:"",isLogin:!1}},methods:{change:function(e){this.current=e},signout:function(){localStorage.removeItem("token"),localStorage.removeItem("token_exp"),this.$axios.post("/signout",{username:this.user}).then(function(e){0===e.data.code?location.reload():e.data.code})}},computed:Object(c["a"])({},Object(l["b"])(["username"])),components:{login:A,register:R}},z=q,G=(a("1fd1"),Object(m["a"])(z,y,I,!1,null,null,null)),J=G.exports,W={name:"home",components:{Swiper:j,login:J}},F=W,K=(a("de16"),Object(m["a"])(F,C,x,!1,null,null,null)),Q=K.exports,X=a("1e4b");s["a"].use(w["a"]);var Y=new w["a"]({routes:[{path:"/",name:"",redirect:"/home",component:X["default"],children:[{path:"/home",meta:{title:"首页"},component:Q}]},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Z=(a("28a5"),a("a481"),{getPhone:function(e){return e.replace(/(\d{3})\d{5}(\d{3})/g,"$1*****$2")},cookie:{add:function(e,t,a,s){if(a){var i=new Date;i.setDate(i.getDate()+a),document.cookie=e+"="+t+";path=/;expires="+i.toGMTString()+";domain="+(s||"")}},get:function(e){for(var t=document.cookie.split("; "),a=0,s=t.length;a<s;a++){var i=t[a].split("=");if(i[0]===e)return t[a].replace(i[0]+"=","")}return""},del:function(e,t){document.cookie=e+"=;path=/;expires="+new Date(0).toGMTString()+";domain="+(t||"")},getBase:function(e){for(var t=document.cookie.split("; "),a=0,s=t.length;a<s;a++){var i=t[a].split("=");if(i[0]===e)return 11===i[1].length?i[1].substr(0,3)+"*****"+i[1].substr(-3):Base64.decode(decodeURIComponent(t[a].replace(i[0]+"=","")))}return""}}});s["a"].use(l["a"]);var ee=new l["a"].Store({state:{username:Z.cookie.get("user"),image:Z.cookie.get("image")},getters:{},mutations:{setUser:function(e,t){e.username=t.username,e.image=t.image}},actions:{setUser:function(e,t){e.commit("setUser",t)}}}),te=a("6fe8"),ae=a.n(te),se=(a("9849"),a("7f43")),ie=a.n(se);s["a"].config.productionTip=!1,ie.a.defaults.transformRequest=[function(e){var t="";for(var a in e)t+="".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(e[a]),"&");return t.slice(0,t.length-1)}],ie.a.interceptors.request.use(function(e){var t=localStorage.getItem("token");return e.headers.common["Authorization"]="Bearer "+t,e}),s["a"].prototype.$axios=ie.a,s["a"].prototype.tool=Z,s["a"].use(ae.a),s["a"].config.productionTip=!1,new s["a"]({router:Y,store:ee,render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,a){},"75e5":function(e,t,a){"use strict";var s=a("4dc3"),i=a.n(s);t["default"]=i.a},"7d57":function(e,t,a){"use strict";var s=a("e458"),i=a.n(s);i.a},"94fb":function(e,t,a){"use strict";var s=a("3d5f"),i=a.n(s);i.a},"974e":function(e,t,a){},b9ea:function(e,t,a){},be85:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},beda:function(e,t,a){},cb6e:function(e,t,a){"use strict";var s=a("b9ea"),i=a.n(s);i.a},d350:function(e,t,a){"use strict";var s=a("0549"),i=a.n(s);i.a},d44d:function(e,t,a){"use strict";var s=a("beda"),i=a.n(s);i.a},d6c0:function(e,t,a){"use strict";var s=a("974e"),i=a.n(s);i.a},de16:function(e,t,a){"use strict";var s=a("0623"),i=a.n(s);i.a},e458:function(e,t,a){}});
//# sourceMappingURL=app.fad5174d.js.map