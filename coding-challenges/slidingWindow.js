/**
 * Given an array of integers, find the subarray with the maximum sum.
 */
const slidingWindow = (nums, size) => {
    if (nums.length < size) return 0;

    let total = 0;
    let maxTotal = 0;

    for (let i = 0; i < size; i++) {
        total += nums[i];
    }

    maxTotal = total;

    for (let i = size; i < nums.length; i++) {
        total -= nums[i - size];
        total += nums[i];
        maxTotal = Math.max(maxTotal, total);
    }
    return maxTotal;
};

console.log(slidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
