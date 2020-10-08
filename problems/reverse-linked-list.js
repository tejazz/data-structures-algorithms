// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    if (!head) return head;
    
    let len = 1;
    let tail = head;
    
    while (tail.next !== null) {
        len++;
        tail = tail.next;
    }
    
    let first = head;
    let second = head.next;
    tail = head;
    
    while (second !== null) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    
    head.next = null;
    head = first;
    
    return head;
};