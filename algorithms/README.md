#  Complexity of algorithms

**Space Complexity** - How much memory is used?

**Time Complexity** - How many primitive operatins a executed?

## Time Complexity
Time complexity of an algorithm signifies the total time required by the program to run to completion. The time complexity of algorithms is most commonly expressed using the ***big O notation***.

Know Thy Complexities: https://www.bigocheatsheet.com/ 

## Big O Notation 

| Name          | constant   | logarithmic  | linear       | quadratic    | exponencial   |
| ------------- |:----------:|:------------:|:------------:|:------------:| :------------:|
| **Notation**  | O(1)       | O(logn)      | O(n)         | O(n^2)       |  O(k^n)       |

## Complexity of Common Operation
| Complexity  |	Operation  |
|:-----------:|:-----------|
|O(1)         |	Running a statement |
|O(1)	      | Value look-up on an array, object, variable |
|O(logn)	  | Loop that cuts problem in half every iteration |
|O(n)      	  | Looping through the values of an array|
|O(n^2)	      | Double nested loops |
|O(n^3)	      | Triple nested loops|

## Memoization

Memoization is the programmatic practice of making long recursive/iterative functions run much faster. By **caching the values that the function returns after its initial execution**.

When we input the same value into our memoized function, it returns the value stored in the cache instead of running the function again, thus boosting performance. No longer does your program have to recalculate every number to get a result.