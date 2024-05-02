var maxPathSum = function (root) {
    const ans = { val: -Infinity };
    dfs(root, ans);
  
    return ans.val;
  };
  
  function dfs(root, ans) {
    if (!root) return 0;
  
    const left = dfs(root.left, ans);
    const right = dfs(root.right, ans);
  
    const maxVal = Math.max(root.val, root.val + left, root.val + right);
    ans.val = Math.max(ans.val, maxVal, root.val + left + right);
  
    return maxVal;
  }