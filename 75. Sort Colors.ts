/**
 * 桶排序
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const heap = [0, 0, 0];
  for (let i = 0; i < nums.length; ++i) {
    heap[nums[i]]++;
  }
  const sum = [heap[0], heap[0] + heap[1], heap[0] + heap[1] + heap[2]];
  for (let i = 0; i < nums.length; ++i) {
    if (i < sum[0]) {
      nums[i] = 0;
    } else if (i < sum[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
}
