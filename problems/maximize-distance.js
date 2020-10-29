// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/563/week-5-october-29th-october-31st/3512/

var maxDistToClosest = function (seats) {
    let leftDistance = [];
    let rightDistance = [];
    let temp = 0;
    let maxClose = -1;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            temp = i;
            leftDistance[i] = -1;
        } else {
            leftDistance[i] = i - temp;
        }
    }

    temp = 0;

    for (let i = seats.length -1; i >= 0; i--) {
        if (seats[i] === 1) {
            temp = i;
            rightDistance[i] = -1;
        } else {
            rightDistance[i] = temp  === 0 ? 0 : temp - i;
        }
    }

    // find maximum close distance
    for (let i = 0; i < seats.length; i++) {
        if (rightDistance[i] === 0 || leftDistance[i] === 0) {
            maxClose = Math.max(maxClose, Math.max(rightDistance[i], leftDistance[i]));
        } else {
            maxClose = Math.max(maxClose, Math.min(rightDistance[i], leftDistance[i]));
        }
    }

    return maxClose;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
console.log(maxDistToClosest([1, 0, 0, 0])); // 3
console.log(maxDistToClosest([0, 1])); // 1
