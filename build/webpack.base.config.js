const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { banner, filename, version } = require('./utils');
const resolve = file => path.resolve(__dirname, file);

module.exports = {
  mode: 'production',
  output: {
    path: resolve('../dist'),
    filename: `${filename}.common.js`,
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      '@': resolve('../src'),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          resolve('../src'),
          // resolve('../test'),
        ],
      },
    ],
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  plugins: [
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(version),
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.BannerPlugin({ banner, raw: true, entryOnly: true }),
    new FriendlyErrorsWebpackPlugin({ clearConsole: true }),
  ],
};
