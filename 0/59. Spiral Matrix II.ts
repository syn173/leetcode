/**
 * 简单模拟题，使用js关键是输出数组的初始化，开始直接写成 Array(n).fill(Array(n))，结果造成引用相同了
 */
function generateMatrix(n: number): number[][] {
  const harf = n >> 1;
  let count: number = 1;
  const res: number[][] = [];
  for (let i = 0; i < n; ++i) {
    res.push(Array(n));
  }

  for (let i = 0; i < harf; ++i) {
    let row = i;
    let col = i;
    for (; col < n - i; ++col) {
      res[row][col] = count++;
    }
    for (--col, ++row; row < n - i; ++row) {
      res[row][col] = count++;
    }
    for (--row, --col; col >= i; --col) {
      res[row][col] = count++;
    }
    for (++col, --row; row > i; --row) {
      res[row][col] = count++;
    }
  }
  if (n & 1) {
    res[harf][harf] = n * n;
  }
  return res;
}

console.log(generateMatrix(3));
