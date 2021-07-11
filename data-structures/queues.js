// FIFO (first in first out)
// Use cases: printer queue

// methods: push ,pop, peek, length

class Queue {
	constructor() {
		this.collection = [];
	}
	// add item
	enqueue(item) {
		this.collection.push(item);
	}
	// remove first item
	dequeue() {
		return collection.shift();
	}
	//get first item
	front() {
		return this.collection[0];
	}
	// get queue size
	size() {
		return this.collection.length;
	}
	// log collection
	log() {
		console.log(this.collection);
	}
	// check if queue is empty
	isEmpty() {
		return this.collection.length === 0;
	}
}

class PriorityQueue {
	constructor() {
		this.collection = [];
	}
	// add item for priority check in an array ['item',1]
	enqueue(item) {
		if (this.isEmpty()) {
			collection.push(item);
		} else {
			let added = false;
			for (let i = 0; i < collection.length; i++) {
				if (item[i] < collection[i][1]) {
					this.collection.splice(i, 0, item[i]);
					added = true;
					break;
				}
			}
		}
	}
	// remove first item
	dequeue() {
		return collection.shift();
	}
	//get first item
	front() {
		return this.collection[0];
	}
	// get queue size
	size() {
		return this.collection.length;
	}
	// log collection
	log() {
		console.log(this.collection);
	}
	// check if queue is empty
	isEmpty() {
		return this.collection.length === 0;
	}
}
