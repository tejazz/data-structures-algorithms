// https://leetcode.com/explore/featured/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3496/

var rotate = function (nums, k) {
    k = k % nums.length;
    
    while (k > 0) {
        nums.unshift(nums[nums.length - 1]);
        nums.splice(nums.length - 1, 1);
        k--;
    }

    return nums;
};

// another solution using stack
// var rotate = (nums, k) => {
//     const stack = [];
//     k %= nums.length
//     while(k--){
//         stack.push(nums.pop())
//     }
//     nums.unshift(...stack.reverse())
// };

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
