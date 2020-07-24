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
    // check if n is in cache or not, if yes just return the value in cache
    if (n in cache) return cache[n];
    else if (n === 0) return 1;
    else {
        // execute the function and put the return in result const
        const result = memoFactorial(n - 1) * n;
        // storing the result of our function in cache
        cache[n] = result;
        return result;
    }
}

console.log(memoFactorial(6));