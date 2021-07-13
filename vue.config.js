const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jeffery36.github.io/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
}
