const arrayToSort = [1, 3, 5, 2, -2, 4, 6, 8, 7, 10, 8, 9, 0, -3, -1];

const mergeSort = (array) => {
	// check if array can be split
	// base case: array length is less than  2
	if (array.length < 2) {
		return array;
	}

	// get middle index (round the value down in case array cannot be split evenly)
	const middle = Math.floor(array.length / 2);

	// split array
	const leftSide = array.slice(0, middle);
	const rightSide = array.slice(middle, array.length);

	// further split array recursively
	return merge(mergeSort(leftSide), mergeSort(rightSide));
};

const merge = (left, right) => {
	// create new array
	const result = [];
	// keep running until left and right array is empty
	while (left.length && right.length) {
		// find lower value
		if (left[0] <= right[0]) {
			// Add left or right element into result
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	// merge left and right array
	while (left.length) {
		result.push(left.shift());
	}
	while (right.length) {
		result.push(right.shift());
	}
	// return merged array
	return result;
};

console.log(mergeSort(arrayToSort));

/*
It's a stable sorting algorithim 
Big O worst case space complexity of O(n) requires alot of space
Big O worst case time complexity of O(n Log n)
*/
