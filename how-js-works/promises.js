// Creating a Promise around an old callback API

// A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

/* 
    In an ideal world, all asynchronous functions would already return promises. Unfortunately, 
    some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious 
    example is the setTimeout() function:
*/

setTimeout(() => saySomething("3 seconds passed"), 3 * 1000);

/* 
    Mixing old-style callbacks and promises is problematic. If saySomething() fails or contains 
    a programming error, nothing catches it. setTimeout is to blame for this.
    Luckily we can wrap setTimeout in a promise. Best practice is to wrap problematic functions 
    at the lowest possible level, and then never call them directly again:
 */


// Let's create the function we will use for this example 

const saySomething = (text = "Something!") => {
    console.log(text);
}

const failureCallback = (error) => {
    console.log(error);
}

// the wait function receive time in milleseconds and 
// return a promise constructor,
wait = function (ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms)
    })
};

const promise = wait(2 * 1000);

promise.then(function () {
    return saySomething();
}).catch(failureCallback);

// Basically, the promise constructor takes an executor function 
// that lets us resolve or reject a promise manually. 
// Since setTimeout() doesn't really fail, we left out reject in this case.

// simplifying the code we can have this
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10 * 1000).then(() => saySomething("3 seconds")).catch(failureCallback);