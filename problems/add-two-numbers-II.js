// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3522/

// Brute Force: O(n)
// Fails for out of bound numbers
// var addTwoNumbers = function(l1, l2) {
//     let num1 = [];
//     let num2 = [];
    
//     while (l1 !== null) {
//         num1.push(l1.val);
//         l1 = l1.next;
//     }
    
//     while (l2 !== null) {
//         num2.push(l2.val);
//         l2 = l2.next;
//     }
    
//     let num3 = (parseInt(num1.join('')) + parseInt(num2.join(''))).toString().split('');
    
//     let l3 = new ListNode(num3[0]);
//     let currentNode = l3;
    
//     for (let i = 1; i < num3.length; i++) {
//         currentNode.next = new ListNode(num3[i]);
//         currentNode = currentNode.next;
//     }
    
//     return l3;
// };

// using array reverse
// TC: 
var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];
    let num3 = [];
    
    while (l1 !== null) {
        num1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2 !== null) {
        num2.push(l2.val);
        l2 = l2.next;
    }
    
    let maxLen = Math.max(num1.length, num2.length);
    let carry = 0;
    num1.reverse();
    num2.reverse();
    
    for (let i = 0; i < maxLen; i++) {
        let first = num1[i] ? num1[i] : 0;
        let second = num2[i] ? num2[i] : 0;
        let temp = first + second + carry;
        if (temp >= 10) {
            carry = 1;
            temp = temp%10;
        } else {
            carry = 0;
        }
        
        num3.push(temp);
    }
    
    if (carry === 1) num3.push(1);
    
    num3.reverse();
        
    let l3 = new ListNode(num3[0]);
    let currentNode = l3;
    
    for (let i = 1; i < num3.length; i++) {
        currentNode.next = new ListNode(num3[i]);
        currentNode = currentNode.next;
    }
    
    return l3;
};