// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3500/

var minDominoRotations = function (A, B) {
    // four conditions
    // 1. make first row equal to A[0]
    // 2. make first row equal to B[0]
    // 3. make second row equal to A[0]
    // 4. make second row equal to B[0]
    // Calculate minimum value from them
    let minRotations = Math.min(numSwaps(A[0], A, B), numSwaps(B[0], A, B));
    minRotations = Math.min(minRotations, numSwaps(A[0], B, A));
    minRotations = Math.min(minRotations, numSwaps(B[0], B, A));

    return minRotations === Number.MAX_SAFE_INTEGER ? -1 : minRotations;
};

function numSwaps(target, A, B) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== target && B[i] !== target) {
            return Number.MAX_SAFE_INTEGER;
        } else if (A[i] !== target) {
            count++;
        }
    }

    return count;
}

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));  // 2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]));  // -1
