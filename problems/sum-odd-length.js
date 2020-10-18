// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// First Attempt
// var sumOddLengthSubarrays = function (arr) {
//     let sum = 0;

//     for (let i = 1; i <= arr.length; i = i + 2) {
//         for (let j = 0; j < arr.length; j++) {
//             let subArray = arr.slice(j, j + i);

//             if (subArray.length === i) {
//                 subArray.map(el => sum += el);
//             }
//         }
//     }

//     return sum;
// };

// Second Attempt
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j + 1 - i) % 2 !== 0) {
                let subArray = i === j ? [arr[i]] : arr.slice(i, j + 1);
                subArray.map(el => sum += el);
            }
        }
    }

    return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));   // 58
// console.log(sumOddLengthSubarrays([1, 2]));   // 3
// console.log(sumOddLengthSubarrays([10, 11, 12]));   // 66
