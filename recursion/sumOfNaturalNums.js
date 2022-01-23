const sumOfNaturalNums = (num) => {
	//base case
	if (num <= 1) {
		return num;
	}

	//recursion
	return sumOfNaturalNums(num - 1) + num;
};

console.log(sumOfNaturalNums(5));
console.log(sumOfNaturalNums(10));
console.log(sumOfNaturalNums(100));
