// https://leetcode.com/problems/sort-array-by-increasing-frequency

var frequencySort = function(nums) {
    let numsCountHash = {};
    let final = [];
    
    for (let i = 0; i < nums.length; i++) {
        numsCountHash[nums[i]] ? numsCountHash[nums[i]] += 1 : numsCountHash[nums[i]] = 1;
    }
    
    let numsFreqHash = {};
    
    Object.keys(numsCountHash).map((key) => {
        if (numsFreqHash[numsCountHash[key]]) {
            numsFreqHash[numsCountHash[key]].push(key);
        } else {
           numsFreqHash[numsCountHash[key]] = [key]; 
        }
    });
    
    Object.keys(numsFreqHash).map((key) => {
        numsFreqHash[key].sort((a, b) => b - a);
        
        numsFreqHash[key].map(el => {
            for (let i = 0; i < key; i++) {
                final.push(el);
            }  
        });
    });
    
    return final;
};
