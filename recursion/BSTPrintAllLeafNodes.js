const printAllLeafNodes = (root) => {
	//base case
	if (root === null) {
		return;
	}

	// check if node is a leaf
	if (root.left === null && root.right === null) {
		console.log(`${root.val}, `);
		return;
	}

	//recursion
	if (root.left !== null) {
		printAllLeafNodes(root.left);
	}

	if (root.right !== null) {
		printAllLeafNodes(root.right);
	}
};
