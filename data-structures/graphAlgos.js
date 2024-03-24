// Depth First (DF)

//iterative
const dfGraphIterative = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
};

//recursive
const dfGraphRecursive = (graph, source) => {
    console.log(source);
    for (let neighbour of graph[current]) {
        dfGraphRecursive(graph, neighbour);
    }
};

// Breath First (BF)

const bfGraphIterative = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
};

// has path
const dfGraphHasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbour of graph[src]) {
        if (dfGraphHasPath(graph, neighbour, dst) === true) {
            return true;
        }
    }
    return false;
};

const bfGraphHasPath = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) {
            return true;
        }
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
    return false;
};

// build graph helper
const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

// undirected path
const undirectedPath = (edges, nodeA, nodeB) => {
    const hasPath = (graph, src, dst, visited) => {
        if (src === dst) return true;

        if (visited.has(src)) return false;

        visited.add(src);

        for (let neighbour of graph[src]) {
            if (hasPath(graph, neighbour, dst, visited) === true) {
                return true;
            }
        }
        return false;
    };

    const graph = buildGraph(edges);

    return hasPath(graph, nodeA, nodeB, new Set());
};

// connected components
const connectedComponents = (graph) => {
    const explore = (graph, current, visited) => {
        if (visited.has(String(current))) return false;

        visited.add(String(current));

        for (let neighbour of graph[current]) {
            explore(graph, neighbour, visited);
        }

        return true;
    };

    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count++;
        }
    }
    return count;
};

const largestComponents = (graph) => {
    const exploreSize = (graph, node, visited) => {
        if (visited.has(node)) return 0;

        visited.add(node);

        let size = 1; // count current node

        for (let neighbour of graph[node]) {
            size += exploreSize(graph, neighbour, visited);
        }
        return size;
    };

    let largest = 0;
    const visited = new Set();

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > largest) largest = size;
    }

    return largest;
};

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === nodeB) return distance;

        for (let neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push([neighbour, distance + 1]);
            }
        }
    }
    return -1;
};

const islandCount = (grid) => {
    const exploreGrid = (grid, r, c) => {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid.length;

        if (!rowInbounds || !colInbounds) return false;

        if (grid[r][c] === "W") return false;

        const pos = r + "," + c;

        if (visted.has(pos)) return false;
        visted.add(pos);

        explore(grid, r - 1, c, visited);
        explore(grid, r + 1, c, visited);
        explore(grid, r, c + 1, visited);
        explore(grid, r, c - 1, visited);

        return true;
    };

    const visted = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (exploreGrid(grid, r, c, visted) === true) {
                count++;
            }
        }
    }
    return count;
};

const minIsland = (grid) => {
    const exploreSize = (grid, r, c, visited) => {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid[0].length;

        if (!rowInbounds || !colInbounds) return 0;

        if (grid[r][c] === "W") return 0;

        const pos = r + "," + c;
        if (visited.has(pos)) return 0;

        visited.add(pos);

        let size = 1;

        size += exploreSize(grid, r - 1, c, visited);
        size += exploreSize(grid, r + 1, c, visited);
        size += exploreSize(grid, r, c + 1, visited);
        size += exploreSize(grid, r, c - 1, visited);

        return size;
    };

    const visited = new Set();

    let minSize = Infinity;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const size = exploreSize(grid, r, c, visited);

            if (size > 0 && size < minSize) {
                minSize = size;
            }
        }
    }

    return minSize;
};

module.exports = {
    dfGraphIterative,
    dfGraphRecursive,
    bfGraphIterative,
    dfGraphHasPath,
    bfGraphHasPath,
    undirectedPath,
    connectedComponents,
    largestComponents,
    buildGraph,
    shortestPath,
    islandCount,
    minIsland,
};
