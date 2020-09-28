// FACTORIAL OF A NUMBER

function findFactorialRecursive(number) {
    let answer = number;
    if (number > 1) {
        answer *= findFactorialRecursive(number - 1);
    }
    return answer;
}

function findFactorialIterative(number) {
    let answer = number;
    for (let i = number - 1; i >= 1; i--) {
        answer *= i;
    }
    return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
