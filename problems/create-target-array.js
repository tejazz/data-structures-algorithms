// https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
    let result  = [];
    
    for (let i = 0; i < nums.length; i++) {
        result.splice(index[i], 0, nums[i]);
    }
    
    return result;
};
