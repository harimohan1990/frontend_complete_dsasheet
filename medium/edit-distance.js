/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
      const n = word2.length;
    
      // Create a 2D array to store the edit distances
      const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    
      // Initialize the base cases
      for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // Minimum operations to convert word1[0...i] to an empty string
      }
    
      for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // Minimum operations to convert an empty string to word2[0...j]
      }
    
      // Calculate the edit distances
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (word1[i - 1] === word2[j - 1]) {
            // Characters match, no operation needed
            dp[i][j] = dp[i - 1][j - 1];
          } else {
            // Characters don't match, choose the minimum among insert, delete, or replace operations
            dp[i][j] = Math.min(
              dp[i][j - 1] + 1, // Insert operation
              dp[i - 1][j] + 1, // Delete operation
              dp[i - 1][j - 1] + 1 // Replace operation
            );
          }
        }
      }
    
      return dp[m][n]; // Minimum number of operations to convert word1 to word2
    };