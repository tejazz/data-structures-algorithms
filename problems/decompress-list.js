// https://leetcode.com/problems/decompress-run-length-encoded-list

var decompressRLElist = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length - 1; i = i + 2) {
        let freq = nums[i];
        let value = nums[i + 1];
        
        while (freq > 0) {
            result.push(value);
            freq--;
        }
    }
    
    return result;
};