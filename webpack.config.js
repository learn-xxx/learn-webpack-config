const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')

// 开发配置
const devConfig = {
  // 打包模式：development（开发模式）、production（生产模式）、none（无模式）
  mode: 'development',
  devServer: {
    static: 'public',
    // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录（该属性似乎不是正确的属性）
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
  },
}

const buildConfig = {
  //  生产环境下会开启tree-shaking和代码压缩
  mode: 'production',
}

// 公共配置
const config = {
  // 入口文件，可以是字符串也可以是数组或者对象
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    // 文件名，当多入口文件时，[name]可以设置的名称命名，默认为main，另外还有[contenthash]等占位符，
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // 处理vue文件
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // 处理js兼容
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // 使用babel预设
                '@babel/preset-env'
              ],
            }
          }
        ]
      },
      {
        test: /\.txt|md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(s[ac]|c)ss$/i, // 匹配sass/scss/css文件
        // 顺序从右到左
        // 使用style-loader把css-loader处理完的内容通过style标签插入到head标签中
        // 使用postcss-loader对css进行兼容性处理
        // MiniCssExtractPlugin.loader是把css提取到单独的css文件中，然后通过link标签引入文件

        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']

      },
      {
        test: /\.less$/i, // 匹配less文件
        // 顺序从右到左
        // 使用style-loader把css-loader处理完的内容通过style标签插入到head标签中
        // 使用postcss-loader对css进行兼容性处理
        // use: ['style-loader','css-loader','postcss-loader','less-loader']
        // MiniCssExtractPlugin.loader是把css提取到单独的css文件中，然后通过link标签引入文件
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      // 使用webpack5自带资源模块
      {
        test: /\.(png|jpe?g|gif)$/,
        // asset 会根据文件大小来选择使用哪种类型
        // 当文件小于 8 KB（默认） 的时候会使用 asset/inline
        // 否则会使用 asset/resource
        type: 'asset',
        generator: {
          filename: "[name][hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 // 超过50kb 不转 base64
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb 不转 base64
          }
        }
      },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,  // 匹配字体文件
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: 'fonts/[name][hash:8].[ext]', // 体积大于 10KB 打包到 fonts 目录下 
      //         limit: 10 * 1024,
      //       } 
      //     }
      //   ]
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       // 图片大小小于8kb的时候，会转换成base64格式
      //       limit: 5 * 1024,
      //       // placeholder 占位符 [name] -> 源资源模块的名称
      //       // [ext] 源资源模块的后缀
      //       name: "[name]_[hash:8].[ext]",
      //       //打包后的存放位置，相对于打包后的位置
      //       outputPath: "./images",
      //       // 打包后文件的 url，相对于打包后的位置，maybe可以用于拼接成网络链接，用cdn加速获取
      //       publicPath: './images',
      //     }
      //   },{
      //     loader: 'img-loader',
      //   }]
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // placeholder 占位符 [name] -> 源资源模块的名称
      //       // [ext] 源资源模块的后缀
      //       name: "[name]_[hash:8].[ext]",
      //       //打包后的存放位置，相对于打包后的位置
      //       outputPath: "./images",
      //       // 打包后文件的 url，相对于打包后的位置，maybe可以用于拼接成网络链接，用cdn加速获取
      //       publicPath: './images',
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    // 生成html文件，并且把打包好的模块文件引入
    new HtmlWebpackPlugin({
      // 网页标题
      title: 'webpack-demo',
      // 打包后的名字
      filename: 'index.html',
      // 使用模板文件
      template: './src/index.html'
    }),
    // 自动清空打包文件夹
    new CleanWebpackPlugin(),
    // 提取所有的 CSS 到一个文件中，在css的loader处理中也需要配置
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // vue-loader的配置
    new VueLoaderPlugin()
  ]
}

// 不直接导出配置，可以根据不同的环境，导出不同的配置
module.exports = (env, argv) => {
  return Object.assign(config, argv.mode === 'production' ? buildConfig : devConfig);
}
