// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3527/

var validSquare = function (p1, p2, p3, p4) {
    let combinations = [];
    let points = [p1, p2, p3, p4];

    for (let i = 1; i < Math.pow(2, 4) - 1; i++) {
        let binary = i.toString(2).split('');
        if (binary.length < 4) binary = [...new Array(4 - binary.length).fill('0'), ...binary];

        let count = 0;

        binary.map(el => el === '1' ? count++ : null);

        if (count === 2) {
            let oneSet = [];
            let secondSet = [];
            binary.map((el, index) => el === '1' ? oneSet.push(points[index]) : secondSet.push(points[index]));

            combinations.push([...oneSet, ...secondSet]);
        }
    }

    // return combinations;
};

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));   // true
