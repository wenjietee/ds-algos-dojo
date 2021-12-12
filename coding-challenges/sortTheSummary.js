/**
 * Sort The Summary
 * Given an array of integers, create a 2D array where
 * the first element is a distinct value from the array
 * and the second element is the value's frequency.
 * If multiple values have the same frequency, sort in ascending.
 */

const sortTheSummary = (arr) => {
	const summary = [];
	const hash = {};

	//iterate array to get values to store in hash
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] in hash) {
			hash[arr[i]]++;
		} else {
			hash[arr[i]] = 1;
		}
	}

	// iterate key-val pairs in hash and add them into summary
	for (let key in hash) {
		summary.push([key, hash[key]]);
	}

	// sort summary in descending frequency
	// if multiple values have same frequency, sort in ascending
	summary.sort((a, b) => {
		return b[1] - a[1];
	});

	return summary;
};

const sortThis1 = [1, 3, 4, 5, 1, 1, 1, 15, 3, 3, 3, 6, 8, 2, 2, 2, 1, 6];
const sortThis2 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

console.log(sortTheSummary(sortThis1));
console.log(sortTheSummary(sortThis2));
