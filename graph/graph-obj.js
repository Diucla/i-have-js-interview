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
}