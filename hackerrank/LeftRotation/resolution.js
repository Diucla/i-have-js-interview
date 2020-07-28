function rotLeft(a, d) {
    // rotate function
    let rotateFunc = () => {
        // save and remove the first element
        first = a.shift();
        // push the element in last position
        a.push(first)
        return a;
    }

    for (let i = 0; i < d; i++) a = rotateFunc();
    return a;
}

const d = 4;

let arr = [1, 2, 3, 4, 5];

console.log(rotLeft(arr, d));
// expected result => [ 5, 1, 2, 3, 4 ]