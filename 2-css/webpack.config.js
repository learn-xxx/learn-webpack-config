module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename:'[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}