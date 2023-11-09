/**
 * 80. Remove Duplicates from Sorted Array II
 * 首先想到类似冒泡排序，每次发现超过2次都将其沉底，可以ac，但是时间复杂太高了
 * 可以有o(n)的算法，需要维护两个索引，分别是原数组的遍历i和新数组的下标c，必然满足c >= i
 */

function removeDuplicates(nums: number[]): number {
  let c = 1;
  let sum = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      if (sum === 2) {
        continue;
      } else {
        ++sum;
      }
    } else {
      sum = 1;
    }
    nums[c++] = nums[i];
  }
  return c;
}

function removeDuplicates1(nums: number[]): number {
  let count = 0;
  let sum = 0;
  let num = 100000;
  const len = nums.length;

  function swap(a: number, b: number) {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  }

  for (let i = 0; i < len - sum; ++i) {
    if (num !== nums[i]) {
      count = 1;
      num = nums[i];
    } else {
      ++count;
    }
    if (count > 2) {
      --count;
      --i;
      for (let j = i + 1; j < len - sum; ++j) {
        swap(j, j - 1);
      }
      ++sum;
    }

    // console.log(i, num, count, nums);
  }
  return len - sum;
}

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
