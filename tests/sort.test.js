// sorting algos
const bubbleSort = require('../sort-algos/bubbleSort');
const insertionSort = require('../sort-algos/insertionSort');
const mergeSort = require('../sort-algos/mergeSort');
const quickSort = require('../sort-algos/quickSort');

// test inputs
const input1 = [3, 2, 1, 0];
const input2 = [1, 3, 5, 2, -2, 4, 6, 8, 7, 10, 8, 9, 0, -3, -1];

// expected outputs
const result1 = [0, 1, 2, 3];
const result2 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

describe('Sorting', () => {
	// Bubble Sort
	describe('Bubble sort should', () => {
		test('properly sort an array of numbers from smallest to largest', () => {
			expect(bubbleSort(input1)).toEqual(result1);
			expect(bubbleSort(input2)).toEqual(result2);
		});
	});

	// Insertion Sort
	describe('Insertion sort should', () => {
		test('properly sort an array of numbers from smallest to largest', () => {
			expect(insertionSort(input1)).toEqual(result1);
			expect(insertionSort(input2)).toEqual(result2);
		});
	});

	// Merge Sort
	describe('Merge sort should', () => {
		test('properly sort an array of numbers from smallest to largest', () => {
			expect(mergeSort(input1)).toEqual(result1);
			expect(mergeSort(input2)).toEqual(result2);
		});
	});

	// Quick Sort
	describe('Quick sort should', () => {
		test('properly sort an array of numbers from smallest to largest', () => {
			expect(quickSort(input1)).toEqual(result1);
			expect(quickSort(input2)).toEqual(result2);
		});
	});
});
