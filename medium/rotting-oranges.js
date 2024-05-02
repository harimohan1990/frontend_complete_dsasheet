/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if (!hasFreshOranges(grid)) {
        return 0;
    }
    const rottenOranges = getRottenOranges(grid);
    const minutes = rottenOranges.length > 0
        ? bfs(grid, rottenOranges)
        : 0;
    return hasFreshOranges(grid) ? -1 : minutes;
};

const getRottenOranges = (grid) => {
    const rottenOranges = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                rottenOranges.push([r, c]);
            }
        }
    }
    return rottenOranges;
}

const bfs = (grid, rottenOranges) => {
    const deltas = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const visited = new Set();
    const queue = [];
    // Make sure this is initialized correctly to avoid adding an
    // minute.
    let minutes = -1;
    for (const rottenOrange of rottenOranges) {
        const [r, c] = rottenOrange;
        const posKey = getPosKey(r, c);
        queue.push(posKey);
        visited.add(posKey);
    }
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const posKey = queue.shift();
            const [row, col] = getPosFromKey(posKey);
            // Fresh orange is now infected.
            grid[row][col] = 2;
            // Add neighbors to queue.
            for (const [deltaRow, deltaCol] of deltas) {
                const neighborRow = row + deltaRow;
                const neighborCol = col + deltaCol;
                const neighborPosKey = getPosKey(neighborRow, neighborCol);
                if (
                    isOutOfBounds(grid, neighborRow, neighborCol) ||
                    isEmptyCell(grid, neighborRow, neighborCol) ||
                    visited.has(neighborPosKey)
                ) {
                    continue;
                }
                visited.add(neighborPosKey);
                queue.push(neighborPosKey);
            }
        }
        minutes++;
    }
    return minutes;
}

const hasFreshOranges = (grid) => {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                return true;
            }
        }
    }
    return false;
}

const getPosKey = (r, c) => `${r},${c}`;

const getPosFromKey = (key) => key.split(',').map(Number);

const isOutOfBounds = (grid, r, c) => r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1;

const isEmptyCell = (grid, r, c) => grid[r][c] === 0;





https://leetcode.com/problems/rotting-oranges/description/