// https://leetcode.com/problems/longest-valid-parentheses/

var longestValidParentheses = function(s) {
    let indexStack = [-1];   // start index stack with -1 since if we pop first element, we need to increment count
    let stack = [];
    let max = 0;
    let current = 0;

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
            indexStack.pop();
            current = i - indexStack[indexStack.length - 1];
            max = Math.max(max, current);
        } else {
            stack.push(s[i]);
            indexStack.push(i);
        }
    }

    return max;
};

console.log(longestValidParentheses(")()())"));         // 4
console.log(longestValidParentheses("()(())"));         // 6
console.log(longestValidParentheses("(()))())("));      // 4
