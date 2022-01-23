const decimalToBinary = (decimal, result) => {
	//base case, we reached the end of the decimal thus return result
	if (decimal === 0) {
		return result;
	}

	result = (decimal % 2) + result;

	//recursion
	return decimalToBinary(parseInt(decimal / 2), result);
};

console.log(decimalToBinary(1, '')); //1
console.log(decimalToBinary(2, '')); //10
console.log(decimalToBinary(500, '')); //111110100
