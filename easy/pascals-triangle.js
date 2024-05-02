

var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    
    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);
    
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    prevRows.push(newRow);
    return prevRows;
};






https://leetcode.com/problems/pascals-triangle/description/