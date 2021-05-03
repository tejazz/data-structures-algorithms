// https://leetcode.com/problems/add-two-numbers

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let newNode = new ListNode();
    let currentNode = newNode;
    
    while (l1 !== null || l2 !== null) {
        let l1val = l1 === null ? 0 : l1.val;
        let l2val = l2 === null ? 0 : l2.val;
        
        let digsum = l1val + l2val;
        let target = (digsum + carry) % 10;

        currentNode.val = target;
        
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
        carry = (digsum + carry) >= 10 ? 1 : 0;
        
        if (l1 !== null || l2 !== null || carry === 1) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next;
        }
    }
    
    if (carry === 1) {
        currentNode.val = carry;
    }
    
    return newNode;
};
