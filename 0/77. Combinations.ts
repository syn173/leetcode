/**
 * 77. Combinations
 * 求组合数，注意递归的起始位置
 */

function combine(n: number, k: number): number[][] {
  const res: any = [];

  function travel(arr: number[], level: number) {
    // console.log('arr', arr, level);
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }

    for (let i = level; i <= n; ++i) {
      travel([...arr, i], i + 1);
    }
  }
  travel([], 1);
  // console.log('res', res);
  return res;
}

combine(4, 2);
