const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = (array, sum) => {
	// set sum variable, set to 0 if undefined
	sum = sum || 0;
	// base case, if array is empty return sum
	if (array.length === 0) {
		return sum;
	}
	// remove item from array
	sum += array.pop();

	// recursively call itself
	return sumOfNumbers(array, sum);
};

console.log(sumOfNumbers(numsArray));
