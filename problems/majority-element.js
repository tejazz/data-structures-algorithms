// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    let map = {};
    let majority = 0;
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }
    
    Object.keys(map).map((key) => {
        if (map[key] > Math.floor(nums.length/2)) {
            majority = key;
        }
    });
    
    return majority;
};