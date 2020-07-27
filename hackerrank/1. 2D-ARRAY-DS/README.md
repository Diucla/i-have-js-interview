# 2D Array - DS

Given a 6 X 6  2D Array, **arr**:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

We define an hourglass in **A** to be a subset of values with indices falling in this pattern in **arr**'s graphical representation:

```
a b c
  d
e f g
```

There are **16** hourglasses in **arr**, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in **arr**, then print the maximum hourglass sum.

For example, given the 2D array:

```
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
 ```

We calculate the following **16** hourglass values:

```
-63, -34, -9, 12,
-10, 0, 28, 23,
-27, -11, -2, 10,
9, 17, 25, 18
```

Our highest hourglass value is **28** from the hourglass:
```
0 4 3
  1
8 6 6
```

## Having Fun

This problem asks us to *Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum*.

**Note:** To calculate the sum of every hourglass we have to know to calculate the sum of one hourglass

Let's consider an subset **arrI**, this will be our hourglass example.

```
a b c
  d
e f g
```

if **a** is element in position `i = k` and `j = m`, so then in the line k we have:
* **a** in position `i = k` and `j = m`;
* **b** in position `i = k` and `j = m + 1`;
* **c** in position `i = k` and `j = m + 2`;

The **sum** for line 0 is `sum0 = arrI[k][m] + arrI[k][m + 1] + arrI[k][m + 2]`

For line 1 we just have `sum1 = arrI[k + 1][m + 1]`

For line 3 we have `sum2 = arrI[k + 2][m] + arrI[k + 2][m + 1] + arrI[k + 2][m + 2]`

After that we can have the sum of this hourglass, that is `totalSum = sum0 + sum1 + sum2`

We have to do this for all 16 hourglass, knowing that the hourglass for both rows and columns start from 0 to 3.

So we will have two for loop, where we will call some method to make a sum for us, after these loops we will return the max value.