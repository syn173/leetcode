/**
 * @param {number} n
 * @return {string}
 */
var intToRoman = function (n) {
  const romanKeys = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let roman = '', k = 0;
  while(n) {
    const digit = n % 10;
    let curV = '';
    if (digit == 9) {
      curV = romanKeys[k][0] + romanKeys[k+1][0];
    } else if (digit > 5) {
      curV = romanKeys[k][1] + Array(digit-5).fill(romanKeys[k][0]).join('');
    } else if (digit == 5) {
      curV = romanKeys[k][1];
    } else if (digit == 4) {
      curV = romanKeys[k][0] + romanKeys[k][1];
    } else {
      curV = Array(digit).fill(romanKeys[k][0]).join('');
    }
    roman = curV + roman;
    n = parseInt(n / 10);
    ++k;
  }
  //console.log('roman-', roman);
  return roman;
};

intToRoman(3);
intToRoman(4);
intToRoman(9);
intToRoman(58);
intToRoman(1994);

// from leetcode top
var intToRoman_B = function (num) {
  var roman = '';
  var map = {
    M: 1000, CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var i;
  for (i in map) {
    while (num >= map[i]) {
      roman += i;
      num -= map[i];
    }
  }
  return roman;
};