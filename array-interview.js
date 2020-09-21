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

var maxSubArray = function(nums) {
    
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
