// Elementary Sorts => Bubble, Insertion and Selection

// Bubble Sort
// TC: O(n^2)
// SC: O(1)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }

//     return numbers;
// }

// bubbleSort(numbers);
// console.log(numbers);

// Selection Sort
// TC: O(n^2)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }

//     return numbers;
// }

// selectionSort(numbers);
// console.log(numbers);

// Insertion Sort
// TC: Best O(n), Worst O(n^2)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < array[0]) {
//             array.unshift(array.splice(i, 1)[0]);
//         } else {
//             // find where number should be placed 
//             // in before section
//             for (j = 1; j < i; j++) {
//                 if (array[i] > array[j - 1] && array[i] < array[j]) {
//                     array.splice(j, 0, array.splice(i, 1)[0]);
//                 }
//             }
//         }
//     }

//     return numbers;
// }

// insertionSort(numbers);
// console.log(numbers);
