/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (n, t) {
  n.sort((a, b) => a - b);
  const len = n.length;
  let delt = Infinity, result;
  for(let i = 0; i < len - 2; ++i) {
    let left = i + 1, right = len - 1;
    while(left < right) {
      const sum = n[i] + n[left] + n[right];
      if (sum == t) {
        return sum;
      }

      if (Math.abs(sum - t) < delt) {
        delt = Math.abs(sum - t);
        result = sum;
      }

      if (sum < t) {
        ++left
      } else {
        --right;
      }
    }
    while(n[i] === n[i+1]) ++i;
  }
  //console.log(result);
  return result;
};

// threeSumClosest([-1, 2, 1, -4], 1);
threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)

// from leetcode
var threeSumClosest_Leet = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1,
      end = nums.length - 1
    const min = nums[i] + nums[start] + nums[start + 1]
    const max = nums[i] + nums[end] + nums[end + 1]
    if (target < min) {
      if (Math.abs(min - target) < Math.abs(ans - target)) {
        ans = min
        continue
      }
    }
    if (target > max) {
      if (Math.abs(max - target) < Math.abs(ans - target)) {
        ans = max
        continue
      }
    }
    while (start < end) {
      const sum = nums[start] + nums[end] + nums[i]
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }
      if (target > sum) {
        start++
        while (nums[start] === nums[start - 1]) {
          start++
        }
      } else if (target < sum) {
        end--
        while (nums[end] === nums[end + 1]) {
          end--
        }
      } else {
        return ans
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++
    }
  }
  return ans
};