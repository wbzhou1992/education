import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import tool from './assets/scripts/tool.js'
Vue.config.productionTip = false;
if(process.env.NODE_ENV === 'development'){
  Vue.use(VueResource)
}
// const dp = new DPlayer(options);
//设置axios为form-data
// axios.defaults.transformRequest = [function (data) {
//     let ret = ''
//     for (let it in data) {
//       ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
//     }
//     return ret.slice(0, ret.length - 1);

// }]
// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   config.headers.common['Authorization'] = 'Bearer ' + token;
//   return config;
// })
Vue.prototype.$axios = axios;
Vue.prototype.tool = tool;
Vue.use(vueSwiper);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
