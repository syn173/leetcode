/**
 * 斐波那契数列
 */
function climbStairs(n: number): number {
  const fib: number[] = [1, 1];
  for (let i = 2; i <= n; ++i) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // console.log(fib[n]);
  return fib[n];
}

climbStairs(3);
