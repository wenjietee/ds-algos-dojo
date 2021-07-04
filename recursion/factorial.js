let num = 5;

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

console.log(factorial(num));
