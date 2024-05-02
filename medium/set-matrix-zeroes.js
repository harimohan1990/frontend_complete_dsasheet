var setZeroes = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j]==0){
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dummyRow[i] == 0 || dummyCol[j] == 0 ){
                matrix[i][j]=0;
            }
        }
    }
};

https://leetcode.com/problems/set-matrix-zeroes