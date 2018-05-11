const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const resolve = file => path.resolve(__dirname, file);

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'vuebootstrap3.js',
    library: 'VueBootstrap3',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve('../dist'),
    publicPath: '/dist/',
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue',
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
});
