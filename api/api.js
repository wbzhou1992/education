
import {get,post} from './service.js'
const baseurl = '/'

export default {
    register: data => post("/register", data),
    login: data => post("/login", data),
    signout: data => post("/signout", data),
    resetpwd: data => post("/resetpwd", data),
    isCaptchaValid: data => post("/register/isCaptchaValid", data),
    getCaptcha:() => get("/auth/captcha"),
    sendEmailAuthcode:data => get("/auth/sendEmailAuthcode",data),
    isUsernameValid: data => post("/register/isUsernameValid", data)
}