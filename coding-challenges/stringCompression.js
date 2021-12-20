/**
 * If a character occurs n>1 times in a row,then it will be represented by {char}{num},
 * where num is the value of the occurance.
 * For example, if the substring is a sequence of  'a' ("aaaa"),
 * it will be represented as "a4".
 * If a character occurs exactly one time in a row,
 * then it will be simply represented as {char}.
 * For example, if the substring is "a", then it will be represented as "a".
 */

const stringCompression = (str) => {
	let compressed = '';

	for (let i = 0; i < str.length; i++) {
		let count = 1;
		while (str[i] === str[i + 1] && i < str.length - 1) {
			count++;
			i++;
		}
		if (count === 1) {
			compressed += str[i];
		} else {
			compressed += `${str[i]}${count}`;
		}
	}
	return compressed;
};

console.log(stringCompression('aaaabbbcccabc')); //a4b3c3abc
