var isProd = true;

if (isProd) {
  module.exports = require('./webpack.prod.config');
} else {
  module.exports = require('./webpack.dev.config');
}
