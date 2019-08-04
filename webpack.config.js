const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const conf = {
  entry: {
    main: './src/index.js',
    style: './src/index-css.js'
  },

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: 'dist/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },  
  
  devServer: {
    overlay: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production? false : 'source-map';  
  return conf;
}