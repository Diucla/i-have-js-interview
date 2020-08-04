class Graph {
    constructor() {
        // initialize the graph
        this.adjacencyList = new Map();
    }

    addNode(node) {
        // check if the node already exist or not
        if (!this.adjacencyList.has(node)) {
            // if not add node
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(origin, destination) {
        // check if the origin node exist
        if (!this.adjacencyList.has(origin)) {
            // if not add node
            this.addNode(origin);
        }
        // check if the destination node exist
        if (!this.adjacencyList.has(destination)) {
            // if not add node
            this.addNode(destination);
        }

        // add edge
        this.adjacencyList.get(origin).push(destination);
        this.adjacencyList.get(destination).push(origin);
    }

    removeNode(node) {
        // get the neighbors
        let neighbors = this.adjacencyList.get(node);

        // loop and remove all edges between the "removed" node and their neighbors
        for (let neighbor of neighbors) {
            this.removeEdge(node, neighbor)
        }

        // delete the node
        this.adjacencyList.delete(node);
    }

    removeEdge(origin, destination) {
        // get the origin, array of values, and returns elements different of the destination node 
        const originArray = this.adjacencyList.get(origin)
            .filter(element => element !== destination);

        this.adjacencyList.set(origin, originArray);

        // get the destination, array of values, and returns elements different of the origin node 
        const destinationArray = this.adjacencyList.get(destination)
            .filter(element => element !== origin);

        this.adjacencyList.set(destination, destinationArray);
    }
}

// Tests

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

console.log("===== printing the graph ======");
console.log(graph);

graph.removeEdge("3", "4");
console.log("===== after removing the edge between 3 and 4 ======");
console.log(graph);

graph.removeNode("3");
console.log("===== after removing node 3 ======");
console.log(graph);