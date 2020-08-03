// Represent a Graph
// In the above Graph, the set of vertices V = {1,2,3,4} and the set of edges E = {12, 23, 24, 34}.
import {
    Graph
} from './graph-obj.js';

let nodes = '1 2 3 4'.split(' ');

const edges = [
    ['1', '2'],
    ['2', '3'],
    ['2', '4'],
    ['3', '4'],
];

let graph = new Graph();

// Create the Graph
nodes.forEach((node) => {
    graph.addNode(node);
});

edges.forEach((edge) => {
    graph.addEdge(...edge);
});

console.log(graph);