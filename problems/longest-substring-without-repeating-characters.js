// https://leetcode.com/problems/longest-substring-without-repeating-characters

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    
    let temp = '';
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (temp.includes(s[i])) {
            maxLength = Math.max(maxLength, temp.length);
            temp = temp.slice(temp.indexOf(s[i]) + 1) + s[i];
        } else {
            temp += s[i];
        }
    }
    
    return Math.max(maxLength, temp.length);
};
