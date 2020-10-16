// https://leetcode.com/problems/top-k-frequent-elements

// Naive Solution
var topKFrequent = function (nums, k) {
    let hashMap = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] ? hashMap[nums[i]] += 1 : hashMap[nums[i]] = 1;
    }

    let sortArray = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

    sortArray.map((key) => {
        if (k === 0) return;

        result.push(parseInt(key[0]));
        k--;
    });

    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));    // [1, 2]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));    // [-1, 2]
