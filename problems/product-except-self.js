// https://leetcode.com/problems/product-of-array-except-self/

// TC: O(n)
var productExceptSelf = function(nums) {
    let final = [];
    let productLeft = [];
    let productRight = [];
    
    productLeft = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        productLeft.push(productLeft[i - 1] * nums[i]);
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (productRight.length === 0) {
            productRight[i] = nums[i];
        } else {
            productRight[i] = productRight[i + 1] * nums[i];
        }
    }
    
    final[0] = productRight[1];
    
    for (let i = 1; i < nums.length - 1; i++) {
        final.push(productLeft[i -1] * productRight[i + 1]);    
    }
    
    final.push(productLeft[nums.length - 2]);
    
    return final;
};
