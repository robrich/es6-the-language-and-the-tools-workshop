Multiple Entry Points
=====================

If you have only one SPA in your app, the existing setup works great.  If you have more than one page and need a SPA for each section, you'll need to configure Webpack for multiple entry points.

Changes from the previous project:

1. This content is new in the `webpack.config.js` file:

```
  entry: {
    'hello': './hello',
    'goodbye': './goodbye'
  },
  output: {
    filename: '[name].bundle.js'
  },
```

`[name]` is short-hand for "the name of the entry bundle", and `entry` is now a JSON object where the key is the bundle name, and the value is the starting filename.


Try it out
----------

1. run `npm install` to load all the dependencies.

2. run `webpack` to build the bundle

3. open `index.html` in the browser

4. open the F12 developer tools

5. click through to the pages

6. see the results in the console window
