Weird External Libraries
========================

Some JavaScript libraries don't play very well with the CommonJS format Webpack transpiles from.  In this case, we have a few solutions:

1. the `externals` section says "treat this global variable as a module".

2. use the window object to reference the variable, and tell ESLint about it.  Note that because we're thinking in CommonJS, we can't just assume it's a global variable.


In this example
---------------

jQuery was included in our page already.  (Maybe in the page template?)  So no need to include it again in the bundle.  We'll use `externals` for this.

Handlebars doesn't play well with module loaders, so we'll use `window.Handlebars` to access this library included with a `script` tag.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack` to build the bundle

3. open `index.html` in the browser


Global Variables
----------------

Not recomended, but if you want Webpack to expose global variables, look at the [`ProvidePlugin`](https://webpack.github.io/docs/shimming-modules.html).

[http://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack](http://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack) discusses a dozen other strategies for handling external libraries and in particular jQuery plugins.
