const isPalidrome = (str) => {
	//base case
	if (str.length === 0 || str.length === 1) {
		return true;
	}

	//recursion, narrow down the string and check if chars match
	if (str.charAt(0) === str.charAt(str.length - 1)) {
		return isPalidrome(str.substring(1, str.length - 1));
	}

	//base case for non palidrome
	return false;
};

console.log(isPalidrome('racecar'));
console.log(isPalidrome('helicopter'));
