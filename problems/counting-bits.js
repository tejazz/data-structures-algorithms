// https://leetcode.com/problems/counting-bits/

var countBits = function(num) {
    let final = [];
    let res = [];
    res[0] = 0;
    
    // using bit manipulation
    for (let i = 1; i <= num; i++) {
        res[i] = res[i & (i-1)] + 1;
    }
    
    return res;
};
