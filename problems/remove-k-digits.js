// https://leetcode.com/problems/remove-k-digits/

var removeKdigits = function(num, k) {
    if (k === num.length) return '0';
    
    let stack = [];
    
    for (let i = 0; i < num.length; i++) {
        if (stack.length === 0) {
            stack.push(num[0]);
            continue;
        } 
        
        while (stack[stack.length - 1] > num[i]) {
            if (k === 0) break;
            stack.pop();
            k--;
        }
        
        stack.push(num[i]);
    }

    if (k > 0) {
        stack = stack.slice(0, stack.length - k);
    }
    
    // remove all leading zeros
    while (stack[0] === '0') stack.shift();

    return stack.length === 0 ? '0' : stack.join('');
};

console.log(removeKdigits('1432219', 3));   // '1219'