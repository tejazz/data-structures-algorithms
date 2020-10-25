// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3506/

var bagOfTokensScore = function (tokens, P) {

    tokens.sort((a, b) => a - b);
    let maxPoints = 0;
    let points = 0;
    let start = 0;
    let end = tokens.length - 1;

    while (start <= end) {
        if (P >= tokens[start]) {
            points++;
            P -= tokens[start++];
            maxPoints = Math.max(maxPoints, points);
        } else if (points > 0) {
            points--;
            P += tokens[end++];
        } else {
            return maxPoints;
        }
    }

    return maxPoints;
};

console.log(bagOfTokensScore([100], 50));   // 0
console.log(bagOfTokensScore([100, 200], 150)); // 1
console.log(bagOfTokensScore([100, 200, 300, 400], 200));  // 2
console.log(bagOfTokensScore([48, 87, 26], 81));  // 2