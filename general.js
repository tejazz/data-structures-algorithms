// EXERCISE 1
// Pig Latin Strings With Punctuations

// Input: "Hello, How Are You Today?"
// Output: "elloHay, owHay reAay ouYay odayTay?"

// function punctuatedPigLatin(str) {
//     // SC: O(n)
//     str = str.split(" ").map((word) => {
//         if (word.charAt(word.length - 1).match(/^[.,;?!]/)) {
//             let temp = word.slice(0, word.length - 1);
//             temp = convertToPigLatin(temp);
//             word = temp + word.charAt(word.length - 1);
//             return word;
//         }

//         word = convertToPigLatin(word);
//         return word;
//     });

//     return str.join(" ");
// }

// function convertToPigLatin(word) {
//     return word.slice(1) + word.charAt(0) + 'ay';
// }

// console.log(punctuatedPigLatin("Hello, How Are You Today?"));

// EXERCISE 2

// Recent Counter Problem
// https://leetcode.com/explore/featured/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3480/

// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

// var RecentCounter = function () {
//     this.counter = [];
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function (t) {
//     let count = 1;

//     for (let i = 0; i < this.counter.length; i++) {
//         if (this.counter[i] >= (t -3000) && this.counter[i] <= t) {
//             count++;
//         }
//     }

//     this.counter.push(t);
//     return count;
// };

// Alternative - Optimal Solution

// var RecentCounter = function() {
//     this.count = 0;
//     this.requests = [];
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//     this.requests.push(t);
//     while (t - this.requests[0] > 3000) {
//         this.requests.shift();
//     }
//     return this.requests.length;
// };

// var recentCounter = new RecentCounter();
// console.log(recentCounter.ping(1));
// console.log(recentCounter.ping(100));
// console.log(recentCounter.ping(3001));
// console.log(recentCounter.ping(3002));

// EXERCISE 3 [UNSOLVED]

// Strong Password Checker
// https://leetcode.com/problems/strong-password-checker/submissions/

// var strongPasswordChecker = function (s) {
//     let digitChanges = 0;
//     let repetitions = 0;
//     let lengthChnages = 0;
//     let longestStreak = calculateStreak(s);

//     // for length < 6

//     // for length >= 6 && length <= 20

//     // for length > 20
// };

// function calculateStreak(s) {
//     let previous = null;
//     let streak = 0;
//     let temp = 1;

//     for (let i = 0; i < s.length; i++) {
//         if (previous === s[i]) {
//             temp++;
//         } else {
//             if (temp > streak) {
//                 streak = temp;
//             }
//             temp = 1;
//         }

//         previous = s[i];
//     }

//     return ls;
// }

// console.log(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaa')); // 7
// console.log(strongPasswordChecker('')); // 6
// console.log(strongPasswordChecker('aaa123'));   // 1
// console.log(strongPasswordChecker('1111111111'));   // 3
// console.log(strongPasswordChecker('1010101010aaaB10101010'));   // 2
// console.log(strongPasswordChecker('abababababababababaaa'));    // 3
// console.log(strongPasswordChecker("QQQQQ")); // 2
// console.log(strongPasswordChecker("aA1")); // 3
// console.log(strongPasswordChecker("aa123")); // 1
// console.log(strongPasswordChecker("ABABABABABABABABABAB1")); // 2
// console.log(strongPasswordChecker("...")); // 3
// console.log(strongPasswordChecker("1234567890123456Baaaaa")); // 3

// EXERCISE 4

// Running Sum

// var runningSum = function(nums) {
//     let sumArray = [];
//     let sum = 0;

//     for (let i = 0; i < nums.length; i ++) {
//         sumArray.push(sum + nums[i]);
//         sum += nums[i];
//     }

//     return sumArray;
// };

// console.log(runningSum([1, 4, 5, 10]));

// EXERCISE 5

// Kids with Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// var kidsWithCandies = function (candies, extraCandies) {
//     let maxCandies = 0;
//     let checkArr = [];

//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] > maxCandies) {
//             maxCandies = candies[i];
//         }
//     }

//     for (let i = 0; i < candies.length; i++) {
//         checkArr.push(candies[i] + extraCandies >= maxCandies);
//     }

//     return checkArr;
// };

// console.log(kidsWithCandies([2, 3, 4, 4, 5], 5));

// EXERCISE 6

// Remove Duplicates in an Array
// No Extra Space Creation Allowed
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/

// var removeDuplicates = function(nums) {
//     let counter = 0;
//     let previous = null;

//     while (counter < nums.length) {
//         if (nums[counter] === previous) {
//             nums.splice(counter, 1);
//         } else {
//             previous = nums[counter];
//             counter++;
//         }
//     }

//     return nums;
// };

// console.log(removeDuplicates([1, 2]));

// EXERCISE 7 [UNSOLVED]

// Best Time to Buy and Sell Stocks
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

// var maxProfit = function(prices) {

// };

// console.log(maxProfit([7,1,5,3,6,4]));
// Output: 7

// EXERCISE 8

// Remove Elements
// https://leetcode.com/problems/remove-element/

// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }

//     return nums.length;
// };

// console.log(removeElement([3,2,2,3], 3));

// EXERCISE 9

// Kth Largest Number
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// var findKthLargest = function (nums, k) {
//     nums = nums.sort((a, b) => b - a);
//     return nums[k - 1];
// };

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

// EXERCISE 10

// Combination Sum
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3481/

var combinationSum = function(candidates, target) {
    
};

console.log(combinationSum([2,3,5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
