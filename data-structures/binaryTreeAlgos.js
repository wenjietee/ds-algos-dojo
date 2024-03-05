// Depth First (DF)

//iterative
const dfIterative = (root) => {
    // check empty tree
    if (root === null) return [];

    const stack = [root];
    const result = [];

    // continously pop off the stack and push child nodes in to traverse
    // once the stack is empty the binary tree is traversed fully
    while (stack.length > 0) {
        // visit a node
        const current = stack.pop();

        result.push(current.val);

        // check if left and right nodes exist then push to stack
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return result;
};

// recursive
const dfRecursive = (root) => {
    if (root === null) return [];
    const leftVals = dfRecursive(root.left);
    const rightVals = dfRecursive(root.right);
    return [root.val, ...leftVals, ...rightVals];
};

// Breath First Serarch (BF)
// No recursion as the implementation of recursion stack goes aganist the implementation of queues
//iterative
const bfIterative = (root) => {
    if (root === null) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        // visit remove from the beginning on the array
        const current = queue.shift();

        result.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
};

module.exports = { dfIterative, dfRecursive, bfIterative };
