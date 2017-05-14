module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  externals: {
    jquery: "jQuery" // if I say `import $ from 'jquery'` then hand me the `jQuery` global variable
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
