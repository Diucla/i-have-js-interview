class Graph {
    constructor() {
        // initialize the graph
        this.adjacencyList = {};
    }

    addNode(node) {
        // check if the node already exist or not
        if (!this.adjacencyList[node]) {
            // if not add node
            this.adjacencyList[node] = [];
        }
    }

    addEdge(origin, destination) {
        // check if the origin node exist
        if (!this.adjacencyList[origin]) {
            // if not add node
            this.addNode(origin);
        }
        // check if the destination node exist
        if (!this.adjacencyList[destination]) {
            // if not add node
            this.addNode(destination);
        }

        // add edge
        this.adjacencyList[origin].push(destination);
        this.adjacencyList[destination].push(origin);
    }

    removeNode(node) {
        // get the neighbors
        let neighbors = this.adjacencyList[node];

        // loop and remove all edges between the "removed" node and their neighbors
        for (let neighbor of neighbors) {
            this.removeEdge(node, neighbor)
        }

        // delete the node
        delete this.adjacencyList[node];
    }

    removeEdge(origin, destination) {
        // get the origin, array of values, and returns elements different of the destination node 
        this.adjacencyList[origin] = this.adjacencyList[origin]
            .filter(element => element !== destination);

        // get the destination, array of values, and returns elements different of the origin node 
        this.adjacencyList[destination] = this.adjacencyList[destination]
            .filter(element => element !== origin);
    }
}