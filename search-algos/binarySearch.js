// binary search
// this search algo can be done assuming the array has been sorted
// from small to big

const arr1 = [
	-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

const binarySearch = (arr, target) => {
	// init left right pointers
	let left = 0;
	let right = arr.length - 1;

	// iterate until right pointer crosses over left
	while (left <= right) {
		// get the mid index of left and right
		let mid = Math.floor((left + right) / 2);

		// if mid is the target return it
		if (arr[mid] === target) {
			return mid;
		} else if (target < arr[mid]) {
			// if mid is bigger than target shift right pointer
			// to the left side of mid to narrow search
			right = Math.floor(mid - 1);
		} else {
			// if target is bigger than mid shift left pointer
			// to the right side of mid to narrow search
			left = Math.floor(mid + 1);
		}
	}
	// return -1 if not found (when right crosses left, the value is -1)
	return -1;
};

// run code
let result = binarySearch(arr1, 0);

// check result and log findings
if (result !== -1) console.log(`element found at index ${result}`);
else console.log(`element not found`);

/*
   The time complexity of the above algorithm is O(log n).

   Very slow compared to other search algos but the most basic
   and easiest to implement.
   
 */
