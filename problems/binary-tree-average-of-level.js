// https://leetcode.com/explore/challenge/card/march-leetcoding-challenge-2021/588/week-1-march-1st-march-7th/3661/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    let queue = [root];
    let level_sum = 0;
    let result = [];
    
    while (queue.length > 0) {
        let size = queue.length;
        level_sum = 0;
        
        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            
            level_sum += current.val;
            
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        
        result.push(level_sum/size);
    }
    
    return result;
};