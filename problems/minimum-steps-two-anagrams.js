// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

var minSteps = function(s, t) {
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        count1[s.charCodeAt(i) - 97] += 1; 
    }
    
    for (let i = 0; i < t.length; i++) {
        count2[t.charCodeAt(i) - 97] += 1; 
    }
    
    for (let i = 0; i< 26; i++) {
        if(count2[i] < count1[i]) result += Math.abs(count2[i] - count1[i]); 
    }
    
    return result;
};
