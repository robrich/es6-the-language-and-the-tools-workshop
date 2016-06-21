Welcome to ES6
==============

Let's start with the [slides](index.html) and then we'll dig into a few ES6 features.


`let` and `const`
-----------------

ES5: var

```
function hello() {
    console.log(message); // undefined
    if (true) {
        var message = 'hello world';
        console.log(message); // 'hello world'
    }
    console.log(message); // 'hello world'
}
```

Note how `message` behaves in unexpected ways when we approach this with our assumptions from other curly-braced languages.  `function` defines scope but curly-braces don't.

ES6: let / const

```
function hello() {
    console.log(message); // exception
    if (true) {
        let message = 'hello world';
        console.log(message); // 'hello world'
    }
    console.log(message); // exception
}
```

By using `let` or `const` we get the expected results.  `var` is not deprecated or invaluable, we now have more tools.


"Fat Arrow" functions (`=>`)
----------------------------

ES5: function

```
var array = [1,2,3];
array.map(function (a) { return a * 2; });
```

ES6: =>

```
var array = [1,2,3];
array.map(a => a * 2);
```

This syntax can look weird.  Let's build it up:

1. The original function:

`function (a) { return a * 2; }`

2. Turn it into a "fat arrow" function:

`(a) => { return a * 2; }`

3. We only have a single input parameter, so we can remove the parenthesis:

`a => { return a * 2; }`

4. We only have a single body line and want the implicit `return` so let's remove the curly braces:

`a => a * 2`

Note that all these are valid function definitions, and each has its place.  Use the one that's most legible for the circumstance.
