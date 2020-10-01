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

var RecentCounter = function() {
    this.count = 0;
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    while (t - this.requests[0] > 3000) {
        this.requests.shift();
    }
    return this.requests.length;
};

var recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
