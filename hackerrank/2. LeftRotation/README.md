# Left Rotation
A left rotation operation on an array shifts each of the array's elements **1** unit to the left. For example, if left rotations are performed on array **[1, 2, 3, 4, 5]**, then the array would become **[2, 3, 4, 5, 1]**.

Given an array **a** of **n** integers and a number, **d**, perform **d** left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

**Function Description**
Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

* An array of integers **a**.

* An integer **d**, the number of rotations.

## Having Fun

This problem asks us to *Perform d left Rotations to any array*.

Let's supose we have an array **arr** whit length **n**, and we want to perform **d** rotations.

So we gonna save the number in position 0 of the array, delete that number from the array, then add the saved number after the position of the last element.
We have to do this **d** times then return the result.

Something like:

```
// The shift() method removes the first element from an array and returns that removed element

firstElem = arr.shift();

arr.push(firstElem)

// make a loop to do this d times

```