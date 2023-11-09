/**
 * 二分查找
 */
function mySqrt(x: number): number {
  if (!x) {
    return 0;
  }
  let left = 0,
    right = 2147483648;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = mid * mid;
    if (res === x) {
      return mid;
    }
    if (res < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

console.log(mySqrt(17));
