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

module.exports = linearSearch;
/*
   The worse case time complexity of the above algorithm is O(n).

   Very slow compared to other search algos but the most basic
   and easiest to implement.
   
 */
