const Node = require('../data-structures/linkedList');

const linkedListReversal = (head) => {
	//base case
	if (head === null || head.next === null) {
		return head;
	}

	//recursion
	const pointer = linkedListReversal(head.next);

	head.next.next = head;
	head.next = null;

	return pointer;
};

//setup
const [n1, n2, n3, n4, n5] = [
	new Node(1),
	new Node(2),
	new Node(3),
	new Node(4),
	new Node(5),
];

n1.setNext(n2);
n2.setNext(n3);
n3.setNext(n4);
n4.setNext(n5);

const reversedList = linkedListReversal(n1);

//result
console.log(n1.getFirst());
console.log(reversedList.getFirst());
