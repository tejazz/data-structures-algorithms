// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            balance -= 1;
        } else {
            balance += 1;
        }
        
        if (balance === 0) count++;
    }
    
    return count;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLLLLRRRLR')); // 3
console.log(balancedStringSplit('LLLLRRRR')); // 1

