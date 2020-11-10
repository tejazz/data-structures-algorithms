//https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3526/

var flipAndInvertImage = function(A) {
    let rowLength = A[0].length;
    
    for (let i = 0; i < A.length; i++) {
        A[i].reverse();
        A[i] = A[i].map((el) => el === 0 ? el = 1 : el = 0);
    }
    
    return A;
};
