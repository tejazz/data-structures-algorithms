// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3488/

var search = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let mid = Math.floor((low + high)/2);
    
    while (low <= high) {
        mid = Math.floor((low + high)/2)
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1;
};