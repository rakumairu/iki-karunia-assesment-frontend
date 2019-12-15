const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  configureWebpack: {
      plugins: [
        new BundleAnalyzerPlugin({
          // static, server, disabled
          analyzerMode: "disabled"
        })
      ]
  }
}