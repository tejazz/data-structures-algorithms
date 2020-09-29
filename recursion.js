// // FACTORIAL OF A NUMBER

// // TC: O(n)

// function findFactorialRecursive(number) {
//     let answer = number;
//     if (number > 1) {
//         answer *= findFactorialRecursive(number - 1);
//     }
//     return answer;
// }

// // TC: O(n)

// function findFactorialIterative(number) {
//     if (number <= 2) {
//         return number;
//     }

//     let answer = number;
//     for (let i = number - 1; i >= 1; i--) {
//         answer *= i;
//     }
//     return answer;
// }

// console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(5));

// FIBONACCI

// function fibonacciIterative(n) {    // O(n)
//     let first = 0;
//     let second = 1;

//     for (let i = 2; i <= n; i++) {
//         let temp = first + second;
//         first = second;
//         second = temp;
//     }

//     return second;
// }

// function fibonacciRecursive(n) {    // O(2^n)
//     if (n < 2) {
//         return n;
//     }

//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciIterative(4));
// console.log(fibonacciRecursive(4));

// WHEN SHOULD WE USE RECURSION?

// Every time you are using a tree or converting something into a tree
// Consider recursion

// 1. Divided into a number of subproblems that are smaller instances of same problem
// 2. Each instance of subproblem is identical in nature
// 3. The solutions of subproblem can be combined to solve the problem at hand

// Divide and Conquer using Recursion

// RECURSION AND SPACE COMPLEXITY ARE NOT FRIENDS

// // Recursion to Reverse String

// //Implement a function that reverses a string using iteration...and then recursion!
// function reverseString(str) {
//     if (str.length === 1) {
//         return str;
//     }
    
//     return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
// }

// console.log(reverseString('yoyo mastery'));
// //should return: 'yretsam oyoy'

// REAL WORLD PROBLEM EXAMPLE

// You find a person who has contracted a given contageous infection, which is non fatal, and fixes itself quickly( Type A) , Except for one in 5 people ( We'll call these type B ) who become permanently infected with it and shows no symptoms and merely acts a spreader.

// This creates quite annoying waves of havoc when ever type B infects a multitude of type A.

// Your task is to track down all the type Bs and immunise them to stop the backbone of the disease. Unfortunately tho, you cant administer a nationwide cure to all, because the people who are typeAs are also deadly allergic to the cure that works for type B.

// The way you would do this, would be social discovery, given an infected person(Type A), choose all their contacts in the last week, marking each contact on a heap. When you test a person is infected, add them to the "follow up" queue. When a person is a type B, add them to the "follow up" at the head ( because you want to stop this fast ).

// After processing a given person, select the person from the front of the queue and apply immunization if needed. Get all their contacts previously unvisited, and then test to see if they're infected.

// Repeat until the queue of infected people becomes 0, and then wait for another outbreak..
