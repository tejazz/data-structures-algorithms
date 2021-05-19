/* Recursion */

/* Dynamic Programming */

// -------------------------

// Write a function fib(n) that takes a number as an argument. The function should return n-th number of fibonacci sequence
// e.g: fib(n): 1, 1, 2, 3, 5, 8, 13, .... where fib(6) = 8

// General
// TC: O(2^n), SC: O(n)

// const fib = (n) => {
//     if (n <= 2) return 1;

//     return fib(n - 1) + fib(n - 2);
// };

// Memoized
// TC: O(2^n), SC: O(n)

// const fib = (n, memo = {}) => {
//     if (memo[n]) return memo[n];
//     if (n <= 2) return 1;

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// };

// console.log(fib(50));

// -------------------------


