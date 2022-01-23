const arr1 = [
	-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

const binarySearchRecursive = (arr, numLeft, numRight, target) => {
	// base case
	if (numLeft > numRight) {
		return -1;
	}

	// get midpoint value, parse int to convert result from float to int
	let mid = parseInt((numLeft + numRight) / 2);

	// base case
	// return if target value matches element of array index at mid
	if (target === arr[mid]) {
		return mid;
	}

	//recursion
	if (target < arr[mid]) {
		return binarySearchRecursive(arr, numLeft, mid - 1, target);
	}
	return binarySearchRecursive(arr, mid + 1, numRight, target);
};

console.log(binarySearchRecursive(arr1, 0, arr1.length - 1, 10));
