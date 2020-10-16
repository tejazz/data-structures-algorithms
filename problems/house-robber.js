// https://leetcode.com/problems/house-robber/submissions/

var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }

    return dp[nums.length];
};

console.log(rob([1])); // 1
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([1, 3, 1])); // 3
console.log(rob([])); // 0
console.log(rob([1, 2])); // 2
console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3])); // 39