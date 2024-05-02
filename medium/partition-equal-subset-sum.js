/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // Calculate sum of array.
    let arraySum = nums.reduce((acc, num) => acc + num, 0);

    // If total sum is odd, it cannot be partitioned into
    // equal sum subsets.
    if (arraySum % 2 !== 0) {
        return false;
    }

    // Calculate subset sum
    let subsetSum = Math.floor(arraySum / 2);

    // Create a lookup table and fill all entries with
    // FALSE.
    let dp = new Array(subsetSum + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(nums.length + 1).fill(false);
    }

    // Initialize the first row as TRUE as each array has
    // a subset whose sum is zero
    dp[0].fill(true);

    // Fill the lookup table in a bottom-up manner.
    for (let i = 1; i <= subsetSum; i++) {
        for (let j = 1; j <= nums.length; j++) {
            if (nums[j - 1] > i) {
                dp[i][j] = dp[i][j - 1];
            } else {
                dp[i][j] =
                    dp[i - nums[j - 1]][j - 1] || dp[i][j - 1];
            }
        }
    }

    // Return the last index of the matrix, which is our
    // answer.
    return dp[subsetSum][nums.length];
};


//https://leetcode.com/problems/partition-equal-subset-sum/solutions/5000378/simple-iterative-javascript-solution-with-short-video-explainer/