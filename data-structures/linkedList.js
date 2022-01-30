class ListNode {
	constructor(head = null) {
		this.head = head;
		this.next = null;
	}
	// get size of linked list
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}

		return count;
	}

	// empty linked list
	clear() {
		this.head = null;
	}

	//get first item
	getFirst() {
		return this.head;
	}

	//get next item
	getNext() {
		return this.next;
	}

	//get last item
	getLast() {
		let last = this.head;
		if (last) {
			while (last.next) {
				last = last.next;
			}
		}
		return last;
	}

	//set next item
	setNext(node) {
		this.next = node;
	}
}

module.exports = ListNode;
