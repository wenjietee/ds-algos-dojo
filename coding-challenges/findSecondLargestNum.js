// find second largest num in  array
// Array can be empty
// Array can have single element
// Array can have repeating elements

const arr1 = [1, 3, 4, 5, 0, 2];
const arr2 = [];
const arr3 = [2, 2, 1];
const arr4 = [2];

// solution 1 (largest number by value)
const findSecondLargestNum1 = (arr) => {
	let result = null;

	// check if array is empty or has single element
	if (arr.length !== 0 || arr.length !== 1) {
		// sort largest num in descending
		arr.sort((a, b) => a - b).reverse();

		// find second largest
		for (let i = 0; i < arr.length; i++) {
			if (arr[0] > arr[i]) {
				result = arr[i];
				break;
			}
		}
	}
	console.log(`The second largest number in array is ${result}`);
};

findSecondLargestNum1(arr1);
findSecondLargestNum1(arr2);
findSecondLargestNum1(arr3);
findSecondLargestNum1(arr4);

// solution 2 (largest number by order)
const findSecondLargestNum2 = (arr) => {
	let largest = null;
	let secondLargest = null;

	for (let i = 0; i < arr.length; i++) {
		if (largest === null) {
			largest = arr[i];
		} else if (arr[i] > largest) {
			secondLargest = largest;
			largest = arr[i];
		} else if (secondLargest === null) {
			secondLargest = arr[i];
		} else if (arr[i] > secondLargest) {
			secondLargest = arr[i];
		}
	}
	console.log(`The second largest number in array is ${secondLargest}`);
};

findSecondLargestNum2(arr1);
findSecondLargestNum2(arr2);
findSecondLargestNum2(arr3);
findSecondLargestNum2(arr4);
