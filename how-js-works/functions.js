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