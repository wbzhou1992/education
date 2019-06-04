const proxy = {}

const arrProxy = ['/register', '/login', '/info','/signout','/resetpwd','/auth']
let isProduction = process.env.NODE_ENV === 'production' ? true :false
const cdn = {
  js: [ '<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>',
  '<script src="https://cdn.bootcss.com/vue-resource/1.5.1/vue-resource.min.js"></script>',
  '<script src="https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js"></script>',
  '<script src="https://cdn.bootcss.com/vue-router/3.0.6/vue-router.min.js"></script>']
}
arrProxy.forEach((item, i) => {
  proxy[item] = {
    changeOrigin: true,
    target: 'http://localhost:3000',
    secure: false,
    pathRewrite: {}
  }
  proxy[item].pathRewrite[item] = '/api' + item
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './':'/',
  assetsDir: 'static',
  chainWebpack: config => {
    config.devServer.proxy(proxy)
    if(isProduction){
      config.plugin('html')
      .tap(args=>{
        args[0].cdn = cdn
        return args
      })
    }
  },
  configureWebpack: config => {
    if(isProduction){
      config.externals = {
        'vue':'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'vue-resource': 'VueResource'
      }
    }
  }
}
