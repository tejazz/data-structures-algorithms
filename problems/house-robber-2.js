// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3494/

var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    return Math.max(solve(nums.slice(1)), solve(nums.slice(0, nums.length - 1)));
};

function solve(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }

    return dp[nums.length];
}

console.log(rob([2, 3, 2]));    // 3 
console.log(rob([1, 2, 3, 1]));    // 4 
console.log(rob([0]));    // 0