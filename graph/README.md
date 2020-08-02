# Graph
Formally, a graph is a pair of sets (V, E), where V is the set of vertices and E is the set of edges, connecting the pairs of vertices. Take a look at the following graph

<img width="200px" height="150px" src="../imgs/graph.svg" alt="graph image">

## Data Structure
In the above Graph, the set of vertices V = {1,2,3,4} and the set of edges E = {12, 23, 24, 34}.

Mathematical graphs can be represented in data structure. We can represent a graph using an array of vertices and a two-dimensional array of edges. Before we proceed further, let's familiarize ourselves with some important terms −

* **Vertex** − Each node of the graph is represented as a vertex. In the following example, the labeled circle represents vertices. 

* **Edge** − Edge represents a path between two vertices or a line between two vertices.

* **Adjacency** − Two node or vertices are adjacent if they are connected to each other through an edge.

* **Path** − Path represents a sequence of edges between the two vertices. 

## Basic Operations
Following are basic primary operations of a Graph −

* **Add Vertex** − Adds a vertex to the graph.

* **Add Edge** − Adds an edge between the two vertices of the graph.

### Recommendation / Exercises

To know more about Graph, please read [Graph Representation](https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/).

# Implementation of Graph in JavaScript
Imagine we have a dataset that contains airports and routes. We can represent the graph as a Map or Object where **each key (node) is an airport and the value (edges) is an array airports that it can connect to**.

Let's implement the basic operations, first we need to initialize the graph as we already know, here i will use Object to do that. In the examples i will implement with Map and Object.
```
// initializing the graph as empty object
let adjacencyList = {}
```
## Basic operations

* **Add Node/Vertex**: we have to set our node as a key, and the value for now it's just empty array
```
// TODO - receive a node as a parameter
adjacencyList[node] = [];
```
* **Add Edge**: we need two nodes, for each node we will get the value, and add the another node to it
```
// TODO - receive two nodes (origin and destination) as a parameter

// get the origin value and push destination
adjacencyList[origin].push(destination);

// get the destination value and push origin
adjacencyList[destination].push(origin);
```
