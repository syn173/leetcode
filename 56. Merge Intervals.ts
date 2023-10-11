/**
 * 贪心，第一次提交没考虑到case 3的情况
 */
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a: number[], b: number[]) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let left: number = intervals[0][0];
  let right: number = intervals[0][1];

  const res: number[][] = [];
  let i: number;
  for (i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] <= right) {
      if (intervals[i][1] > right) {
        right = intervals[i][1];
      }

      continue;
    }
    res.push([left, right]);

    left = intervals[i][0];
    right = intervals[i][1];
  }
  res.push([left, right]);
  // console.log('res', res);
  return res;
}

// merge([
//   [1, 3],
//   [8, 10],
//   [2, 6],
//   [15, 18],
// ]);

// case 3
merge([
  [1, 4],
  [2, 3],
]);
