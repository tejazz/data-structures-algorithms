// https://leetcode.com/problems/add-digits/

var addDigits = function (num) {
    while (num > 9) {
        num = getNumberSum(num);
    }

    return num;
};

function getNumberSum(num) {
    let sum = 0;

    while (num > 0) {
        sum += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(addDigits(38)); // 2
console.log(addDigits(42)); // 6
