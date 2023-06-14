// without memoization
const startTime1 = performance.now();

const fib = (n) => {
    if (n === 0 || n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(30));

const endTime1 = performance.now();

console.log(`fib took ${endTime1 - startTime1} miliseconds without memo`);

// with memoization
const startTime2 = performance.now();

const fibMemo = (n, cache = null) => {
    if (n === 0 || n === 1) return 1;

    if (cache === null) cache = {};
    if (n in cache) return cache[n];

    result = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);

    cache[n] = result;

    return result;
};

console.log(fibMemo(30));

const endTime2 = performance.now();

console.log(`fib took ${endTime2 - startTime2} miliseconds with memo`);

// with bottom up approach memo (to resolve space issue)
const startTime3 = performance.now();

const fibMemoBU = (n) => {
    let a = 1; // fib(i-2)
    let b = 1; // fib(i-1)

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};
console.log(fibMemoBU(30));

const endTime3 = performance.now();

console.log(
    `fib took ${
        endTime3 - startTime3
    } miliseconds with memo + bottom up approach`
);
