// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3501/
// [NEED TO UNDERSTAND]

var cloneGraph = function(node) {
  const map = new Map();
  return clone(node);
  
  function clone(node) {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    
    const newNode = { val: node.val, neighbors: [] };
    map.set(node.val, newNode);
    for (let n of node.neighbors) {
      newNode.neighbors.push(clone(n));
    }
    return newNode;
  }
};