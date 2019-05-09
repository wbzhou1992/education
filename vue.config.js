
const proxy = {
    '/register':{
        changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite:{
            '^/register':'/api/register'
        }
    },
    '/login':{
      changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite:{
            '^/login':'/api/login'
        }
    },
    '/info':{
      changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite:{
            '^/info':'/api/info'
        }
    }
}
module.exports = {
  assetsDir: 'static',
  chainWebpack: config => {
    config.devServer.proxy(proxy)
  }
}
