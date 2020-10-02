/* 
    To practice memoization, i gonna solve some algorithms
    In the definition we have: "caching the values that the function returns after its initial execution"
    just keep it in your head for now
*/

/*
    ================ Exercise 1 ===================
    Using Memoization, write a function, factorial, that takes an argument, n, 
    and return the factorial of n
*/

// first we create the cache object to store our function returns
const cache = {}

const memoFactorial = n => {
    // check if existe value in cache with key n, if yes just return the value in cache
    if (cache[n]) return cache[n];
    else if (n === 0) return 1;
    else {
        // invoke the function recursively, store the result in cache using key n and return the value
        return cache[n] = memoFactorial(n - 1) * n;
    }
}

// we can improve memoization using Closure
const memoFactorial2 = () => {
    const cache = {};
    return n => {
        if (n in cache) return cache[n];
        else if (n === 0) return 1;
        else {
            const result = memoFactorial(n - 1) * n;
            cache[n] = result;
            return result;
        }
    }
}

// console.log(memoFactorial(7));

// const factorial = memoFactorial2();
// console.log(factorial(5));

/*
    ================ Exercise 2 ===================
    Using Memoization, write a function, `fibonacci`, that return a value given 
    an index N as input for the Fibonacci sequence.
*/
const fibonacci = (n, cache = {}) => {
    if (cache[n]) return cache[n];

    if (n <= 1) return 1;

    return cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
}

console.log(fibonacci(11));