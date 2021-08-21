/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let flag = false;

  function solve(i, j) {
    if (flag) {
      return;
    }
    if (i === 9) {
      flag = true;
      return;
    }
    if (board[i][j] != '.') {
      if (j === 8) {
        solve(i + 1, 0);
      } else {
        solve(i, j + 1);
      }
      return;
    }

    for (let k = 1; k <= 9; ++k) {
      board[i][j] = String(k);
      if (check(i, j)) {
        if (j === 8) {
          solve(i + 1, 0);
        } else {
          solve(i, j + 1);
        }
      }
      if (flag) {
        return;
      }
      board[i][j] = '.';
    }
  }

  function check(i, j) {
    let c, k, row = [], col = [], cross = [];
    for(k = 0; k < 9; ++k) {
      c = board[i][k];
      if (c !== '.') {
        if (row[c]) {
          return false;
        }
        row[c] = true;
      }
      c = board[k][j];
      if (c !== '.') {
        if (col[c]) {
          return false;
        }
        col[c] = true;
      }
      c = board[~~(i / 3) * 3 + k % 3][~~(j / 3) * 3 + ~~(k / 3)];
      if (c !== '.') {
        if (cross[c]) {
          return false;
        }
        cross[c] = true;
      }
    }
    // const ic = Math.floor(i / 3) * 3, jc = Math.floor(j / 3) * 3, cross = [];
    // for(let k1 = ic; k1 < ic + 3; ++k1) {
    //   for(let k2 = jc; k2 < jc + 3; ++k2) {
    //     c = board[k1][k2];
    //     if (c !== '.') {
    //       if (cross[c]) {
    //         return false;
    //       }
    //       cross[c] = true;
    //     }
    //   }
    // }
    return true;
  }

  solve(0, 0);
  console.log('res', board);
};

const data = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(data);

