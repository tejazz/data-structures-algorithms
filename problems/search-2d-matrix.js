// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3497/

var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;

    // make single array
    let singleArray = [];
    matrix.map(el => singleArray = [...singleArray, ...el]);

    return search(singleArray, target);
};

function search(array, target) {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high)/2);

    while (low <= high) {
        mid = Math.floor((low + high)/2);

        if (array[mid] === target) {
            return true;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3));  // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13));   // false
console.log(searchMatrix([], 0));   // false
