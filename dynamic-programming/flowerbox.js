/**
 * Maximize the total height of all the flowers being planted
 */

const flowerbox = (nutrientValues) => {
    let a = 0; // f(n-2)
    let b = 0; //f(n-1)

    nutrientValues.forEach((value) => {
        [a, b] = [b, Math.max(a + value, b)];
    });

    return b;
};

console.log(flowerbox([3, 10, 3, 1, 2]));

console.log(flowerbox([9, 10, 9]));
