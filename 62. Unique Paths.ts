/**
 * 简单dp，滚动数组优化
 */
function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) {
    return 1;
  }
  let step = 1;
  const stepArr = [Array(n).fill(1), Array(n)];
  for (let i = 1; i < m; ++i, step = 1 - step) {
    stepArr[step][0] = 1;
    for (let j = 1; j < n; ++j) {
      stepArr[step][j] = stepArr[1 - step][j] + stepArr[step][j - 1];
    }
  }
  return stepArr[1 - step][n - 1];
}

console.log(uniquePaths(3, 7));

console.log(uniquePaths(3, 2));
