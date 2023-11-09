/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const hash = [new Set(), new Set(['()'])];
  function recursion(n) {
    if (hash[n]) {
      return hash[n];
    }

    const set = new Set();
    for(let i = 1; i <= n / 2; ++i) {
      const part1 = recursion(i), part2 = recursion(n - i);
      part1.forEach(p1 => {
        part2.forEach(p2 => {
          set.add(`${p1}${p2}`);
          if (p2 != p1) {
            set.add(`${p2}${p1}`)
          }
          if (i === 1) {
            set.add(`(${p2})`);
          }
        });
      })
    }


    return hash[n] = set;
  }
  return n === 0 ? [] : Array.from(recursion(n));
};

console.log(generateParenthesis(4))


// from top
var generateParenthesis_from_top = function (n) {
  let result = []

  const generate = (str = '', open = 0, close = 0) => {
    if (str.length === n * 2) result.push(str)
    if (open < n) generate(str + '(', open + 1, close)
    if (close < open) generate(str + ')', open, close + 1)
  }
  generate();
  return result

};