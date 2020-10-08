// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i] < 0 ? nums[i] * -1 : nums[i];

        if (nums[currentNum - 1] < 0) {
            return currentNum;
        }

        nums[currentNum - 1] *= -1;
    }
};

console.log(findDuplicate([2, 1, 1])); // 3