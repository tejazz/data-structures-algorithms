// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/589/week-2-march-8th-march-14th/3669/

var hasAllCodes = function(s, k) {
    let codes = {};
    
    for (let i = 0; i < s.length - k + 1; i++) {
        console.log(s.substring(i, i + k))
        if (!codes[s.substring(i, i + k)]) {
            codes[s.substring(i, i + k)] = true;
        }
    }
    
    return (Object.keys(codes).length === Math.pow(2, k)) ? true: false;
};

console.log(hasAllCodes('00110', 2)); // true