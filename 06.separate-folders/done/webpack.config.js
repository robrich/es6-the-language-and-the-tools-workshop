var path = require('path');

module.exports = {
  entry: './main.js',
  context: path.join(__dirname, 'src'), // where we start loading from
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/js'), // where we write it to
    publicPath: 'js/', // where the browser will load it from
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
