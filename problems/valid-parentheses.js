// https://leetcode.com/problems/valid-parentheses

var isValid = function(s) {
    let stack = [];
    
    if (s.length % 2 !== 0) return false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            console.log(s[i]);
            stack.push(s[i]);
        } 
        
        if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') stack.pop();
            else stack.push(s[i]);
        } else if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') stack.pop();
            else stack.push(s[i]);
        } else if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') stack.pop();
            else stack.push(s[i]);
        }
    }
    
    return stack.length === 0 ? true: false;
};

console.log(isValid("([}}])")); // false