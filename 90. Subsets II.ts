/**
 * 90. Subsets II
 * 78题加强版，将数组排序，当有重复时候分别取take 1, 2, ... 重复数量，或leave it
 */
function subsetsWithDup(nums: number[]): number[][] {
  const len = nums.length;
  const orderNums = nums.sort();

  const res: number[][] = [];
  const cur: number[] = [];

  function travel(level: number) {
    if (level === len) {
      res.push([...cur]);
      return;
    }
    let nextLv = level + 1;
    while (nextLv < len && orderNums[level] === orderNums[nextLv]) {
      nextLv++;
    }
    for (let i = 1; i <= nextLv - level; ++i) {
      cur.push(...Array(i).fill(orderNums[level]));
      travel(nextLv);
      cur.splice(cur.length - i, i); // 注意删除索引
    }

    travel(nextLv);
  }

  travel(0);
  // console.log(res);
  return res;
}

subsetsWithDup([1, 2, 2]);
