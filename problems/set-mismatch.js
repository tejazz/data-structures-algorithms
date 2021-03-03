// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3658/

var findErrorNums = function (nums) {
    if (nums.length === 0) return [];

    let numHash = {};
    let final = new Array(2).fill(0);

    for (let i = 0; i < nums.length; i++) {
        (numHash[nums[i]]) ? numHash[nums[i]] += 1 : numHash[nums[i]] = 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!numHash[i + 1]) final[1] = i + 1;

        if (numHash[i + 1] === 2) final[0] = i + 1;
    }

    return final;
};

console.log(findErrorNums([1, 1]));  // [1, 2]
console.log(findErrorNums([1, 2, 2, 4]));  // [2, 3]
console.log(findErrorNums([2, 2]));  // [2, 1]
console.log(findErrorNums([3, 2, 2]));  // [2, 1]
console.log(findErrorNums([3, 2, 3, 4, 6, 5]));  // [3, 1]