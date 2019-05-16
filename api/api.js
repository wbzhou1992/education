
import {get,post} from './service.js'

export default {
    register: data => post("/register", data),
    login: data => post("/login", data),
    signout: data => post("/signout", data),
    resetpwd: data => post("/resetpwd", data),
    isCaptchaValid: data => post("/register/isCaptchaValid", data),
    sendemail: data => post("/auth/sendemail", data),
    isUsernameValid: data => post("/register/isUsernameValid", data),
    getCaptcha:() => get("/auth/captcha")
}