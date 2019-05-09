
const proxy = {
    '/register':{
        changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite:{
            '^/register':'/api/register'
        }
    }
}
module.exports = {
  assetsDir: 'static',
  chainWebpack: config => {
    config.devServer.proxy(proxy)
  }
}
