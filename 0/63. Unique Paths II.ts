/**
 * 62题强化版，将阻碍的点的step置为0即可
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0]) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const stepArr = [Array(n).fill(1), Array(n)];

  for (let j = 1; j < n; ++j) {
    stepArr[0][j] = obstacleGrid[0][j] || !stepArr[0][j - 1] ? 0 : 1;
  }

  let step = 1;
  for (let i = 1; i < m; ++i, step = 1 - step) {
    stepArr[step][0] = obstacleGrid[i][0] || !stepArr[1 - step][0] ? 0 : 1;
    for (let j = 1; j < n; ++j) {
      stepArr[step][j] = obstacleGrid[i][j]
        ? 0
        : stepArr[1 - step][j] + stepArr[step][j - 1];
    }
  }
  return stepArr[1 - step][n - 1];
}

// console.log(
//   uniquePathsWithObstacles([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
//   ])
// );

// console.log(
//   uniquePathsWithObstacles([
//     [0, 1],
//     [0, 0],
//   ])
// );

// console.log(uniquePathsWithObstacles([[1]]));
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
