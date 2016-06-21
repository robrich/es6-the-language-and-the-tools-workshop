Development Time
=================

When developing, it can be a pain to save, go run `webpack`, then reload the browser.  Here we'll look at two elegant tools that make it simpler: `watch` and `noErrorsPlugin`.


`watch`
-------

When we run `webpack --watch` it will monitor files in the current directory, and when they change, it'll reload.

`noErrorsPlugin`
----------------

When we have syntax errors in our code, watch can either crash or write garbage to the `bundle.js` file.  `noErrorsPlugin` handles errors and ensures that nothing happens instead.


Changes from the previous project:

1. This content is new in the `webpack.config.js` file:

```
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
```

and `var webpack = require('webpack');` at the top.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack --watch` to build the bundle

3. open `index.html` in the browser

4. change some code and save it

5. push refresh in the browser

Nice! We didn't need to re-run webpack.
