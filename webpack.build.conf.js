const merge = require('webpack-merge')
const baseWebpackConfig = reguire('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production'
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})