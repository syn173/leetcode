function getNext(t) {
  const next = [];
  next[0] = -1;
  let i = 0, j = -1;
  while(i < t.length - 1) {
    if (j == -1 || t[i] == t[j]) {
      ++i; ++j;
      if (t[i] !== t[j]) {
        next[i] = j;
      } else {
        next[i] = next[j];
      }

    } else {
      j = next[j];
    }
  }
  return next;
}

function kmp(s, t, pos = 0) {
  const next = getNext(t);
  let i = pos, j = 0
  while(i  < s.length && j < t.length) {
    if (j == -1 || s[i] == t[j]) {
      ++i; ++j;
    } else {
      j = next[j];
    }
  }
  if (j >= t.length) {
    return i - t.length;
  }
  return -1;
}
// console.log(next(' abaabc')); // 0 1 2 2 23
// console.log(next(' abcdef'));
console.log(kmp('mississippi', 'issip'));