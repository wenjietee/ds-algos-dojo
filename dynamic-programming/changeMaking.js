const changeMaking = (denominations, target) => {
    denominations.sort((a, b) => a - b);

    const arr = new Array(target + 1);
    arr.fill(target + 1);
    arr[0] = 0;

    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < denominations.length; j++) {
            if (denominations[j] <= i) {
                arr[i] = Math.min(arr[i], 1 + arr[i - denominations[j]]);
            } else {
                break;
            }
        }
    }
    return arr[target] > target ? -1 : arr[target];
};

console.log(changeMaking([1, 5, 12, 19], 16));
console.log(changeMaking([1, 2, 5], 11));
console.log(changeMaking([2], 3));
