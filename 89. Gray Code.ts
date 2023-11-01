/**
 * 89. Gray Code
 * 位运算，虽然是1A，相当于莽过去的，解法搞复杂了
 * 实际是一道数学题，附上别人的解法
 */

function grayCode(n: number): number[] {
  const res: number[] = [];
  const queue: number[] = [];
  const visited: any = {};

  queue.push(0);
  while (queue.length) {
    const val: any = queue.shift();

    if (visited[val]) {
      continue;
    }

    res.push(val);
    visited[val] = true;

    for (let i = 0; i < n; ++i) {
      const newVal: any = (1 << i) ^ val;
      if (!visited[newVal]) {
        queue.push(newVal);
        break;
      }
    }
  }
  // console.log(res);
  return res;
}

grayCode(1);

/**
 * from other submission
 */
function grayCode_1(n: number): number[] {
  const result: number[] = [];
  const sequence = 1 << n;
  for (let i = 0; i < sequence; i++) {
    result.push(i ^ (i >> 1));
  }
  return result;
}
