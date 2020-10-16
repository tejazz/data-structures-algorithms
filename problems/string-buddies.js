// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3492/

var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false;

    if (/^(.)\1+$/.test(A)) return true;

    let swapIndex = [];

    // check for strings with recurring patterns
    if (A === B) {
        let s = new Set();

        for (let i = 0; i < A.length; i++) {
            s.add(A.charAt(i));
        }

        console.log(s);

        return s.size < A.length;
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            swapIndex.push(i);
        }
    }

    if (swapIndex.length > 2 || swapIndex.length === 0) return false;

    A = A.split('');
    let temp = A[swapIndex[0]];
    A[swapIndex[0]] = A[swapIndex[1]];
    A[swapIndex[1]] = temp;
    A = A.join('');

    return (A === B) ? true : false;
};

console.log(buddyStrings('aa', 'aa'));  // true
console.log(buddyStrings('ab', 'ba'));  // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));    // true
console.log(buddyStrings('ab', 'ab'));  // false
console.log(buddyStrings('abab', 'abab'));  // true