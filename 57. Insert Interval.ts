/**
 * 和56题不同的是新插入一个数组，首先想到的是二分查找把这个新数插进去，但看数据范围不大，直接塞进去，再用56题的方法提交直接ac了(insert1)，真是一点儿也不卡时间
 * 然后还是没有用二分，直接遍历过去插入，也是ac了
 */

function insert1(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval);

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

function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let i;
  for (i = 0; i < intervals.length; ++i) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }
  if (i === intervals.length) {
    intervals.push(newInterval);
  }

  let left: number = intervals[0][0];
  let right: number = intervals[0][1];

  const res: number[][] = [];
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

insert(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5]
);

insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
);
