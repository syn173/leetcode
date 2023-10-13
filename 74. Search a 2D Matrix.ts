/**
 * 二维的二分查找，因为m、n比较小，可以转成一维，v = i * n + j
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const i = Math.floor(mid / n);
    const j = mid % n;
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

searchMatrix([[1]], 1);
