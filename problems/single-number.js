// https://leetcode.com/problems/single-number/

// Naive/Brute Force
// var singleNumber = function(nums) {
//     let map = {};
//     let temp = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (map[nums[i]]) {
//             map[nums[i]]++;
//         } else {
//             map[nums[i]] = 1;
//         }
//     }
    
//     Object.keys(map).forEach((key) => {
//         if (map[key] === 1) {
//             return temp = key; 
//         }
//     });
    
//     return temp;
// };

// TC: O(n), SC: O(1)
var singleNumber = function(nums) {

};