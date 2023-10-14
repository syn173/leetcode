/**
 * 滑动窗口
 */
function minWindow(s: string, t: string): string {
  const hash = Array(128).fill(undefined);
  let end = 0;
  let start = 0;
  let minStart = -1;
  let minEnd = s.length;
  let count = t.length;

  for (let i = 0; i < t.length; ++i) {
    hash[t.charCodeAt(i)] = (hash[t.charCodeAt(i)] || 0) + 1;
  }

  while (end < s.length) {
    // console.log('end', end, s.charAt(end), hash[s.charCodeAt(end)], count);
    if (hash[s.charCodeAt(end)] !== undefined) {
      // 这里要大于0的时候才去消耗数量,主要是保证当过度消耗时count的正确性
      if (hash[s.charCodeAt(end)] > 0) {
        --count;
      }
      --hash[s.charCodeAt(end)];
    }

    // 向右滑动，当满足条件时候开始移动左边界,最终使得不满足条件，再开始下一轮移动右边界
    while (count === 0) {
      // console.log('start', start, hash[s.charCodeAt(start)]);
      if (end - start < minEnd - minStart) {
        minEnd = end;
        minStart = start;
      }

      if (hash[s.charCodeAt(start)] !== undefined) {
        ++hash[s.charCodeAt(start)];
        // 该字母统计大于0时候增加数量
        if (hash[s.charCodeAt(start)] > 0) {
          ++count;
        }
      }

      ++start;
    }

    ++end;
  }

  return minStart === -1 ? '' : s.substr(minStart, minEnd - minStart + 1);
}

// console.log(minWindow('ABECDDBANC', 'ABC'));
// console.log(minWindow('ADOBECODEBANC', 'ABC'));
// console.log(minWindow('bba', 'ba'));

// console.log(minWindow('a', 'aa'));
// console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'));
