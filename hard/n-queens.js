var solveNQueens = function (n) {
	//creating an empty board(2d matrix) without referential equality
	const board = Array(n).fill().map((item) => Array(n).fill("."));


//recursive funtion to find all the combinations of queens for each row and column
const recursive = (board, row) => {
    
  if (row === n) {
      //if a queen is set in all n rows
  let strArray=[]
  
  //creating an array of strings from the board to match sample output
   for(let i=0;i<n;i++){
     let tempStr=""
     for(let j=0;j<n;j++){
       tempStr+=board[i][j]
     }
     strArray.push(tempStr)
   }
    return [strArray];
  }
    
  let result=[]
  //i will represent all the columns of the row in the current recursive call
  for (let i = 0; i < n; i++) {
      //checking wether the current cell is safe to put a queen or not
    if (isSafe(row, i)) {
        
      board[row][i] = "Q";
      let temp=recursive(board, row + 1);
        //if the above call will not transition into a valid combination then
        //empty array will be returned and nothing will be added to the current recursive call's result
      result.push(...temp)     //array of string will be added to current recursive call if a valid combination is returned
      board[row][i] = ".";     //will backtrack or clear the marked queens positions once the combination is found or even not found
        
    }
    
  }

 
  return result;
};

//function to check whether the current position is safe to put a queen or not
const isSafe = (row, col) => {

  //checking vertically
  for (let i = 0; i < n; i++) {
      if(board[i][col]==="Q"){
          return false;
      }     
  }
    
  //checking horizontally
  for (let i = 0; i < n; i++) {
      if(board[row][i]==="Q"){
          return false;
      }     
  }
    
  let steps;
    
  //top left diagonal
  steps=Math.min(row,col)
  for(let i=1;i<=steps;i++){
    if(board[row-i][col-i]==="Q"){
      return false
    }
  }

  //bottom left diagonal
  steps=Math.min(n-row-1,col)
  for(let i=1;i<=steps;i++){
    if(board[row+i][col-i]==="Q"){
      return false
    }
  }

  //bottom right diagonal
  steps=Math.min(n-row-1,n-col-1)
  for(let i=1;i<=steps;i++){
    if(board[row+i][col+i]==="Q"){
      return false
    }
  }

  //top right diagonal
  steps=Math.min(row,n-col-1)
  for(let i=1;i<=steps;i++){
    if(board[row-i][col+i]==="Q"){
      return false
    }
  }
  
  return true;

};

return recursive(board, 0);
  };