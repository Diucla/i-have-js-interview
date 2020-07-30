# New Year Chaos

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment **1** by **1** from at the front of the line to **n** at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if **n = 8** and **Person 5** bribes **Person 4**, the queue will look like this: **1,2,3,5,4,6,7,8**.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

**Function Description**

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

* q: an array of integers

**Input Format**
The first line contains an integer **t**, the number of test cases.

Each of the next **t** pairs of lines are as follows:
* The first line contains an integer **t**, the number of people in the queue
* The second line has **n** space-separated integers describing the final state of the queue. 

**Output Format**

Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than **2** people.

**Sample Input**
```
2
5
2 1 5 3 4
5
2 5 1 3 4
```
**Sample Output**
```
3
Too chaotic
```
## Having Fun

*"It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible."*

One of the simplest way to solve this problem, is to find the number of bribes in the queue. Let's analyse like this:

**Note:** *The queue in real life starts from position **1**, and the arrays in javascript starts form **0**, so to find currect position of an element we must add **1**, `queue[i] = i + 1`.*

If the element in position **i**, `queue[i]`, is less then `(i + 1)`, that means that this element was bribe 
    
* to know how many times he was bribes we can use this: `(i + 1) - arr[i]`

* what if one element receives a bribe and then bribes the other? in this case after we check if the element was bribe we must check if the element is greater then their next element `q[i] > q[i + 1]`
