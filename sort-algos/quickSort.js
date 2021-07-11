const arrayToSort = [1, 3, 5, 2, -2, 4, 6, 8, 7, 10, 8, 9, 0, -3, -1];

const quickSort = (array) => {
	// base case: check if array is less than or equal to 1
	if (array.length <= 1) {
		return array;
	}

	// set last item of the array as pivot
	const pivot = array[array.length - 1];

	// init left and right sub arrays
	const leftSide = [];
	const rightSide = [];

	// make a shallow copy of the array and loop it
	for (const element of array.slice(0, array.length - 1)) {
		// if element is less than pivot assign left, if greater assign right
		element < pivot ? leftSide.push(element) : rightSide.push(element);
	}

	// recursively call quicksort on left and right arrays with pivot in the middle
	return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
};

// another quicksort implementation https://flaviocopes.com/quicksort-javascript/

// const quickSort = (originalList) => {
// 	const list = [...originalList];

// 	if (list.length < 2) {
// 		return list;
// 	}

// 	const pivot = list[0];

// 	const smaller = list.filter((item) => item < pivot);
// 	const bigger = list.filter((item) => item > pivot);

// 	return [...quickSort(smaller), pivot, ...quickSort(bigger)];
// };

console.log(quickSort(arrayToSort));

/*
It's not a stable sorting algorithim 
Big O worst case space complexity of O(log n) requires alot of space
Big O worst case time complexity of O(n^2)
*/
