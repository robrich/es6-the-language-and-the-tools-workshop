module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    // use file urls for source-map file, see http://stackoverflow.com/questions/34185748/how-to-make-webpack-sourcemap-to-original-files/
    devtoolModuleFilenameTemplate: function(info){
      return "file:///"+encodeURI(info.absoluteResourcePath);
    }
  },
  devtool: '#source-map',
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
