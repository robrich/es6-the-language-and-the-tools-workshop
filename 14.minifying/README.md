Webpack for Production
======================

When we go to production, we want our JavaScript bundles to be as small as possible so they'll download faster.  In this section, we'll use uglify to minify the JavaScript.

Changes from the previous project:

1. For the production config, we rename `webpack.config.js` to `webpack.prod.config.js` and `webpack.dev.config.js`.  If you have a good trigger for "what does prod mean" you can create a `webpack.config.js` that will conditionally load either.

2. This content is new in the `webpack.prod.config.js` file:

```
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
```

and `var webpack = require('webpack');` at the top.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack webpack.prod.config` to build the minified bundle

3. open `index.html` in the browser

4. open the F12 developer tools

5. in the sources tab, look at bundle.js

6. to run the unminified bundle, and watch for changes, run `webpack webpack.dev.config.js --watch`
