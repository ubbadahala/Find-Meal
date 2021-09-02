const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', 'bundle.json'),
      name: 'module_bundle'
    })
  ]
})
