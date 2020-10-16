// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

var findDisappearedNumbers = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i] < 0 ? nums[i] * -1 : nums[i];
        
        if (nums[current - 1] > 0) {
            nums[current - 1] *= -1;
        }
    }
    
     for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};
