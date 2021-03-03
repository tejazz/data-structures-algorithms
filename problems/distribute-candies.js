// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3657/

var distributeCandies = function (candyType) {
    if (candyType.length <= 1) return 1;

    let allowedCandies = candyType.length / 2;

    let candyHash = {};

    for (let i = 0; i < candyType.length; i++) {
        if (!candyHash[candyType[i]]) {
            candyHash[candyType[i]] = true;
        }
    }

    let totalTypes = Object.keys(candyHash).length;

    return totalTypes <= allowedCandies ? totalTypes : allowedCandies;
};

console.log(distributeCandies([1, 1, 2, 3]));  // 2
console.log(distributeCandies([6, 6, 6, 6]));  // 1
