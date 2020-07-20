# Callback & Higher Order Functions

A **Higher-Order function** is a function that receives a function as an argument or returns the function as output.
For example, `Array.prototype.map`, `Array.prototype.filter` and `Array.prototype.reduce` are some of the Higher-Order functions built into the language.

About **Callback Functions** they are function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

You can see more here [Understanding Higher-Order Functions in JavaScript](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad);

## Arrow functions
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors. 

You can see more here [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Recommendation / Exercises
* I recommend [csbin](http://csbin.io/callbacks) have a lot of exercises about Callbacks and Higher-Order Functions

# Closure
A **closure** is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
The closure has three scope chains:

* it has access to its own scope — variables defined between its curly brackets
* it has access to the outer function’s variables
* it has access to the global variables

```
function outerFunc() {
    let counter = 0;
    const innerFunc = () => {
        const ten = 10;
        counter += ten;
        return counter;
    }
    return innerFunc;
}
```

Here we have two functions:

* an outer function `outerFunc` which has a variable `counter`, and returns the `innerFunc` function;

* an inner function `innerFunc` which has its `const` called `ten`, and that accesses an outer variable `counter`, within its function body


Let us now invoke the `outerFunc()` function, and store the result of the `outerFunc()` function in a const `plusTen`. 
``` 
const plusTen = outerFunc();
```

**Explanation**

When we invoke the `outerFunc()`: 
1. variable `counter` is created and its value is set to 0;
2. The next line is a function declaration, so nothing to execute.
3. On the last line, `return innerFunc` looks for a variable called `innerFunc`, finds that this variable `innerFunc` is actually a function, and so returns the entire body of the function `innerFunc`.
4. The contents returned by the return statement are stored in `plusTen`, and an important note, `plusTen` will come with some hidden property called [[scope]] It's like a  ‘backpack’ that comes with what 'inherits' from the `outerFunc()` function, that's the magic of **Closures**

Thus, `plusTen` will store the following:
```
 [[scope]] // counter = 0
const innerFunc = () => {
    const ten = 10;
    counter += ten;
    return counter;
}
```