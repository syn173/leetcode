/**
 * @param {number[]} n
 * @return {number[][]}
 */
var threeSum = function (n) {
  n.sort();
  const len = n.length, result = [];
  const set = new Set(), map = new Map();
  let key;
  for(let i = 0; i < len; ++i) {
    map.set(n[i], i);
  }
  for(let i = 0; i < len - 2; ++i)
    for(let j = i + 1; j < len - 1; ++j){
      k = map.get(-n[i]-n[j]);
      if (k !== undefined && k > j) {
        key=n[i] + '_' + n[j];
        if (!set.has(key)) {
          set.add(key);
          result.push([n[i], n[j], -n[i]-n[j]]);
        }
      }
    }
  //console.log('result', result);
  return result;
};


threeSum([-1, 0, 1, 2, -1, -4]);


// from leetcode top
const threeSum2 = (nums, target = 0) => {
  const ret = [];

  if (nums.length < 3) {
    return ret;
  }

  nums = new Int32Array(nums);
  nums.sort((a, b) => a - b);

  for (let start = 0; start < nums.length; ++start) {
    let mid = start + 1;
    let end = nums.length - 1;

    while (mid < end) {
      const sum = nums[start] + nums[mid] + nums[end];

      if (sum === target) {
        ret.push([nums[start], nums[mid], nums[end]]);

        while (nums[mid] === nums[mid + 1]) {
          ++mid;
        }

        while (nums[end] === nums[end - 1]) {
          --end;
        }

        ++mid;
        --end;
      } else if (sum < target) {
        ++mid;
      } else {
        --end;
      }
    }

    while (nums[start] === nums[start + 1]) {
      ++start;
    }
  }

  return ret;
};