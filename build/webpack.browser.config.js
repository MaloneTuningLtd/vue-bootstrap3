const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const { filename, moduleName } = require('./utils');

module.exports = merge(base, {
  output: {
    filename: `${filename}.js`,
    library: moduleName,
    libraryTarget: 'umd',
  },
});
