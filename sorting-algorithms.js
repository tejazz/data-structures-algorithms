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
// SC: O(1)

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

// Merge Sort and Quick Sort => Divide and Conquer
// Divide and Conquer is normally O(n log n)

// Merge Sort
// TC: O(n log n)
// SC: O(n)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort (array) {
//   if (array.length === 1) {
//     return array
//   }
//   // Split Array in into right and left
//   const length = array.length;
//   const middle = Math.floor(length/2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }

// function merge(left, right){
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while(leftIndex < left.length  && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }


// const answer = mergeSort(numbers);
// console.log(answer);