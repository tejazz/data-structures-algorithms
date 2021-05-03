// https://leetcode.com/problems/3sum

var threeSum = function(nums) {
    if (nums.length < 3) return [];
    
    let results = [];
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];
        
        let start = i + 1;
        let end = nums.length - 1;
        
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (sum === target) {
                let findIndex = results.findIndex(el => el[0] === nums[i] && el[1] === nums[start] && el[2] === nums[end]);

                if (findIndex === -1) results.push([nums[i], nums[start], nums[end]]);
                
                start++;
                end--;
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    
    return results;
};

console.log(threeSum([-1,0,1,2,-1,-4]));  // [[-1,-1,2],[-1,0,1]]
