// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3504/

var minDepth = function(root) {
    if (root === null) return 0;
    
    if (root.left === null && root.right === null) return 1;
    
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};