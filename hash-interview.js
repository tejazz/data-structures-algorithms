// FIRST RECURRING NUMBER

// Given an array: [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Output: 2

// Given an array: [2, 3, 4, 5]
// Output: undefined

// const firstRecurringNumber = (nums) => {
//     let mapArray = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (mapArray[nums[i]]) {
//             return nums[i];
//         } 
//         mapArray[nums[i]] = true;
//     }

//     return undefined;
// }

// TC: O(n)
// SC: O(n)

// alternative => with brute
// const firstRecurringNumber = (nums) => {
//     let lowestRecurringIndex = nums.length - 1;
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] ===  nums[j]) {
//                 if (j < lowestRecurringIndex) {
//                     lowestRecurringIndex = j;
//                     count++;
//                 }
//             }
//         }
//     }

//     return count > 0 ? nums[lowestRecurringIndex] : undefined;
// }

// SC: O(1);
// TC: O(n*2)

// console.log(firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringNumber([2, 1, 1, 3, 5, 5, 2, 2, 2, 3, 4, 5]));
