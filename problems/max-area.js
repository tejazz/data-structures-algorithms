// https://leetcode.com/problems/container-with-most-water

var maxArea = function(height) {
    if (height.length === 2) return Math.min(height[0], height[1]);
    
    let start = 0;
    let end = height.length - 1; 
    let maxVolume = 0;
    
    while (start < end) {
        let leastHeight = Math.min(height[start], height[end]);
        let currentWidth = end - start;
        
        maxVolume = Math.max(maxVolume, leastHeight * currentWidth);
        
        height[start] < height[end] ? start++ : end--;
    }
    
    return maxVolume;
};

maxArea([1,8,6,2,5,4,8,3,7]);   // 49
