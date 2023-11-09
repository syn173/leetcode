/**
 * 分类为hard的题目，应该是考察正则的，完全的取巧就水过去了
 */
function isNumber(s: string): boolean {
  if (/[^0-9+-.eE]/.test(s)) {
    return false;
  }
  // return !isNaN(+s);
  return Number(s) === +s;
}

console.log(isNumber('0'));
