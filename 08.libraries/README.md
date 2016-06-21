Calling Libraries
=================

Separating code into different files enables us to build large systems while focusing on small problems.  Webpack's main feature is analyzing our code, finding the dependencies, and linking them together in a web-friendly way.  In effect, it turns CommonJS style code into AMD style code.

In ES6, we use `import` to reference an external file, and `export` to make a variable or function available to others.  We need to match `import`s and `export`s to ensure we get the connection we need.


Package references and Local references
---------------------------------------

If the file is local to our project, we use the path to get to the file:

`import thing from './path/to/file';` the `.js` is assumed, so we can leave that off.

If the file is in an external library, we just use the name of the library:

`import jquery from 'jquery';`


Import and Export Named Content
-------------------------------

`export function namedfunc() {` is like Node's `module.exports.namedfunc = namedfunc;`.  We export a named function.

`import {namedfunc} from './lib';` is like Node's `var namedfunc = require('./lib').namedfunc;`.  We use destructuring to initialize a `namedfunc` variable and assign it to the `namedfunc` property from the exported JSON object.

`import * as lib from './lib';` is like Node's `var lib = require('./lib');`.  We grab the complete export object and make it available as a `lib` variable.


Import and Export Variations
----------------------------

`export const PI = 3.14;` is like Node's `var PI = 3.14; module.exports.PI = PI;`.  In this case rather than exporting a function, we export a variable.  We can use this to export function variables, objects, or other content we'd like to make available.

`import {namedfunc as newname} from './lib';` is like Node's `var newname = require('./lib').namedfunc;`.  In this case we can name our local variable different from the exported name.


`default`
---------

When we use `export default` it exports not as the regular name but as the name `default`.  This can make it easier to import.

`export default function somename() {` is like Node's `module.exports.default = function somename() {`.  Rather than name the export `somename`, we named it `default`.

`import thing from './lib';` is like Node's `var thing = require('./lib').default;`.  We've grabbed the default export and named it a convenient name.

`export default` can only appear once in the file.  It makes it really easy to import a major piece from a library.


Try it out
----------

1. run `npm install` to load all the dependencies

2. run `webpack` to build the bundle

3. open `index.html` in the browser

4. open the F12 developer tools

5. in the sources tab, look at bundle.js

Note that the `import` and `export` content looks a bit like Node's `require` syntax and a bit like requirejs's `require` syntax.  Note that the entirety of jQuery was placed into our bundle too.

Use ESLint and generous debugging to help verify your syntax.


Looking for more?
-----------------

These resources also explain `import` and `export`:

- [https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax](https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax)
- [https://gist.github.com/domenic/4748675](https://gist.github.com/domenic/4748675)
- [http://www.2ality.com/2014/09/es6-modules-final.html](http://www.2ality.com/2014/09/es6-modules-final.html)
