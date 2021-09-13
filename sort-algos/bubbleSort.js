const bubbleSort = (array) => {
	// iterate through each element
	for (let i = 0; i < array.length; i++) {
		// for each element check if ajacent element is bigger than right
		for (let j = 1; j < array.length; j++) {
			if (array[j] < array[j - 1]) {
				[array[j], array[j - 1]] = [array[j - 1], array[j]];
			}
		}
	}
	return array;
};

module.exports = bubbleSort;

/*
It's a stable sorting algorithim 
Big O worst case space complexity of O(1)
Big O worst case time complexity of O(n^2)
*/
