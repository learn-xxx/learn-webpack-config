const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:'development',
  devServer:{
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.ts$/,
        loader:'ts-loader'
      },
     {
        test: /\.(png|jpg|webp)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin(),
    new VueLoaderPlugin()
  ],
}