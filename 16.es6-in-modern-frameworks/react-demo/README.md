React
=====

React uses a custom `.jsx` extension to denote there is React markup and ES6 combined into one file.  This allows React components to contain both presentation and logic in one file.  Though we seek for separation of concerns, React proposes that separating HTML from JavaScript is not the right divide, but rather we should separate business logic from presentation logic in different components.

Note the special React content in both `webpack.config.js` and `.babelrc`.


Run
---

To run this app:

1. `npm install`

2. `npm run webpack`

3. open `index.html` in a browser
