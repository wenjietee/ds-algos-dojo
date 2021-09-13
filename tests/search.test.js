// search algos
const linearSearch = require('../search-algos/linearSearch');
const binarySearch = require('../search-algos/binarySearch');

// test inputs

// array to search
const testArr = [
	-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
// targets
let target1 = 15;
let target2 = -4;
let target3 = 1000;
let target4 = Infinity;
// test outputs
let result1 = 19;
let result2 = 0;

describe('Searching', () => {
	// Linear Search
	describe('Linear search', () => {
		test('should find and return the index if the target is found', () => {
			expect(linearSearch(testArr, target1)).toBe(result1);
			expect(linearSearch(testArr, target2)).toBe(result2);
		});
		test('should return -1 if the target is not found', () => {
			expect(linearSearch(testArr, target3)).toBe(-1);
			expect(binarySearch(testArr, target4)).toBe(-1);
		});
	});
	// Binary Search
	describe('Binary search', () => {
		test('should find and return the index if the target is found', () => {
			expect(binarySearch(testArr, target1)).toBe(result1);
			expect(binarySearch(testArr, target2)).toBe(result2);
		});
		test('should return -1 if the target is not found', () => {
			expect(binarySearch(testArr, target3)).toBe(-1);
			expect(binarySearch(testArr, target4)).toBe(-1);
		});
	});
});
