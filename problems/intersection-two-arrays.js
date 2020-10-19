// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/

// TC: O(n^2)
// var intersect = function (nums1, nums2) {
//     let result = [];

//     for (let i = 0; i < nums1.length; i++) {
//         let temp = [];
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j] && !temp.includes(nums2[j])) {
//                 temp.push(nums2[j]);
//                 nums2.splice(j, 1);
//             }
//         }

//         result = [...result, ...temp];
//     }

//     return result;
// };

// TC: O(n)
var intersect = function (nums1, nums2) {
    let refHash = {};
    let result = [];

    // hash map for occurrences 
    for (let i = 0; i < nums1.length; i++) {
        refHash[nums1[i]] ? refHash[nums1[i]] += 1 : refHash[nums1[i]] = 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (refHash[nums2[i]] > 0) {
            result.push(nums2[i]);
            refHash[nums2[i]]--;
        }
    }

    return result;
}

console.log(intersect([1, 2, 2, 1], [2]));  // [2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));  // [4, 9]
