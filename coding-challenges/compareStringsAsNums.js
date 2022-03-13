// Given 2 non-negative integer as strings
// write a function to compare the if the first number is larger than the second

const compare = (str1, str2) => {
	// compare length of str first to determine which is larger
	if (str1.length > str2.length) return true;

	// if both str have same length iterate and compare each character
	if (str1.length === str2.length) {
		for (let i = 0; i < str1.length; i++) {
			if (str1[i] > str2[i]) return true;
		}
	}

	return false;
};

console.log(compare('112', '111'));
console.log(compare('525', '111'));
console.log(compare('11', '0'));
console.log(compare('1', '1'));
