// LIFO (last in first out)
// Use cases: back button, undos

// methods: push ,pop, peek, length

class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}

	// add element to the top
	push(value) {
		this.storage[this.count] = value;
		this.count++;
	}

	// remove element from the top
	pop() {
		// check if stack is empty
		if (this.count === 0) return undefined;
		// if not pop off item and return it
		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	// get the number of elements in the stack
	size() {
		return this.count;
	}

	// query an item in the stack
	peek(value) {
		return this.storage[value];
	}
}

// usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // returns 3
console.log(
	`Size of Stack is ${myStack.size()}`, // returns size of 2
	`Index 0 contains ${myStack.peek(1)}` // returns 1
);
