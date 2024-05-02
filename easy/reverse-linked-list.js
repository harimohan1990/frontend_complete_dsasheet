

var reverseList = function(head) {
    let node = null;

    while (head) {
        const temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }

    return node;    
};















//https://leetcode.com/problems/reverse-linked-list/description/