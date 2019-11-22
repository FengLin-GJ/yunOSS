module.exports = {
  publicPath: './',
  devServer: {
  host: '0.0.0.0',
  port: 8080,
    proxy: {
      '/api': {
        // target: 'http://121.196.218.131:8888/',
        target: 'http://localhost:8888/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
