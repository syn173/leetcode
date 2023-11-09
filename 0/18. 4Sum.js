/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (n, t) {
  const result = [], len = n.length;
  if (len < 4) {
    return result;
  }
  n.sort((a, b) => a - b);
  let i, j, left, right, sum;
  for (i = 0; i < len - 3; ++i) {
    for (j = i + 1; j < len - 2; ++j) {
      left = j + 1;
      right = len - 1;
      while (left < right) {
        sum = n[i] + n[j] + n[left] + n[right];
        if (sum == t) {
          result.push([n[i], n[j], n[left], n[right]]);
          while (left < len && n[left] === n[left + 1])++left;
          while (right > 0 && n[right] === n[right - 1])--right;
          ++left;
          --right;
        } else if (sum < t) {
          ++left;
        } else {
          --right;
        }

      }
      while (j < len && n[j] === n[j + 1]) { ++j; };
    }
    while (i < len && n[i] === n[i + 1]) { ++i; }
  }

  //console.log('result-', result);
  return result;
};

// fourSum([1, 0, -1, 0, -2, 2], 0);
//    [ -2, -1, 0, 0, 1, 2 ]
//       0  1   2  3  4  5

fourSum([-1, 2, 2, -5, 0, -1, 4], 3);
//[-5, -1, -1, 0, 2, 2, 4]
//  0   1   2  3  4  5  6