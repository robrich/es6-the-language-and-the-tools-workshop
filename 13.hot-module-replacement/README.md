Hot Module Replacement
======================

Hot module replacement reloads the module, and if need be, the entire page.  The samples at http://andrewhfarmer.com/webpack-hmr-tutorial/ describe many options for how this could work.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack-dev-server --inline --watch --hot` to launch the webpack dev server that'll build the bundle on demand

3. open `localhost:8080` in the browser

4. change some code, push save, and watch the browser update
