// https://leetcode.com/problems/maximum-erasure-value

var maximumUniqueSubarray = function(nums) {
    if (nums.length === 0) return 0;
    
    let left = 0;
    let right = 0;
    let max = nums[0];
    let unique = {};
    let runningSum = 0;

    while (right < nums.length) {
        if (unique[nums[right]] >= 0) {
            delete unique[nums[left]];
            runningSum -= nums[left];
            left++;
        } else {
            unique[nums[right]] = right;
            runningSum += nums[right];

            if (runningSum > max) max = runningSum;
            right++;
        }
    }

    return max;
};

console.log(maximumUniqueSubarray(nums));
