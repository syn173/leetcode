/**
 * 简单dp,62题变形，只是变化了状态转移方程
 */
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const sumGrid: number[][] = [Array(n), Array(n)];
  sumGrid[0][0] = grid[0][0];
  for (let j = 1; j < n; ++j) {
    sumGrid[0][j] = grid[0][j] + sumGrid[0][j - 1];
  }
  let step = 1;
  for (let i = 1; i < m; ++i) {
    sumGrid[step][0] = sumGrid[1 - step][0] + grid[i][0];
    for (let j = 1; j < n; ++j) {
      sumGrid[step][j] =
        Math.min(sumGrid[step][j - 1], sumGrid[1 - step][j]) + grid[i][j];
    }
    step = 1 - step;
  }
  return sumGrid[1 - step][n - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
