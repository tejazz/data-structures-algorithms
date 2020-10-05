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

// EXERCISE 10 [NEED CLARITY]

// Combination Sum
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3481/

// var combinationSum = function(candidates, target) {
//     let results = [];
//     let temp = candidates;
//     backtrackArray(results, [], target, temp, index = 0);
//     return results;
// };

// function backtrackArray(results, list, target, temp, index) {
//     if (target === 0) {
//         results.push(list);
//         return;
//     }

//     if (target < 0) {
//         return;
//     }

//     for (let i = index; i < temp.length; i++) {
//         backtrackArray(results, [...list, temp[i]], target - temp[i], temp, i);
//     }
// }

// console.log(combinationSum([2,3,5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]

// EXERCISE 11

// Non-decreasing Array

// var checkPossibility = function (nums) {
//     let numberOfChanges = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] > nums[i + 1]) {
//             numberOfChanges++;
//             if (i > 0) {
//                 if (nums[i - 1] <= nums[i + 1] && nums[i + 2] >= nums[i + 1]) {
//                     nums[i] = nums[i + 1];
//                 } else {
//                     nums[i + 1] = nums[i];
//                 }
//             }
//         }
//     }

//     return numberOfChanges > 1 ? false : true;
// };

// console.log(checkPossibility([4, 2, 3]));   // true
// console.log(checkPossibility([3, 4, 2, 3]));    // false
// console.log(checkPossibility([5, 1, 7, 8]));    // true
// console.log(checkPossibility([1, 3, 5, 2, 4])); // false
// console.log(checkPossibility([-1, 4, 2, 3])); // true
// console.log(checkPossibility([1, 2, 5, 3, 3])); // true
// console.log(checkPossibility([-1, 2, 4, 2])); // true

// EXERCISE 12

// K-Diff Pairs
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3482/

// var findPairs = function (nums, k) {
// // Brute Force
// let len = nums.length;
// let pairs = 0;
// let sample = [];

// for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//         if (i >= 0 && j < nums.length && i !== j && nums[i] <= nums[j] && (nums[j] - nums[i]) === k) {
//             let isExist = sample.findIndex(el => el[0] === nums[i] && el[1] === nums[j]);
//             if (isExist === -1) {
//                 sample.push([nums[i], nums[j]]);
//                 pairs++;
//             }
//         }
//     }
// }

// return pairs;

// Efficient Solution
// TC: O(n), SC: O(n)

//     let len = nums.length;
//     let mapSet = {};
//     let pairs = 0;

//     for (let i = 0; i < len; i++) {
//         if (!mapSet[nums[i]]) {
//             mapSet[nums[i]] = 1
//         } else {
//             mapSet[nums[i]]++;
//         }
//     }

//     Object.keys(mapSet).forEach(key => {
//         if (k > 0) {
//             if (mapSet[parseInt(key) + k]) {
//                 pairs++;
//             }
//         } else {
//             if (mapSet[key] >= 2) {
//                 pairs++;
//             }
//         }
//     });

//     return pairs;
// };

// console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
// console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
// console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
// console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3));   // 2
// console.log(findPairs([-1, -2, -3], 1));  // 2
// console.log(findPairs([1, 1, 1, 1, 1], 0));  // 1 
// console.log(findPairs([1, 1, 1, 2, 2], 0));  // 2
// console.log(findPairs([1, 2, 3], 0));  // 0

// EXERCISE 12

// String to Integer (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/

// var myAtoi = function(s) {
// s = s.trim();
// let number = '';

// for (let i = 0; i < s.length; i++) {
//     if ((/[-+]/).test(s.charAt(i)) || (/[0-9]/).test(s.charAt(i))) {
//         number += s.charAt(i);
//     } else {
//         break;
//     }
// }

// if (!number.trim() || (/[+-]/).test(number.charAt(1)) || isNaN(parseInt(number))) return 0;

// number = parseInt(number);

// if (number <= -2147483648) {
//     return -2147483648;
// } else if (number >= 2147483648) {
//     return 2147483648;
// }

// return number;
// };

// console.log(myAtoi('    -42')); // -42
// console.log(myAtoi('words and 987')); // 0
// console.log(myAtoi('4193 with words')); // 4913
// console.log(myAtoi('-91283472332')); // -2147483648
// console.log(myAtoi('+-12')); // 0
// console.log(myAtoi('+')); // 0

// EXERCISE 13

// Valid Number
// https://leetcode.com/problems/valid-number/submissions/

// var isNumber = function(s) {
//     if ((/\e\d\.\d/).test(s) || !s.trim()) return false;

//     if (!isNaN(s)) {
//         return true;
//     }    

//     return false;
// };

// EXERCISE 14

// Remove Covered Intervals
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3483/

// Brute Force
// var removeCoveredIntervals = function (intervals) {
//     let coveredIntervals = 0;

//     if (intervals.length === 1) {
//         return 1;
//     }

//     for (let i = 0; i < intervals.length; i++) {
//         let temp = 0;

//         for (let j = 0; j < intervals.length; j++) {
//             if (intervals[j][0] <= intervals[i][0] && intervals[i][1] <= intervals[j][1] && i != j) {
//                 temp = 1;        
//             }
//         }

