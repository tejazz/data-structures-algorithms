// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3505/

var find132pattern = function (nums) {
    let minVal = new Array(nums.length);
    let maxVal = new Array(nums.length);
    let stack = [];

    minVal[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        minVal[i] = Math.min(minVal[i - 1], nums[i]);
    }

    // use stack to find optimal solution
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > minVal[i]) {
            while (stack.length !== 0 && stack[stack.length - 1] <= minVal[i]) {
                stack.pop();
            }
            if (stack.length !== 0 && stack[stack.length - 1] < nums[i]) return true;

            stack.push(nums[i]);
        }
    }
    return false;
};

console.log(find132pattern([1, 2, 3, 4])); // false
console.log(find132pattern([3, 1, 4, 2])); // true
console.log(find132pattern([3, 5, 0, 3, 4])); // true
console.log(find132pattern([-2, 1, 2, -2, 1, 2])); // true
