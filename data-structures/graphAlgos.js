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

module.exports = { dfGraphIterative, dfGraphRecursive, bfGraphIterative };
