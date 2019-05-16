import axios from 'axios'
import router from '../src/router';
const service = axios.create({
    timeout: 30000
})
axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
    }
    return ret.slice(0, ret.length - 1);

}]
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config
},err=>{
    Promise.reject(err)
})
service.interceptors.response.use(response=>{
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
},err=>{
    if(err.response && err.response.status == 404){
        router.push('/demo')
    }
    return Promise.reject(err.response)
})
export function get(url,params = {}){
    params.t = new Date().getTime()
    return service({
        url:url,
        method:'get',
        headers:{},
        params
    })
}
export function post(url,data={}){
    let obj = {
        url:url,
        method:'post',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        data:data
    }
    obj.data = JSON.stringify(data)
    return service(obj)
}
export {
    service
}