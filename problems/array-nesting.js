// https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/636/week-1-september-1st-september-7th/3960/

// NOTE: For large inputs, you have to find the cycle of where subsequent sequences tend to start from
// eg: [5, 4, 0, 3, 1, 6, 2]
// Nested Arrays:
// [ 5, 6, 2, 0 ]
// [ 4, 1 ]
// [ 0, 5, 6, 2 ]   <-- Cycle Present in #1
// [ 3 ]
// [ 1, 4 ]   <-- Cycle Present in #2
// [ 6, 2, 0, 5 ]   <-- Cycle Present in #1
// [ 2, 0, 5, 6 ]   <-- Cycle Present in #1

var arrayNesting = function (nums) {
    if (nums.length === 0) return 0;

    let maxLength = 0;
    let visited = {};

    for (let i = 0; i < nums.length; i++) {
        let hash = {};

        if (visited[nums[i]]) continue;

        hash[nums[i]] = 1;
        let nest = [nums[i]];
        let current = nums[nums[i]];
        visited[nums[i]] = 1;
        visited[nums[nums[i]]] = 1;

        while (!hash[current]) {
            hash[current] = 1;
            visited[current] = 1;
            nest.push(current);
            current = nums[current];
        }

        console.log(nest)
        maxLength = Math.max(maxLength, nest.length);
    }

    return maxLength;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));    // 4
console.log(arrayNesting([0, 1, 2]));    // 1