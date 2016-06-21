var webpack = require('webpack');

module.exports = {
  entry: {
    hello: './hello',
    goodbye: './goodbye',
    common: ['jquery'],
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'common'})
  ]
};
