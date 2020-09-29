// REVERSE A STRING

// function reverse(str) {
//     // check input
//     if (!str || str.length < 2 || typeof str !=='string') {
//         return 'hmm that is not good';
//     }

//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }

// console.log(reverse('Hi! My name is Tarique Ejaz'));

// MERGE SORTED ARRAYS

// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

// straight => not the best
// function mergeSortedArrays(arr1, arr2) {
//     let combined = [...arr1, ...arr2];
//     return combined.sort((a, b) => a - b);
// }

// more fleshed out version
// function mergeSortedArrays(arr1, arr2) {
//     const mergedArray = [];
//     let firstArrItem = arr1[0];
//     let secondArrItem = arr2[0];
//     let i = 1;
//     let j = 1;

//     // check inputs
//     if (arr1.length === 0) {
//         return arr2;
//     }

//     if (arr2.length === 0) {
//         return arr1;
//     }

//     while(firstArrItem || secondArrItem) {
//         if (!secondArrItem || firstArrItem <= secondArrItem) {
//             mergedArray.push(firstArrItem);
//             firstArrItem = arr1[i];
//             i++;
//         } else {
//             mergedArray.push(secondArrItem);
//             secondArrItem = arr2[j];
//             j++;
//         }
//     }

//     return mergedArray;
// }

// TWO SUMS

// var twoSum = function(nums, target) {
//     let indexMap = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (indexMap.hasOwnProperty(nums[i])) {
//             return [indexMap[nums[i]], i];
//         }

//         indexMap[target - nums[i]] = i;
//     } 
// };

// console.log(twoSum([3,3], 6));

// MAXIMUM SUB ARRAY

// var maxSubArray = function(nums) {
//     // check for input
//     if (nums.length === 0 || nums.length === 1) {
//         return nums[0] || 0;
//     }

//     let i = 0;
//     let sumMax = nums[i];
//     let arrMax = [];

//     while(i < nums.length) {
//         let subSum = nums[i];
//         let subMax = nums[i];
//         let runArr = [nums[i]];
//         let maxArr = [];

//         for (let j = i + 1; j < nums.length; j++) {
//             subSum += nums[j];
//             runArr.push(nums[j]);

//             if (subMax < subSum) {
//                 subMax = subSum;
//                 maxArr = runArr;
//             }
//         }

//         // check with main branch
//         if (subMax > sumMax) {
//             sumMax = subMax;
//             arrMax = maxArr;
//         }   
//         i++;
//     }

//     return sumMax;
// };

// O(n^2) => Slow

// Faster alternative
// var maxSubArray = function (nums) {
//     let max1 = nums[0];
//     let max2 = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         max1 = Math.max(nums[i], max1 + nums[i])

//         if (max1 > max2) {
//             max2 = max1;
//         }
//     }
//     return max2;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// MOVE ZEROES

// var moveZeroes = function(nums) {
//     for (let i =nums.length - 1; i >= 0; i--) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//         }
//     }

//     return nums;
// };

// console.log(moveZeroes([0, 0, 1]));

// CONTAINS DUPLICATES

// var containsDuplicate = function(nums) {
//     let mapSet = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (mapSet.hasOwnProperty(nums[i])) {
//             return true;
//         }

//         mapSet[nums[i]] = true;
//     }

//     return false;
// };

// Single Line Faster Alternative

// var containsDuplicate = function(nums) {
//     return !(nums.length == new Set(nums).size);
// }

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// ROTATE ARRAY

// var rotate = function (nums, k) {
//     let i = 0;

//     while (i < 3) {
//         nums.unshift(nums[nums.length - 1]);
//         nums.splice(nums.length - 1, 1);
//         i++;
//     }

//     return nums;
// };

// alternative

// var rotate = function (nums, k) {
//     let section = nums.slice(nums.length - k, nums.length);
//     let main = nums.slice(0, nums.length - k);

//     return [...section, ...main];
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
