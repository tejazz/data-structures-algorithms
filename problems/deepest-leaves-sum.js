// https://leetcode.com/problems/deepest-leaves-sum/

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
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let current = root;
    let queue = [];
    let totalArr = [];
    queue.push(current);
    
    while (queue.length > 0) {
        let level_size = queue.length;
        let total = 0;
        
        for (let i = 0; i < level_size; i++) {
            current = queue.shift();
            total += current.val;
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        
        totalArr.push(total);
    }
    
    return totalArr[totalArr.length - 1];
};
