/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  function swap(i, j) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }

  function sort(s, e) {
    for(let i = s; i < e; ++i) {
      let flag = false;
      for(let j = s; j < e - (i - s + 1); ++j) {
        if (nums[j] > nums[j + 1]) {
          flag = true;
          swap(j, j + 1);
        }
      }
      if (!flag) {
        break;
      }
    }
  }

  const len = nums.length;
  let i, j, mI = -1, mJ = -1;
  for(i = len - 1; i > 0; --i) {
    if (nums[i] === 0) {
      continue;
    }
    for(j = i - 1; j >= 0; --j) {
      if (nums[j] < nums[i]) {
        if (j > mJ) {
          mJ = j;
          mI = i;
        }
        break;
      }
    }
  }
  //console.log('mI', mI, mJ);
  if (mJ > -1) {
    swap(mI, mJ);
  }
  sort(mJ + 1, len);
  return nums;
};
// console.log(nextPermutation([1, 3, 2]));
// console.log(nextPermutation([5, 4, 7, 5, 3, 2]));
console.log(nextPermutation([4, 2, 0, 2, 3, 2, 0]))
