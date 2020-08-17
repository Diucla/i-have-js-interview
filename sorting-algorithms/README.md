# Sorting Algorithms

A sorting algorithm is an algorithm made up of a series of instructions that takes an array as input, performs specified operations on the array, sometimes called a list, and outputs a sorted array.

In other words, a sorted array is an array that is in a particular order. For example, `[a,b,c,d]` is sorted alphabetically, `[1,2,3,4,5]` is a list of integers sorted in increasing order, and `[5,4,3,2,1]` is a list of integers sorted in decreasing order.

Here I will show the most used algorithms, based on these it will be possible to implement any other sorting algorithm.

## Bubble Sort

Bubble sort compares adjacent elements of an array and organizes those elements. Its name comes from the fact that large numbers tend to “float” (bubble) to the top. It loops through an array and sees if the number at one position is greater than the number in the following position which would result in the number moving up. This cycle repeats until the algorithm has gone through the array without having to change the order. This method is advantageous because it is simple and works very well for mostly sorted lists. As a result, programmers can quickly and easily implement this sorting algorithm. However, the tradeoff is that this is one of the slower sorting algorithms.

Main Characteristics: Exchange sorting Easy to implement Worst Case = O(n^2)