
var isValidBST = function(root) {
    let prev = null;
    function helper(node) {
        if(node === null) return true;
        if(!helper(node.left)) return false;
        if(prev !== null && node.val <= prev.val) return false;
        prev = node;
        return helper(node.right);
    }
    return helper(root);
};

https://leetcode.com/problems/validate-binary-search-tree