const path = require('path');

const conf = {
  entry: {
    main: './src/index.js',
    mainStyle: './src/css/style.css'
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
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },  
  
  devServer: {
    overlay: true
  },
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production? false : 'source-map';  
  return conf;
}