// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3502/

// Non-Stack Approach
// TC: O(n)
// var asteroidCollision = function(asteroids) {
//     for (let i = asteroids.length - 1; i >= 1;) {
//         console.log(asteroids[i - 1], asteroids[i], i);
//         if (asteroids[i] < 0 && asteroids[i - 1] > 0 && asteroids[i] < asteroids[i -1]) {
//             (asteroids[i] * -1 > asteroids[i -1]) ? asteroids.splice(i - 1, 1) : ((asteroids[i] * -1 === asteroids[i -1]) ? asteroids.splice(i - 1, 2) : asteroids.splice(i, 1));
//         } else {
//             i--;
//         }
//     }

//     return asteroids;
// };

// Stack Approach
var asteroidCollision = function (asteroids) {
    for (let i = 0; i < asteroids.length; i++) {
        if (stack.length === 0 || asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else {
            while (true) {
                let peek = stack[stack.length - 1];
                if (peek < 0 || !peek) {
                    stack.push(asteroids[i]);
                    break;
                } else if (peek === (-1 * asteroids[i])) {
                    stack.pop();
                    break;
                } else if (peek < (-1 * asteroids[i])) {
                    stack.pop();
                } else if (peek > (-1 * asteroids[i])) {
                    break;
                }
            }
        }
    }

    return stack;
}

console.log(asteroidCollision([-2, -1, 1, 2]));    // [-2,-1,1,2]
console.log(asteroidCollision([5, 10, -5]));    // [5, 10]
console.log(asteroidCollision([10, 2, -5]));  // [10]
console.log(asteroidCollision([-2, 2, -1, -2]));  // [-2]
console.log(asteroidCollision([-2, -2, -1, -2]));  // [-2,-2,-1,-2]
console.log(asteroidCollision([2, -2]));  // []
console.log(asteroidCollision([1, -2, -2, -2]));  // [-2,-2,-2]