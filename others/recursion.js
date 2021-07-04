// ----- sum of numbers -----

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

// ----- check if number is even -----

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

// ----- factorial -----

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

// ----- step counting -----

let steps = 4;

const countSteps = (steps) => {
	// base case, if steps takes more than 3 return steps
	if (steps <= 2) {
		return steps;
	}
	// if steps take 1 step, -1  to reduce number of steps
	// if steps take 2 steps, -2 to reduce number of steps
	return countSteps(steps - 1) + countSteps(steps - 2);
};

console.log(countSteps(steps));

// ----- fibonacci -----

let testFibNum = 17;

const isFibonacci = (num) => {
	// base case
	if (num === 0 || num === 1) {
		return true;
	}
	// recursion
	return isFibonacci(num - 1) - isFibonacci(num - 2);
};

if (isFibonacci(testFibNum)) {
	console.log(testFibNum, 'is fibonacci');
} else {
	console.log(testFibNum, 'is not fibonacci');
}
