Class and Promise
=================

`class` and `Promise` are two new features to ES6.  `class` is shimmed in by Babel, but `Promise` must be shimmed in by a polyfill if your browser doesn't support it.  See [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/) and [http://caniuse.com/#feat=promises](http://caniuse.com/#feat=promises).  Spoiler: every evergreen browser except IE.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack webpack.config` to build the bundle

3. open `index.html` in the browser
