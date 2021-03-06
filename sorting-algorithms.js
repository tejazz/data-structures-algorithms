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

// Quicksort
// TC: Best O(n log n), Worst O(n^2)
// SC: O(log n)



// When to use what?

// Insertion Sort: Only a small amount of data and they are mostly sorted
// Bubble Sort: Only for educational purposes
// Selection Sort: Only for educational purposes
// Merge Sort: For non-memory related sorted. Could be used for anything else
// Quick Sort: Better than merge sort. But has a doosy worst case behaviour

// Non-comparison Sort => Radix and Counting Sort
// Faster if numbers are within a range

// INTERVIEW QUESTIONS

//#1 - Sort 10 schools around your house by distance:
// Insertion Sort => Small dataset

//#2 - eBay sorts listings by the current Bid amount:
// Radix or Counting Sort => Fixed ranges

//#3 - Sport scores on ESPN
// Quick Sort => Multiple score variations and better space complexity

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort => Sorting in memory

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort => Almost sorted existing data

//#6 - Temperature Records for the past 50 years in Canada
// Radix or Counting Sort => If no decimal places
// Quick Sort => If it has decimal places

//#7 - Large user name database needs to be sorted. Data is very random.
// Quick Sort => Not worried for worst case

//#8 - You want to teach sorting for the first time
// Bubble or Selection Sort
