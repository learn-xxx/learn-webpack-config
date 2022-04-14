const HtmlWebpackPlugin = require('html-webpack-plugin')

// 1）定义不同的打包类型
const allModes = [
  'eval',
  'source-map',
  'eval-source-map',
  'cheap-source-map',
  'inline-source-map',
  'eval-cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'eval-cheap-module-source-map',
  'inline-cheap-module-source-map',
  'hidden-source-map',
  'nosources-source-map'
]

// 2）循环不同 SourceMap 模式，生成多个打包入口
module.exports = allModes.map(item => {
  return {
    devtool: item,
    mode: 'none',
    entry: './src-map/index.js',
    output: {
      filename: `js/${item}.js`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      // 3）输出到不同的页面
      new HtmlWebpackPlugin({
        filename: `${item}.html`
      })
    ]
  }
})
