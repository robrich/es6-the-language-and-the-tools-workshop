Prerequisites for the ES6 Workshop
==================================

Node
----

You'll need [Node](https://nodejs.org) v. 5 or 6 installed.  Node comes with [NPM](https://npmjs.org/) and we'll need npm version 3.

Do you have node and npm installed?  From a terminal:

`node --version`

`npm --version`

If both reply with a version, and your npm version is `3.0` or better, you're all set.


Webpack and Babel
-----------------

Most of the content in this course uses [Webpack](https://webpack.github.io/) and [Babel](http://babeljs.io/).  The first time you install it, it may take a while to download all the npm packages.

From a terminal inside a new directory:

1. Make an empty directory

2. clone the `https://github.com/robrich/es6-the-language-and-the-tools-workshop` git repository

3. `npm install -g webpack eslint`

4. `npm install babel-core babel-loader babel-preset-es2015`

These commands may take a while the first time, so just get them kicked off while we dig in.
