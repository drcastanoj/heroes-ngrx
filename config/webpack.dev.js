var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');
var directorio = path.resolve(__dirname, '../');
module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: directorio + '/src/app',
    publicPath: 'http://localhost:5000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }

});