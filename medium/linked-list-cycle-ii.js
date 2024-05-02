

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Initialize slow and fast pointers
    let slow = head;
    let fast = head;
    
    // Flag to indicate cycle existence
    let hasCycle = false;
    
    // Move slow pointer one step and fast pointer two steps
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        // Check if slow and fast pointers meet
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    // If no cycle exists, return null
    if (!hasCycle) return null;
    
    // Move slow pointer to head
    slow = head;
    
    // Move slow and fast pointers at the same pace until they meet
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Return the node where the cycle begins
    return slow;
};
