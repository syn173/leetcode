/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const len = 9;
  let row = [], col = [], cross = [], c, k;
  for(i = 0; i < len; ++i) {
    for(j = 0; j < len; ++j) {
      c = board[i][j];
      if (c === '.') {
        continue;
      }
      if (!row[i]) {
        row[i] = [];
      }
      if (row[i][c]) {
        return false;
      }
      if (!col[j]) {
        col[j] = [];
      }
      if (col[j][c]) {
        return false;
      }
      k = parseInt(i / 3) * 3 + parseInt(j / 3);
      if (!cross[k]) {
        cross[k] = [];
      }
      if (cross[k][c]) {
        return false;
      }
      row[i][c] = col[j][c] = cross[k][c] = true;
    }
  }
  return true;
};

//[["8", "3", ".", ".", "7", ".", ".", ".", "."],["6", ".", ".", "1", "9", "5", ".", ".", "."],[".", "9", "8", ".", ".", ".", ".", "6", "."],["8", ".", ".", ".", "6", ".", ".", ".", "3"],["4", ".", ".", "8", ".", "3", ".", ".", "1"],["7", ".", ".", ".", "2", ".", ".", ".", "6"],[".", "6", ".", ".", ".", ".", "2", "8", "."],[".", ".", ".", "4", "1", "9", ".", ".", "5"],[".", ".", ".", ".", "8", ".", ".", "7", "9"]]