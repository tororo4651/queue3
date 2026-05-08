const path = require('path');
const { merge } = require('webpack-merge');
// webpack-mergeプラグインは、webpack をインストールした時に一緒にインストールされるようなので、特に個別にインストールする必要はありません。
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].js',  // ？ 現在、不可。
  },
  devServer: {
    open: true,
    port: 9000,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    watchFiles: ['./src/**/*'],
  },
  // watch: true,
  // ？ serveコマンドを実行した場合は、監視モードがデフォルトで有効になっているので、watch は削って良い。
  devtool: 'source-map',
  module: {
    rules: [
      {
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
});
