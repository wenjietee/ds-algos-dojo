const arrayToSort = [1, 3, 5, 2, -2, 4, 6, 8, 7, 10, 8, 9, 0, -3, -1];

const selectionSort = (array) => {
	//  iterate through each element
	for (let i = 0; i < array.length; i++) {
		// set the min index
		let minIndex = i;
		// for each element compare element
		for (let j = 1; j < array.length; j++) {
			if (array[j] < array[j - 1]) {
				// set new min index with current index
				minIndex = j;
				// swap elements
				[array[j], array[j - 1]] = [array[j - 1], array[j]];
			}
		}
	}

	console.log(array);
};

selectionSort(arrayToSort);

/*
It's not a stable sorting algorithim 
Big O worst case space complexity of O(1)
Big O worst case time complexity of O(n^2)
*/
