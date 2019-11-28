module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://121.196.218.131:8888/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
