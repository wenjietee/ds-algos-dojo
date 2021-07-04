let num = 17;

const isFibonacci = (num) => {
	// base case
	if (num === 0 || num === 1) {
		return true;
	}
	// recursion
	return isFibonacci(num - 1) - isFibonacci(num - 2);
};

if (isFibonacci(num)) {
	console.log(num, 'is fibonacci');
} else {
	console.log(num, 'is not fibonacci');
}
