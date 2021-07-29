// linear search

const arr1 = [
	-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

const linearSearch = (arr, target) => {
	// iterate through all elements to find target
	for (let i = 0; i < arr.length; i++) {
		// if target found return index
		if (arr[i] === target) {
			return i;
		}
	}
	// return -1 if not found
	return -1;
};

// run code
let result = linearSearch(arr1, 0);

// check result and log findings
if (result !== -1) console.log(`element found at index ${result}`);
else console.log(`element not found`);

/*
   The worse case time complexity of the above algorithm is O(n).

   Very slow compared to other search algos but the most basic
   and easiest to implement.
   
 */