//         if (temp === 1) coveredIntervals++;
//     }

//     return intervals.length - coveredIntervals;
// };

// // Optimal Solution
// var removeCoveredIntervals = function (intervals) {
//     // sort at two levels
//     // first: start time -> ascending
//     // second: end time -> descending
//     intervals.sort((a, b) => a[0] - b[0]);
//     intervals.sort((a, b) => b[1] - a[1]);

//     let root = intervals[0];
//     let coveredCount = 0;

//     // loop through
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] >= root[0] && intervals[i][1] <= root[1]) {
//             coveredCount++;
//         } else {
//             root = intervals[i];
//         }
//     }

//     return intervals.length - coveredCount;
// }

// console.log(removeCoveredIntervals([[1, 4], [2, 3]])); // 1
// console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]])); // 2
// console.log(removeCoveredIntervals([[0, 10], [5, 12]])); // 2
// console.log(removeCoveredIntervals([[3, 10], [4, 10], [5, 11]])); // 2
// console.log(removeCoveredIntervals([[34335,39239],[15875,91969],[29673,66453],[53548,69161],[40618,93111]])); // 2

// EXERCISE 15

// 3Sum
// https://leetcode.com/problems/3sum/


// // Brute Force => O(n^2) => Too slow
// var threeSum = function(nums) {
//     let results = [];

//     if (nums.length < 3) {
//         return results;
//     }

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//           for (let k = j + 1; k < nums.length; k++) {
//             if (nums[i] + nums[j] + nums[k] === 0) {
//                 if (results.findIndex(el => el[0] === nums[i] && el[1] === nums[j] && el[2] === nums[k]) === - 1) {
//                     results.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//           }
//         }
//     }

//     return results;
// };

// var threeSum = function (nums) {
//     // Steps for Optimum Solution
//     // 1. Sort the array -> Ascending
//     // 2. Handle edge case
//     // 3. Iterate through (i)
//     // 4. Set i+1 as j and end of array as k, navigate accordingly
//     let results = [];

//     if (nums.length < 3) {
//         return results;
//     }

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length - 2; i++) {
//         let j = i + 1;
//         let k = nums.length - 1;

//         if (nums[i] > 0) {
//             break;
//         }

//         if (i > 0 && i === i - 1) {
//             continue;
//         }

//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k];
//             if (sum === 0) {
//                 if (results.findIndex(el => el[0] === nums[i] && el[1] === nums[j] && el[2] === nums[k]) === - 1) {
//                     results.push([nums[i], nums[j], nums[k]]);
//                 }
//                 while(j < k && nums[j] === nums[j + 1]) j++;
//                 while(j < k && nums[k] === nums[k - 1]) k--;
//                 j++;
//                 k--;
//             } else if (sum < 0) {
//                 j++;
//             } else {
//                 k--;
//             }
//         }
//     }

//     return results;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([])); // []
// console.log(threeSum([0])); // []
// console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
// console.log(threeSum([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]

// EXERCISE 16

// Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

// //Naive O(n^2)
// var subarraySum = function(nums, k) {
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//         currentSum += nums[j];

//         if (currentSum === k) {
//             count++;
//         }
//     }
// }

// return count;
// };

// TC: O(n)
// var subarraySum = function (nums, k) {
//     let map = { 0: 1 };
//     let currentSum = 0;
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currentSum += nums[i];
//         console.log(currentSum - k);

//         if (map[currentSum - k]) {
//             count += map[currentSum - k];
//         }

//         map[currentSum] = map[currentSum] ? map[currentSum] + 1 : 1;
//     }

//     return count;
// };

// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2

// EXERCISE 17

// Duplicates (Twice) in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// var findDuplicates = function (nums) {
//     // 1. Should not increase space
//     // 2. Space complexity should be O(n)
//     let results = [];

//     for (let i = 0; i < nums.length; i++) {
//         let currentNumber = nums[i] < 0 ? nums[i] * -1 : nums[i];

//         if (nums[currentNumber - 1] < 0) {
//             results.push(currentNumber);
//         }

//         nums[currentNumber - 1] *= -1;
//     }

//     return results;
// };

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]

// EXERCISE 18

// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// var lengthOfLongestSubstring = function(s) {
//     let max = 0;
//     let temp  = '';

//     for (let i = 0; i < s.length; i++) {
//       if (temp.includes(s.charAt(i))) {
//           // extract the text that occures after the common letter was repeated
//           temp = temp.slice(temp.indexOf(s[i]) + 1) + s[i];
//       } else {
//           temp += s[i];

//           if (temp.length > max) {
//               max = temp.length;
//           }
//       }
//     }

//     return max;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
// console.log(lengthOfLongestSubstring("bbbbb"));  // 1
// console.log(lengthOfLongestSubstring("pwwkew"));  // 3
// console.log(lengthOfLongestSubstring(""));  // 0
// console.log(lengthOfLongestSubstring("dvdf"));  // 3

// EXERCISE 19

// Bitwise Complement
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3484/

var bitwiseComplement = function(N) {
    
};

console.log(bitwiseComplement(5)); // 2 
console.log(bitwiseComplement(7)); // 0 
console.log(bitwiseComplement(10)); // 5 
