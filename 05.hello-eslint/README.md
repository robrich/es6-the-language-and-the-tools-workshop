ESLint
======

Adding ESLint to your source
----------------------------

Add these files to your project:

### .eslintrc

This JSON file defines the rules, presets, and plugins ESLint uses when validating your code.

- configuring env and plugins: http://eslint.org/docs/user-guide/configuring
- a list of all rules: http://eslint.org/docs/rules/
- rule: 0=off, 1=warn, 2=error

### .eslintignore

This file lists files and folders ESLint should ignore when parsing, and is similar to a .gitignore file.


Run these commands to get ESLint installed from NPM:

1. `npm install -g eslint babel-eslint`

Run ESLint from the terminal:

1. `eslint .`


Adding ESLint to your IDE
-------------------------

- Sublime: https://github.com/roadhump/SublimeLinter-eslint
- Atom: https://atom.io/packages/eslint
- Webstorm: built in, see https://www.jetbrains.com/help/webstorm/2016.1/eslint.html?origin=old_help
- Visual Studio: https://visualstudiogallery.msdn.microsoft.com/6edc26d4-47d8-4987-82ee-7c820d79be1d or .NET Core Preview Tooling: http://stackoverflow.com/questions/36034652/integrate-eslint-with-visual-studio-2015
- Visual Studio Code: built in, see https://code.visualstudio.com/Updates#_linters

This adds the engine, then configure your rules in a local or global `.eslintrc` file.


Inline overriding
-----------------

You can add extra globals to the current scope (or at the top of the file for the whole file) by adding a comment like this:

`/*global jquery:false*/`

The `:false` or `:true` tells ESLint if you expect to modify the variable.  If you've marked it as false and your code modifies the global variable, linting will highlight the error.

You can adjust rules in the current scope with a comment:

`/* eslint no-console:0 */`

This comment turns off the `no-console` rule, so `console.log('hello')` won't trigger the linter.
