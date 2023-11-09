/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanKeys = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M'], ['']];
  let sum = 0, weight = 1, k = 0;
  while(s.length) {
    let digit;
    let ro, curRo = '';

    if (s.length > 1 && s[s.length - 1] == romanKeys[k + 1][0] && s[s.length - 2] == romanKeys[k][0]) {
      digit = 9;
      s = s.slice(0, -2);
    } else {
      while (romanKeys[k].indexOf(ro = s[s.length-1]) > -1) {
        s = s.slice(0, -1);
        curRo = ro + curRo;
      }

      if (!curRo) {
        digit = 0
      } else if (curRo[0] == romanKeys[k][1]) {
        digit = 5 + curRo.length - 1;
      } else if (curRo.length > 0 && curRo[curRo.length - 1] === romanKeys[k][1]) {
        digit = 5 - curRo.length + 1;
      } else {
        digit = curRo.length;
      }
    }
    sum += digit * weight;
    weight *= 10;
    ++k;
  };
  //console.log('sum', sum);
  return sum;
};

// romanToInt('III')
// romanToInt('IV')
// romanToInt('IX')
// romanToInt('LVIII')
// romanToInt('MCMXCIV')
romanToInt("MMCCCXCIX")

/* from leetcode top1 */
var romanToInt2 = function (s) {
  let ans = 0
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  let prev = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = romanMap.get(s[i])
    if (cur < prev) {
      ans -= cur
    } else {
      ans += cur
    }
    prev = cur
  }
  return ans
};