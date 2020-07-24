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

// The above result is correct but the time complexity is O(n^2), so how can we improve? 

const isUniqueMemoize = (arr) => {
    // we are create a object that will hold all the uniques values
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++)
        // check if the current value exist in the unique object or not
        // if yes return false the array is not unique
        // if not add to the unique object
        if (breadcrumbs[arr[i]]) {
            result = false;
            break;
        } else {
            breadcrumbs[arr[i]] = true;
        }

    return result;
};
// Complexity of `isUniqueMemoize` function above is O(n)
