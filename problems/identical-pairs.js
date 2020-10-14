// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
    let map = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            count += map[nums[i]].length;
            map[nums[i]].push(i);
            continue;
        }

        map[nums[i]] = [i];
    }

    return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));  // 4
console.log(numIdenticalPairs([1, 1, 1, 1]));  // 6
console.log(numIdenticalPairs([1, 2, 3]));  // 0
