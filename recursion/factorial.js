let num = 5;

const factorial = (n) => {
	// base case if num is 1 return the total
	if (n === 1) {
		return n;
	}
	// recursively decrement the num input and multiply the total
	return n * factorial(n - 1);
};

console.log(factorial(num));
