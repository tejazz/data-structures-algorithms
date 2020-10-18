// https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function (nums, k) {
    let result = false;
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] >= 0) {
            if (i - hashMap[nums[i]] <= k) result = true;
        }

        hashMap[nums[i]] = i;
    }

    return result;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false
console.log(containsNearbyDuplicate([99, 99], 2)); // true
