/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
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