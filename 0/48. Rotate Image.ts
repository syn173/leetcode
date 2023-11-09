/**
 * 1A成功
 * 思路：将数组分成四块，将左上角旋转一圈即可
 * 后记：看solution后发现可以先做行转列，然后每一行反转即可
 * 另外四次赋值，可以把四个位置都用i,j表达出来的
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length;
  const iLen = Math.floor((len - 1) / 2);
  const jLen = len & 1 ? iLen - 1 : iLen;
  let a, b, t;
  for (let i = 0; i <= iLen; ++i) {
    for (let j = 0; j <= jLen; ++j) {
      const tmp = matrix[i][j];
      a = i;
      b = j;
      matrix[a][b] = matrix[len - b - 1][a];

      t = b;
      b = a;
      a = len - t - 1;
      matrix[a][b] = matrix[len - b - 1][a];

      t = b;
      b = a;
      a = len - t - 1;
      matrix[a][b] = matrix[len - b - 1][a];

      t = b;
      b = a;
      a = len - t - 1;
      matrix[a][b] = tmp;
    }
  }

  matrix.forEach((m) => console.log(m));
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);

/**
 * 后记，看solution后发现可以先做行转列，然后每一行反转即可
 * 另外上面四次赋值，可以把四个位置都用i,j表达出来的
 */
