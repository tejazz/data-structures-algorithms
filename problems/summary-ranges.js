// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3510/

var summaryRanges = function (nums) {
    let ranges = [];
    let temp = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            temp.push(nums[i]);
            ranges.push(temp.length === 1 ? temp : [temp[0], temp[temp.length - 1]]);
            temp = [];
            continue;
        }

        temp.push(nums[i]);
    }

    for (let i = 0; i < ranges.length; i++) {
        ranges[i] = ranges[i].length === 1 ? ranges[i].toString() : ranges[i][0] + '->' + ranges[i][ranges[i].length - 1];
    }

    return ranges;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));   // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));   // ["0","2->4","6","8->9"]
console.log(summaryRanges([-1]));   //  ["-1"]
console.log(summaryRanges([]));   //  []
