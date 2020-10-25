// https://leetcode.com/problems/contains-duplicate-iii/

// TC: O(n^2)
// var containsNearbyAlmostDuplicate = function (nums, k, t) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (Math.abs(i-j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };

var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        let end = i + k >= nums.length ? nums.length - 1 : i + k;

        for (let j = end; j >= i + 1; j--) {
            if (Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }

    return false;
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));    // true
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));    // true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));    // false