// https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/560/week-2-october-8th-october-14th/3493/

var sortList = function (head) {
    if (!head || !head.next) return head

    let slow = head;
    let fast = head;
    let splitList = {};

    while (fast && fast.next) {
        splitList = slow;
        slow = slow.next;
        fast = fast.next.next
    }

    splitList.next = null
    return merge(sortList(head), sortList(slow))
};

function merge(a, b) {
    if (!a && b) return b
    if (!b && a) return a

    if (a.val < b.val) {
        a.next = merge(a.next, b)
        return a
    } else {
        b.next = merge(a, b.next)
        return b
    }
}