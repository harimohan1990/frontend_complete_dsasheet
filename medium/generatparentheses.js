var generateParenthesis = function(n) {
    function backtrack(S='', left=0, right=0) {
        if (S.length === 2 * n) {
            result.push(S);
            return;
        }
        if (left < n) {
            backtrack(S + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(S + ')', left, right + 1);
        }
    }

    let result = [];
    backtrack();
    return result;
};

