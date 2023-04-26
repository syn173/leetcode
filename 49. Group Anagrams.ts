/**
 * 1A
 * 简单并查集
 * @param strs
 * @returns
 */
function groupAnagrams(strs: string[]): string[][] {
  const strMap: any = {};
  strs.forEach((str) => {
    const key = Array.from(str).sort().join('');
    if (!strMap[key]) {
      strMap[key] = [];
    }
    strMap[key].push(str);
  });
  const res: string[][] = Object.keys(strMap).map((key) => strMap[key]);
  // console.log('res', res);
  return res;
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
