// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3516/

var getDecimalValue = function(head) {
    let number = [];
    
    while (head !== null) {
        number.push(head.val);
        head = head.next;
    }
    
    return parseInt(number.join(''), 2)
};
