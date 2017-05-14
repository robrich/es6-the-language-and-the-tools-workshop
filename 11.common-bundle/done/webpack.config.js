var webpack = require('webpack');

module.exports = {
  entry: {
    hello: './hello',
    goodbye: './goodbye',
    common: ['jquery']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'common'})
  ]
};
