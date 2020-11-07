// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3521/

// Naive - Brute Force
// O(n^2)
// var smallestDivisor = function (nums, threshold) {
//     let sum = Number.MAX_SAFE_INTEGER;
//     let divisor = 1;

//     while (sum > threshold) {
//         sum = 0;

//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] % divisor !== 0) {
//                 sum += Math.floor(nums[i] / divisor) + 1;
//             } else {
//                 sum += nums[i] / divisor;
//             }
//         }
``
//         divisor++;
//     }

//     return --divisor;
// };

var smallestDivisor = function (nums, threshold) {
    let low = 1;
    let high = nums[nums.length - 1];

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        let computeSum = divisorSum(nums, mid);
        if (computeSum > threshold) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

function divisorSum(nums, divisor) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % divisor !== 0) {
            sum += Math.floor(nums[i] / divisor) + 1;
        } else {
            sum += nums[i] / divisor;
        }
    }

    return sum;
}

console.log(smallestDivisor([1, 2, 5, 9], 6));     //5
console.log(smallestDivisor([2, 3, 5, 7, 11], 11));     //3
console.log(smallestDivisor([19], 5));     //4
console.log(smallestDivisor([1, 2, 3], 6));     //1
