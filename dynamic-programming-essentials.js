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
// TC: O(n), SC: O(n)

// const fib = (n, memo = {}) => {
//     if (memo[n]) return memo[n];
//     if (n <= 2) return 1;

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// };

// console.log(fib(50));

// -------------------------

// gridTraveler => Memoization

// Say that you are a traveler on a 2D grid and you begin in top-left corner and your goal is to travel to bottom-right. 
// You can only move down or right. How many ways can you travel on a grid of m*n?

// General
// TC: O(2^(n + m)), SC: O(m + n)

// const gridTraveler = (m, n) => {
//     if (m === 0 || n === 0) return 0;
//     if (m === 1 && n === 1) return 1;

//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1); 
// };

// Memoized
// TC: O(m*n), SC: O(m + n)

// const gridTraveler = (m, n, memo = {}) => {
//     let key = `${m},${n}`;
//     if (memo[key]) return memo[key];
//     if (m === 0 || n === 0) return 0;
//     if (m === 1 && n === 1) return 1;

//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); 
//     return memo[key];
// };

// console.log(gridTraveler(18, 18));

// -------------------------

/*
    Memoization Recipe

    1. Make it work
    - Visualize the problems as a tree
    - Implement tree using recursion
    - Test it

    2. Make it efficient
    - Add memo object
    - Add base case to return memo values
    - Store return values into memo
*/

// -------------------------

// canSum => Memoization

// Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of values
// It should return a boolean if it possible or not to generate the targetSum using numbers in array

// General
// TC: O(n^m), SC: O(m)

// const canSum = (targetSum, numbers) => {
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let i = 0; i < numbers.length; i++) {
//         let remainder = targetSum - numbers[i];

//         if (canSum(remainder, numbers)) return true;
//     }

//     return false;
// };

// Memoized
// TC: O(m*n), SC: O(m)

// const canSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let i = 0; i < numbers.length; i++) {
//         let remainder = targetSum - numbers[i];
//         memo[targetSum] = canSum(remainder, numbers, memo);

//         if (memo[targetSum]) {
//             return true; 
//         }
//     }

//     memo[targetSum] = false;
//     return false;
// };

// console.log(canSum(7, [5, 3, 4, 7]));  // true
// console.log(canSum(7, [2, 4]));  // false
// console.log(canSum(300, [7, 14]));  // false

// -------------------------

// howSum - Memoization


