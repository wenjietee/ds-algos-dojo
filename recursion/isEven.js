let num = 10;

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

console.log(isEven(num));
