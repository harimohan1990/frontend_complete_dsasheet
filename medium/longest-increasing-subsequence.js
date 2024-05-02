


var searchMatrix = function(matrix, target) {
	// Start from the top-right corner
    let i = 0;
    let j = matrix[0].length - 1;
    while (j >= 0 && i < matrix.length) {
        if (matrix[i][j] === target)
            return true;
        if (j - 1 >= 0 && matrix[i][j - 1] < target) {
            i++;
        } else {
            if (j - 1 < 0)
                i++;
            else
                j--;
        }
    }
    return false;
};












https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509129/99-54-easy-solution-with-explanation/