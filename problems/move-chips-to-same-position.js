// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3520/

var minCostToMoveChips = function (position) {
    let odd = 0;
    let even = 0;

    position.map((el) => {
        el % 2 === 0 ? even++ : odd++;
    });

    return Math.min(even, odd);
};