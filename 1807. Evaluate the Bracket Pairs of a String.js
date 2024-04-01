// 1807. Evaluate the Bracket Pairs of a String

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const knowMap = {}
  for(let i = 0; i < knowledge.length; ++i) {
      knowMap[knowledge[i][0]] = knowledge[i][1]
  }
  return s.replaceAll(/\((\w+)\)/g, ($0, $1) => {
      // console.log($0, $1)
      return knowMap[$1] ? knowMap[$1] : '?'
  })
};