/**
 * 栈
 */
function simplifyPath(path: string): string {
  const pathArr = path.replace(/\/+/g, '/').split('/').filter(Boolean);
  const stack = [];
  let cursor = 0;

  // console.log('pathArr', pathArr);
  for (let i = 0; i < pathArr.length; ++i) {
    if (pathArr[i] === '..') {
      if (cursor > 0) {
        stack.pop();
        --cursor;
      }
    } else if (pathArr[i] !== '.') {
      stack[cursor++] = pathArr[i];
    }
  }
  return '/' + stack.join('/');
}

console.log(simplifyPath('/a/./b/../../c/'));
