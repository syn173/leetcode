/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wlen = words.length, slen = s.length;
  if (!wlen) {
    return [];
  }
  const width = words[0].length;
  const wordsStr = words.sort().join('');
  //console.log('wordsStr--', wordsStr);
  const res = [];
  for(let i = 0; i < width; ++i) {
    const tp =[];
    for(let j = i; j + width <= slen; j += width) {
      tp.push(s.slice(j, j + width));
    }
    //console.log('tp--', tp);
    for(let ii = 0; ii + wlen <= tp.length; ++ii) {
      if(tp.slice(ii, ii + wlen).sort().join('') === wordsStr) {
        res.push(i + ii * width);
      }
    }
  }
  //console.log('res--', res);
  return res;
};

// findSubstring('barfoothefoobarman', ["foo", "bar"]);
// findSubstring('wordgoodgoodgoodbestword', ["word", "good", "best", "word"])
//findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
findSubstring("a", ["a"]);

