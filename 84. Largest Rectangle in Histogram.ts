/**
 * 84. Largest Rectangle in Histogram
 */
/**
 * 参考了资料，好好理解理解单调栈，这名字取得就很拿捏，栈里的数据是单调递增的，当出栈时处理数据，这时候由于单调栈的特性，左右边界就都可以确定了，注意处理最后一条的边界
 */
function largestRectangleArea(heights: number[]): number {
  heights.push(-1); // 放置一个哨兵
  const stack = [];
  let top = 0;
  let maxArea = 0;
  for (let i = 0; i < heights.length; ++i) {
    // console.log('begin', top, stack);
    while (top > 0 && heights[i] < heights[stack[top - 1]]) {
      const left = stack[--top];
      const width = top === 0 ? i : i - stack[top - 1] - 1;
      maxArea = Math.max(heights[left] * width, maxArea);
    }
    stack[top++] = i;

    // console.log('end', top, stack);
  }
  // console.log(maxArea);
  return maxArea;
}

// largestRectangleArea([2, 1, 5, 6, 2, 3]);
largestRectangleArea([4, 2, 0, 3, 2, 5]);
