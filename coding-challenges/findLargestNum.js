// find largest num in  array
const numArr = [1, 3, 5, 2, -2, 4, 6, 8, 7, 10, 8, 9, 0, -3, -1];

const findLargestNum = (arr) => {
	// shallow copy of the array
	const arrToFind = arr.slice(0, arr.length - 1);
	// find largest num and bring to front , using js methods
	arrToFind.sort((a, b) => a - b).reverse();
	// log the result
	console.log(`The largest number in this array is ${arrToFind[0]}`);
};

findLargestNum(numArr);
