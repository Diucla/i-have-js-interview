# Graph
Formally, a graph is a pair of sets (V, E), where V is the set of vertices and E is the set of edges, connecting the pairs of vertices. Take a look at the following graph

<svg width="200px" height="150px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.47 221"><circle cx="66.74" cy="23.74" r="23.73" fill="#111"/><circle cx="23.73" cy="152.09" r="23.73" fill="#111"/><circle cx="183.73" cy="100.09" r="23.73" fill="#111"/><circle cx="173.8" cy="197.26" r="23.73" fill="#111"/><path stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M34.19 132.9L60 46M43.33 162.05l110.11 35.21M45 143l117-33"/><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M176 176l5-52"/><path d="M65.62 16.1h-.07l-3.83 2.07-.57-2.27 4.81-2.58h2.54v22h-2.88zM18.15 162.34v-1.83l2.34-2.27c5.62-5.35 8.16-8.19 8.19-11.51 0-2.24-1.08-4.31-4.37-4.31a7.48 7.48 0 00-4.67 1.87l-.95-2.1a9.63 9.63 0 016.23-2.24c4.75 0 6.74 3.25 6.74 6.4 0 4.07-2.94 7.35-7.58 11.83l-1.77 1.62v.07h9.9v2.47zM177.86 107.92a10 10 0 004.88 1.39c3.83 0 5-2.44 5-4.27 0-3.08-2.81-4.4-5.69-4.4h-1.66V98.4H182c2.16 0 4.91-1.12 4.91-3.72 0-1.77-1.12-3.32-3.86-3.32a8.07 8.07 0 00-4.41 1.45l-.78-2.17a10.53 10.53 0 015.76-1.69c4.34 0 6.3 2.58 6.3 5.25 0 2.27-1.35 4.2-4.06 5.18v.07a5.74 5.74 0 014.91 5.66c0 3.52-2.74 6.6-8 6.6a11.08 11.08 0 01-5.72-1.49zM176.36 209.34v-6h-10.23v-2l9.87-14.02h3.21V201h3.09v2.34h-3.09v6zm0-8.33v-7.35c0-1.15 0-2.31.1-3.46h-.1c-.68 1.29-1.22 2.24-1.83 3.25l-5.38 7.49v.06z" fill="#fff"/></svg>

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
