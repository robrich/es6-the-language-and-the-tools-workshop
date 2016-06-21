Webpack Sourcemaps
==================

In this section we'll get Webpack to generate sourcemaps, a link between the original source and the compiled output.  This lets the browser pretend to debug our ES6 code.

Changes from the previous project:

1. This content is new in the `webpack.config.js` file:

```
  output: {
    filename: 'bundle.js',
    // use file urls for source-map file, see http://stackoverflow.com/questions/34185748/how-to-make-webpack-sourcemap-to-original-files/
    devtoolModuleFilenameTemplate: function(info){
      return "file:///"+encodeURI(info.absoluteResourcePath);
    }
  },
  devtool: 'source-map',
```

`devtool` tells Webpack to generate the sourcemap file.

Since we're not using a real web server, we shim the file path to `file://...` so the browser can load it correctly.

2. We're using `.babelrc` to specify the babel presets instead of the `presets` section in `webpack.config.js`.  Either is fine, and they produce identical results.  The benefit of a `.babelrc` is other tools that use babel like linting tools will also use these presets.


Try it out
----------

1. run `npm install` to load all the dependencies.

2. run `webpack` to build the bundle

3. open `index.html` in the browser

4. open the F12 developer tools

5. in the sources tab, set a breakpoint in main.js

6. reload the page

You're now debugging your ES6 code in an ES5 browser!

You can use the standard F10 and F11 commands to step over and into functions.  See also [https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts)
