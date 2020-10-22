// https://leetcode.com/problems/monotone-increasing-digits/

var monotoneIncreasingDigits = function(N) {
    let num = N.toString().split('');
    let start = num.length;

    for (let i = num.length - 2; i >= 0; i--) {
        if (parseInt(num[i + 1]) < parseInt(num[i]) || num[start] === num[i]) {
            start = i;
        }
    }

    // return for already monotone number
    if (start === num.length) return N;

    // Two Steps
    // 1. Reduce value at start by 1
    // 2. Make all values right of start to be 9
    num[start] = (parseInt(num[start]) - 1).toString();

    for (let i = start + 1; i < num.length; i++) {
        num[i] = '9';
    }

    return parseInt(num.join(''));
};

console.log(monotoneIncreasingDigits(10));  // 9
console.log(monotoneIncreasingDigits(332)); // 299
console.log(monotoneIncreasingDigits(1234));    // 1234
console.log(monotoneIncreasingDigits(668814));    // 667999
console.log(monotoneIncreasingDigits(101));    // 99
