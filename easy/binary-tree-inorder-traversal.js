var inorderTraversal = function(root) {
    const res = [];

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;    
};


https://leetcode.com/problems/binary-tree-inorder-traversal/description/