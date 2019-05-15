const proxy = {}

const arrProxy = ['/register', '/login', '/info','/signout','/resetpwd','/auth']

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
  assetsDir: 'static',
  chainWebpack: config => {
    config.devServer.proxy(proxy)
  }
}
