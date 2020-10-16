// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    if (nums.length === 0) return nums;
    
    let first = nums.slice(0, n);
    let second = nums.slice(n);
    let result = [];

    for (let i = 0; i < first.length; i++) {
        result.push(first[i]);
        result.push(second[i]);
    }

    return result;
};

console.log(shuffle([2,5,1,3,4,7], 3));     // [2,3,5,4,1,7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4));     // [1,4,2,3,3,2,4,1]
console.log(shuffle([1,1,2,2], 2));     // [1,2,1,2]
