/* 
    Using Callback & Higher Order Functions let's avoid 
    the DRY - Don’t Repeat Yourself principle
*/

/* 
    Let's suppose we have:
    - a function copy array and multiply by 2,
    - a function copy array and divide by 2,
    - a function copy array and add 2,
*/

function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++)
        output.push(array[i] * 2);
    return output;
}

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++)
        output.push(array[i] / 2);
    return output;
}

function copyArrayAndAdd3(array) {
    const output = [];
    for (let i = 0; i < array.length; i++)
        output.push(array[i] + 2);
    return output;
}

/*
    We could generalize our function - So we pass in our specific
    instruction only when we run copyArrayAndManipulate !
*/

// here copyArrayAndManipulate is Higher-Order Function
// and instructions is Callback
function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++)
        output.push(instructions(array[i]));
    return output;
}

// updating multiplyBy2 to arrow function we have
const multiplyBy2 = input => input * 2;

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result);