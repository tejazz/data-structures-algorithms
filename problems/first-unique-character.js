// https://leetcode.com/problems/first-unique-character-in-a-string

var firstUniqChar = function (s) {
    let charMap = {};
    let returnIndex = s.length + 1;
    
    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i]] >= -1) {
            charMap[s[i]] = -1;
        } else {
            charMap[s[i]] = i;
        }
    }
    
    Object.keys(charMap).map(key => {
       returnIndex = charMap[key] != -1 ? Math.min(returnIndex, charMap[key]) : returnIndex;
    });
    
    return returnIndex === s.length + 1 ? -1 : returnIndex;
};

console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
