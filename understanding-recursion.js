// Points to note
// 1. Need a base case
// 2. Need a recursive function

// // Print all the elements

// function printAll(nums) {
//     if (nums === 1) {
//         return nums;
//     }

//     console.log(nums);
//     return printAll(nums - 1);
// }

// console.log(printAll(10));

// // Determine if string is palindrome

// function isPalindrome(str) {
//     return str === reverseString(str);
// }

// function reverseString(str) {
//     if (str.length === 0) {
//         return str;
//     }

//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(isPalindrome('racecar'));

// // Calulate raised to the power

// function calculatePower(a, b) {
//     if (b === 0) {
//         return 1;
//     }

//     return calculatePower(a, b - 1) * a;
// }

// console.log(calculatePower(3, 5));

// Map function

function mapFunction(arr) {
  
}

console.log(mapFunction([1, 3, 4, 1]));
