class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isSymmetric(root) {
        const preOrder = (n1, n2) => {
            if (!n1 && !n2) {
                return true;
            }
            if (!n1 || !n2 || n1.val !== n2.val) {
                return false;
            }
            return preOrder(n1.left, n2.right) && preOrder(n1.right, n2.left);
        };
        
        return !root || preOrder(root.left, root.right);
    }
}
https://leetcode.com/problems/symmetric-tree/description/