// https://leetcode.com/problems/first-unique-character-in-a-string

var firstUniqChar = function (s) {
    let result = -1;
    let freqMap = {};

    for (let i = 0; i < s.length; i++) {
        freqMap[s[i]] ? freqMap[s[i]] += 1 : freqMap[s[i]] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freqMap[s[i]] === 1) {
            result = i;
            break;
        }
    }

    return result;
};
