Separate folders
================

Often we'll have a folder for static assets -- www or public, or we'll have a build folder -- dist.  Then we have a source folder -- src.  Let's get Webpack to pull our source from the src folder and write the resulting bundle to dist/js.


Changes from the previous project:

1. This content is new in the `webpack.config.js` file:

```
  context: path.join(__dirname, 'src'), // where we start loading from
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/js'), // where we write it to
    publicPath: 'js/', // where the browser will load it from
  },
```


Try it out
----------

1. run `npm install` to load all the dependencies.

2. run `webpack` to build the bundle

3. open `index.html` in the browser

4. open the F12 developer tools
