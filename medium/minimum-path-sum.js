var minPathSum = function (grid) {
    let previousRow = Array(grid[0].length).fill(Infinity);
    previousRow[previousRow.length - 1] = 0;
  
    for (let row = grid.length - 1; row >= 0; row--) {
      const currentRow = Array(grid[0].length).fill(0);
  
      for (let col = grid[0].length - 1; col >= 0; col--) {
        const bottomCell = previousRow[col];
        const rightCell = currentRow[col + 1] ?? Infinity;
  
        currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
      }
      previousRow = currentRow;
    }
  
    return previousRow[0];
  };

  https://leetcode.com/problems/minimum-path-sum/description/