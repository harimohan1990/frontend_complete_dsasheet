var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];    
};



var climbStairs = function(n) {
    if (n <= 3) return n;

    let prev1 = 3;
    let prev2 = 2;
    let cur = 0;

    for (let i = 3; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;    
};