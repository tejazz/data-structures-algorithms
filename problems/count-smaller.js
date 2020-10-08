// https://leetcode.com/problems/count-of-smaller-numbers-after-self

// TC: O(n^2)
var countSmaller = function(nums) {
    let final = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        
        final.push(count);
    }
    
    return final;
};