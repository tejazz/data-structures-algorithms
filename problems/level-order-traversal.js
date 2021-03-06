// https://leetcode.com/problems/binary-tree-level-order-traversal

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
        
    let queue = [root];
    let result = [];
    
    while (queue.length > 0) {
        let level_size = queue.length;
        let level_arr = [];
        
        for (let i = 0; i < level_size; i++) {
            let current = queue.shift();
            level_arr.push(current.val);
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        
        result.push(level_arr);
    }
    
    return result;
};
