var checkPossibility = function (nums) {
    let count = 0;

    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i + 1] > nums[i + 2]) {
                count++;
                if (nums[i + 2] < nums[i]) {
                    nums[i + 2] = nums[i + 1]; 
                } else {
                    nums[i + 1] = nums[i + 2]; 
                }
            }
        }

        console.log(nums);
    }

    return count <= 1;
};

// console.log(checkPossibility([1, 1, 1]));   // true
// console.log(checkPossibility([5, 7, 1, 8]));   // true
// console.log(checkPossibility([3, 4, 2, 3]));   // false
console.log(checkPossibility([4, 2, 1]));   // false