/**
 * 78. Subsets
 * 第一反应是77的应用，组合c(n, 0), c(n, 1)..., c(n, n)，提交后运行时长排名很靠后，因为递归中有重复计算太多
 * 参考其他的submission，这是一个标准的回溯法，加一层不处理让递归继续走下去，即take it or leave it，放进去或不放进处理
 */

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  const current: number[] = [];

  function travel(level: number) {
    if (level === len) {
      res.push([...current]);
      return;
    }

    current.push(nums[level]);
    travel(level + 1);
    current.pop();

    travel(level + 1);
  }

  travel(0);

  // console.log('res', res);
  return res;
}

function subsets1(nums: number[]): number[][] {
  const res: number[][] = [[]];
  const len = nums.length;

  const current: number[] = [];

  function travel(level: number, k: number) {
    if (current.length === k) {
      res.push([...current]);
      return;
    }

    for (let i = level; i < len; ++i) {
      current.push(nums[i]);
      travel(i + 1, k);
      current.pop();
    }
  }

  for (let i = 1; i <= len; ++i) {
    travel(0, i);
  }

  // console.log('res', res);
  return res;
}

subsets([1, 2, 3]);
