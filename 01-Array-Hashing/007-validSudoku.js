/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/*
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board, once = true) {
  //Column Check
  for (let i = 0; i < board[0].length; i++) {
      let column = board.map(row => row[i])
      if (!rowCheck(column)) {
        return false
      }
  }
  //Row Check
  for (let j = 0; j < board.length; j++) {
      if (!rowCheck(board[j])) {
          return false
      }
  }
  //Box Check
  if (once) {
      for (let k = 0; k < board[0].length; k+=3) {
          for (let l = 0; l < board.length; l+=3) {
              let box = board.slice(k, k+3)
              subBox = box.map(row => {
                  return row.slice(l, l+3)
              })
              if (!isValidSudoku(subBox, false)) {
                  return false
              }
          }
      }
  }

  return true
};

var rowCheck = function (row) {
let storage = {};
for (let item of row) {
    if (item === ".") {
        continue
    }
    if (storage[item]) {
        return false
    } else {
        storage[item] = item
    }
}
return true
}