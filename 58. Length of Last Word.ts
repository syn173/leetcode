/**
 * easy and have many solutions
 */
function lengthOfLastWord(s: string): number {
  s = s.replace(/\s+$/g, '');

  const arr: string[] = s.split(' ');
  // console.log(arr);
  return arr.length ? arr[arr.length - 1].length : 0;
}

// case 1
// console.log(lengthOfLastWord('Hello World'));

// case 2
console.log(lengthOfLastWord('   fly me   to   the moon  '));
