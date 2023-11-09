/**
 * 贪心模拟，一个个的塞，满了就拼装即可
 */

function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];
  let curLen = 0;
  let list: string[] = [];

  function generateNewStr() {
    const allSpace = maxWidth - curLen;
    if (list.length === 1) {
      return list[0] + ' '.repeat(allSpace);
    }

    const singleSpace = ~~(allSpace / (list.length - 1));
    const remainSpace = allSpace % (list.length - 1);
    let newStr = '';
    let j = 0;
    for (; j < remainSpace; ++j) {
      newStr += list[j] + ' '.repeat(singleSpace + 1);
    }

    for (; j < list.length - 1; ++j) {
      newStr += list[j] + ' '.repeat(singleSpace);
    }
    newStr += list[j];

    return newStr;
  }

  for (let i = 0; i < words.length; ++i) {
    if (words[i].length + curLen + list.length <= maxWidth) {
      list.push(words[i]);
      curLen += words[i].length;
      continue;
    }
    const newStr = generateNewStr();
    res.push(newStr);
    list = [words[i]];
    curLen = words[i].length;
  }

  let newStr = list.join(' ');
  if (newStr.length < maxWidth) {
    newStr += ' '.repeat(maxWidth - newStr.length);
  }
  res.push(newStr);

  // console.log(res);
  return res;
}

fullJustify(
  ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
  16
);
