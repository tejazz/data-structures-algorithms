// [REVISIT]
// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3490/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) return 0;

    points.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let root = points[0][1];

    for (let i = 0; i < points.length; i++) {
        if (root >= points[i][0]) {
            continue;
        }

        count++;
        root = points[i][1];
    }

    return count;
};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));   // 2
console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));  // 4
console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]));  // 2
console.log(findMinArrowShots([[1, 2]])); // 1
console.log(findMinArrowShots([[2, 3], [2, 3]])); // 1
console.log(findMinArrowShots([])); // 0
console.log(findMinArrowShots([[1,2],[4,5],[1,5]]));    // 2