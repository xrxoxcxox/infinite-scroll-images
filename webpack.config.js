const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// HTMLファイルのビルド設定
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html',
});
module.exports = {
  // 依存関係解決の起点となる資産を指定します。
  entry: path.join(__dirname, 'examples/src/index.jsx'),
  // Babelのトランスパイル対象資産を指定します。
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|ico)$/,
        use: 'url-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'examples/dist'),
    filename: 'bundle.js',
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
  // 開発用Webサーバのポートを指定します。
  devServer: {
    port: 3001,
  },
};
