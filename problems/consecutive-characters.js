// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3518/

var maxPower = function (s) {
    let power = new Array(s.length);
    power[0] = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            power[i] = power[i - 1] + 1;
        } else {
            power[i] = 1;
        }
    }

    return Math.max(...power);
};

console.log(maxPower('leetcode'));  // 2
console.log(maxPower('abbcccddddeeeeedcba'));   // 5
console.log(maxPower('triplepillooooow'));  // 5
console.log(maxPower('hooraaaaaaaaaaay'));  // 11
