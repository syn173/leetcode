/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function (h) {
  let max = 0, i, j;
  const len = h.length;
  for(i = 0; i < len; ++i) {
    for(j = i + 1; j < len; ++j) {
      max = Math.max(max, Math.min(h[j], h[i]) * (j - i));
    }

  }
  //console.log(max);
  return max;
};

var maxArea = function (h) {
  let i = 0, j = h.length - 1, max = 0;
  while(i < j) {
    if (h[i] < h[j]) {
      max = Math.max(max, h[i] * (j - i));
      ++i;
    } else {
      max = Math.max(max, h[j] * (j - i))
      --j;
    }
  }
  //console.log(max);
  return max;
}

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
maxArea([500, 10, 10, 5000, 501]);
maxArea1([500, 10, 10, 5000, 501]);