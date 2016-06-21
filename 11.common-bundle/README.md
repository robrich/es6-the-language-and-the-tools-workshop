Multiple Entry Points with a common lib
=======================================

If you have a lot of things that many pages share, move those pieces to a common library.

Changes from the previous project:

1. This content is new in the `webpack.config.js` file:

```
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'common'})
  ]
```

and `var webpack = require('webpack');` at the top.  (Yes, webpack.config.js is an ES5 file.)

2. This project now depends on `webpack` as a `devDependency` in `package.json`.

3. So we'd only make one copy of jQuery, we added a `common` section in `entry`:

```
  entry: {
    hello: './hello',
    goodbye: './goodbye',
    common: ['jquery'],
  },
```


Try it out
----------

1. run `npm install` to load all the dependencies.

2. run `webpack` to build the bundle

3. open `index.html` in the browser

4. open the F12 developer tools

5. click through to the pages

6. see the results in the console window
