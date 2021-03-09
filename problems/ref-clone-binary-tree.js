// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    let queue = [cloned];
    
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.val === target.val) return current;
        
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    
    return null;
};