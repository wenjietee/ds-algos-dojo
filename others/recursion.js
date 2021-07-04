// sum of numbers

const numsToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

console.log(sumOfNumbers(numsToSum));

// check if number is even

let testEvenNum = 10;

const isEven = (num) => {
	// base case to check if there is a remainder
	// no remainder
	if (num === 0) {
		return 'number is even';
	}
	// has remainder
	if (num === 1) {
		return 'number is odd';
	}
	// recursively decrement and check for remainder
	return isEven(num - 2);
};

console.log(isEven(testEvenNum));

// factorial

let fNum = 5;

const factorial = (num, total) => {
	// set total variable, set to 1 if undefined
	total = total || 1;

	// base case if num is 1 return the total
	if (num === 1) {
		return total;
	}

	// recursively decrement the num input and multiply the total
	return factorial(num - 1, (total *= num));
};

console.log(factorial(fNum));
