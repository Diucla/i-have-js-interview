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

Let's take note of this:
* The normal queue is in ascending order 
* Each Person can be bribed one time by the same person  
* If an element has numbers greater than it to the left, that means, this element was bribe at least one time, so now, how to find how many times, a Person was bribe? We just have to count the numbers, greater than that element, in the left.
**Note** we have to start looking from `originalPosition - 1` because the first Person that bribes just do it once. And we will stop in the current position of the element.
* when the original position is **0** then subtract by 1 we have `0 - 1` negative position, so we have to found the max between 0 and `originalPosition - 1` to avoid negative index

Something like

```
for (let i = queue.length - 1; i >= 0; i--) {
    //TODO

    // arrays starts from 0 so we always have to subtract 1 in queue to find the original position
    originalPosition = queue[i] - 1;

    // looping from the originalPosition - 1 until the current position of the element
    for (let j = Math.max(0, originalPosition - 1); j < i; j++) {

        // check for each element if is greater than current element
        if (queue[i] > queue[i])//TODO
    }
}
```
