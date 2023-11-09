/**
 * 集合Set
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows = [];
  const cols = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!matrix[i][j]) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (let i of new Set(rows).keys()) {
    for (let j = 0; j < n; ++j) {
      matrix[i][j] = 0;
    }
  }

  for (let j of new Set(cols).keys()) {
    for (let i = 0; i < m; ++i) {
      matrix[i][j] = 0;
    }
  }
}
for (let i of new Set([1, 1, 2]).keys()) {
  console.log(i);
}
