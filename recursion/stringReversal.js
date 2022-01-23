const reverseString = (str) => {
	// base case
	if (str === '') {
		return '';
	}
	// recursion
	return reverseString(str.substring(1)) + str.charAt(0);
};

console.log(reverseString('hello')); //olleh
console.log(reverseString('world')); //dlrow
