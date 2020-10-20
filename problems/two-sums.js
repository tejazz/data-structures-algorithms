// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/

var twoSum = function (nums, target) {
    let hashMap ={};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] >= 0) {
            return [hashMap[nums[i]], i];
        }

        hashMap[target - nums[i]] = i;
    }
    console.log(hashMap);
};

console.log(twoSum([2, 7, 11, 15], 9));   // [0,1]
console.log(twoSum([3, 2, 4], 6));   // [1,2]
