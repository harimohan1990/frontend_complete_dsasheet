function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    var resL = lowestCommonAncestor(root.left, p, q);
    var resR = lowestCommonAncestor(root.right, p, q);
    return (resL && resR) ? root : (resL || resR);
  }

  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/2339073/js-intuitive-dfs-recursion-in-4-lines/