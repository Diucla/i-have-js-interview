// hourglass sum given the position of teh first element on the left 
let sumOneHourglass = (arr, i, j) => {
    const line0 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    const line1 = arr[i + 1][j + 1];
    const line2 = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
    return line0 + line1 + line2;
}

// main function
function hourglassSum(arr) {
    let arrResult = [];

    // our two loops
    for (let i = 0; i < 4; i++) 
        for (let j = 0; j < 4; j++) 
            // push the sum of each hourglass
            arrResult.push(sumOneHourglass(arr, i, j))
        
            // finding the max sum
    return Math.max(...arrResult);
}

// array for test
const arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr));
// expected result => 28