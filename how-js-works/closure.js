/*
    Closure
 */
function outerFunc() {
    let counter = 0;
    const innerFunc = () => {
        const ten = 10;
        counter += ten;
        return counter;
    }
    return innerFunc;
}

// [[scope]] counter = 0
const plusTen = outerFunc();

// [[scope]] counter = 0
console.log(plusTen());
// => 10

// [[scope]] counter = 10
console.log(plusTen());
// => 20

/*
    if we invoke the outerFunc again, and store the result in a const plusTen2 (that is a function), 
    this function will create another [[scope]] and set value to 0.
*/
const plusTen2 = outerFunc();

// [[scope]] counter = 0
console.log(plusTen2());
// => 10

// but if we call again plusTen()
// [[scope]] counter = 20
console.log(plusTen());
// => 30

/*
    Other examples 
*/

// we can update the function to this
const addBy = x => {
    return y => x + y;
}

// or this
const _addBy = x => y => x + y;

// [[scope]] x = 2
const addBy2 = _addBy(2);

console.log(addBy2(10));
console.log(addBy2(20));