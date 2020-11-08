// https://leetcode.com/problems/check-array-formation-through-concatenation/

var canFormArray = function (arr, pieces) {
    let strNums = arr.join('').toString();
    let remStr = arr;

    for (let i = 0; i < pieces.length; i++) {
        let pieceString = pieces[i].join('').toString();

        if (!strNums.includes(pieceString)) {
            return false;
        } else {
            pieces[i].map(el  => remStr.indexOf(el) > -1 ? remStr.splice(remStr.indexOf(el), 1) : null);
        }
    }

    return remStr.length > 0 ? false : true;
};

console.log(canFormArray([15, 88], [[88], [15]]));   // true
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));    // false
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])); // true
console.log(canFormArray([12], [[1]])); // false
console.log(canFormArray([32,66,73,15,3,70,53], [[66,73],[15],[3],[32],[70],[53]])); // true