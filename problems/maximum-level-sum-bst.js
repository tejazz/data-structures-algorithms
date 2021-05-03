// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree

var maxLevelSum = function(root) {
    let queue = [root];
    let level = 0;
    let sum = root.val;
    let result = 1;
    
    while (queue.length > 0) {
        level += 1;
        let level_size = queue.length;
        let level_sum = 0;
        
        for (let i = 0; i < level_size; i++) {
            let current = queue.shift();
            level_sum += current.val;
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        
        if (level_sum > sum) {
            result = level;
            sum = level_sum;
        }
    }
    
    return result;
};
