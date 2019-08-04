const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const conf = {
  entry: {
    main: './src/index.js',
    style: './src/index-style.js'
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
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path:  './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
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
  let production = options.mode === 'production'

  conf.devtool = production? false : 'source-map'

  return conf
}