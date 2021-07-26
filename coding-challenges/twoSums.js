const nums = [2, 7, 11, 15];
let target = 9;

const twoSums = (nums, target) => {
	// brute  force
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = 1; j < nums.length; j++) {
	// 		let sum = nums[i] + nums[j];
	// 		if (sum === target) {
	// 			return [i, j];
	// 		}
	// 	}
	// }

	// hash table
	const hash = {};
	for (let i = 0; i < nums.length; i++) {
		let remainder = target - nums[i];
		console.log(i, nums[i]);
		if (remainder in hash) {
			return [hash[remainder], i];
		} else {
			hash[nums[i]] = i;
		}
	}

	return -1;
};

console.log(twoSums(nums, target));
