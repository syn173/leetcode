/**
 * 通过看solution得到解法
 * 有点分治法的思想，可以逐个计算当前第一位是在原数组中的位置；这里是不断将问题范围缩小
 * 例如 1234 当k小于等于前3!都是1，维护原数组的内容，每当计算出新的一个都从原数组中筛选掉
 * 注意索引从0开始，要将k减一
 */
function getPermutation(n: number, k: number): string {
  const res: number[] = [];
  const list: number[] = [0];
  const factorial: number[] = [1];
  for (let i = 1; i <= n; ++i) {
    factorial[i] = i * factorial[i - 1]; // 构造阶乘
    list[i - 1] = i; // 构造初始数组
  }

  --k;
  for (let i = 1; i <= n; ++i) {
    const index = Math.floor(k / factorial[n - i]);
    res.push(list[index]);
    list.splice(index, 1);
    k -= index * factorial[n - i];
  }

  return res.join('');
}

console.log(getPermutation(3, 3));

console.log(getPermutation(4, 9));
