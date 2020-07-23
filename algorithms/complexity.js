/*
    Suppose we want to check whether elements in an array are unique or not, 
    or if not have repeated elements in the same array
*/

// we can do like this 
const isUnique = (arr) => {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // check if we have same elements in different positions
            // if yes the result will be false
            if (i !== j && arr[i] === arr[j]) {
                result = false;
            }
        }
    }
    return result;
};

// The above result is correct but the time complexity is n^2, so how can we improve? 
// we can use something called memoization, in the next commit i'll add definition in readme file
