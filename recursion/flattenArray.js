const arr = [1, 2, [3, 4], [5, [6, [7]]], [[[[[8]]]]]];

// from mozilla https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
function flatDeep(arr, d = 1) {
	return d > 0
		? arr.reduce(
				(acc, val) =>
					acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
				[]
		  )
		: arr.slice();
}

// manual method w/ recursion
// https://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
const flatten = (arr) => {
	// array to hold flattened contents
	let result = [];

	// iterate the nested array
	for (let i = 0; i < arr.length; i++) {
		// check if element is an array
		if (Array.isArray(arr[i])) {
			// flatten it by concat-ing the array with result recursively
			result = result.concat(flatten(arr[i]));
		} else {
			// if element not array push into result
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(flatten(arr));
console.log(flatDeep(arr, Infinity));
