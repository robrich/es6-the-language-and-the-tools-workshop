Hello Webpack
=============

Welcome to Webpack.


Install npm modules
-------------------

Run these commands from a shell to install webpack, babel, and the necessary resources:

```
npm install -g webpack
npm install --save-dev babel-core babel-loader babel-preset-es2015
```


Files
-----

Create a few files in this directory:

1. `index.html`: create a standard web page that includes this script line:

`<script src="bundle.js"></script>`

Webpack will create this bundle.js file.


2. `main.js`: this is the entry point, the starting file, the main JavaScript file in our project.  Fill it with some default content:

```
const anounce = (name) => {
  console.log('hello '+name);
}
anounce('world');
```

3. `webpack.config.js`: this configuration file tells webpack what to do.  Add this content:

```
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
```

We've told it to start with `main.js`, to create `bundle.js`, and to run all the files that end in `.js` through `babel` using the `es2015` rules.


Run Webpack
-----------

Now let's run it

1. From a shell: `webpack`

2. Open index.html in a browser

3. Open the F12 developer tools and see the console output

Note that Webpack put in the `'use strict';` for us.  Note that the file has a bunch of AMD loader content at the top.  In effect, it turned our CommonJS code into AMD code.
