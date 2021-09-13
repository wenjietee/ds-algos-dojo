const insertionSort = (array) => {
	// iterate through each element
	for (let i = 0; i < array.length; i++) {
		let j = i;
		// keep swapping if left element is bigger than right
		while (array[j] < array[j - 1]) {
			[array[j], array[j - 1]] = [array[j - 1], array[j]];
			// move down the index
			j -= 1;
		}
	}
	return array;
};

module.exports = insertionSort;

/*
It's a stable sorting algorithim 
Big O worst case space complexity of O(1)
Big O worst case time complexity of O(n^2)
*/
