const Node = require('../data-structures/linkedList');

const mergeTwoSortedLinkedList = (nodeA, nodeB) => {
	// base case
	if (nodeA === null) return nodeB;
	if (nodeB === null) return nodeA;

	// recursion
	if (nodeA.head < nodeB.head) {
		nodeA.next = mergeTwoSortedLinkedList(nodeA.next, nodeB);
		return nodeA;
	} else {
		nodeB.next = mergeTwoSortedLinkedList(nodeA, nodeB.next);
		return nodeB;
	}
};

// setup
const [nA1, nA2, nA3, nA4] = [
	new Node(1),
	new Node(2),
	new Node(3),
	new Node(4),
];
const [nB1, nB2, nB3, nB4] = [
	new Node(5),
	new Node(6),
	new Node(7),
	new Node(8),
];

nA1.setNext(nA2);
nA2.setNext(nA3);
nA3.setNext(nA4);
nB1.setNext(nB2);
nB2.setNext(nB3);
nB3.setNext(nB4);

const sortedLinkedList = mergeTwoSortedLinkedList(nA1, nB1);

//result
console.log(sortedLinkedList);
