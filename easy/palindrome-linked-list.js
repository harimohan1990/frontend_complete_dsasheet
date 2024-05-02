

var isPalindrome = function(head) {
    const listVals = [];
    while (head) {
        listVals.push(head.val);
        head = head.next;
    }
    
    let left = 0, right = listVals.length - 1;
    while (left < right && listVals[left] === listVals[right]) {
        left++;
        right--;
    }
    return left >= right;
};

















https://leetcode.com/problems/palindrome-linked-list/description/