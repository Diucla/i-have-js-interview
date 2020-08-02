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
}