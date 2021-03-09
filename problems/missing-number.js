// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3659/

var missingNumber = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0] === 1 ? 0 : 1;

    nums.sort((a,b) => a - b);

    if (nums[0] !== 0) return 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] !== nums[i] + 1) return nums[i] + 1; 
    }

    return nums.length;
};

console.log(missingNumber([0]));   // 1
console.log(missingNumber([9, 4, 5, 2, 3, 1, 6, 7, 0]));   // 8
console.log(missingNumber([2, 1, 3, 0]));   // 4
console.log(missingNumber([0, 2]));   // 1
console.log(missingNumber([1, 2]));   // 0
