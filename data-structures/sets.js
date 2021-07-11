// Set is like an array but with only unique values
// ES6 has a built in set but does not have all common set methods

// methods: has, values, add, remove, size, union,
// intersection, difference, subset

class mySet {
	constructor() {
		this.collection = [];
	}

	// query if element exist
	has(element) {
		return this.collection.indexOf(element) !== -1;
	}
	// get the set
	values() {
		return this.collection;
	}
	// add element if unique
	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}
	// remove element if exist
	remove(element) {
		if (this.has(element)) {
			let index = collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}
	// get set size
	size() {
		return this.collection.length;
	}

	// combine 2 sets
	union(otherSet) {
		// init new set to combine
		const unionSet = new Set();
		// store values of sets to be combined
		const firstSet = this.values();
		const secondSet = otherSet.values();

		//combine sets together
		firstSet.forEach((item) => unionSet.add(item));
		secondSet.forEach((item) => unionSet.add(item));

		// return result
		return unionSet;
	}

	intersection(otherSet) {
		// init new set to store result
		const intersectionSet = new Set();

		// if both sets have the same items add to the intersection set
		const firstSet = this.values();
		firstSet.forEach((item) => {
			if (otherSet.has(item)) {
				intersectionSet.add(item);
			}
		});

		// return result
		return intersectionSet;
	}

	difference(otherSet) {
		const differenceSet = new Set();
		const firstSet = this.values();
		// if both sets do not have the same items add to the intersection set
		firstSet.forEach((item) => {
			if (!otherSet.has(item)) {
				differenceSet.add(item);
			}
		});
		// return result
		return differenceSet;
	}

	// check if a set is a subset of another set
	subset(otherSet) {
		const firstSet = this.values();
		return firstSet.every((value) => otherSet.has(value));
	}
}
