function heapAdjust(a, s, e) {
  let tc = a[s], j;
  for(j = (s << 1) + 1; j <= e; j= (j<<1) + 1) {
    if(j < e && a[j+1] > a[j]) {
      ++j;
    }
    if (tc > a[j]) {
      break;
    }
    a[s] = a[j];
    s = j;
  }
  a[s] = tc;
}

function heapSort(a) {
  const len = a.length, harfLen = len >> 1;
  for(let i = harfLen; i >= 0 ; --i) {
    heapAdjust(a, i, len - 1);
  }
  let t;
  for(let i = len - 1; i > 0; --i) {
    t = a[0];
    a[0] = a[i];
    a[i] = t;
    heapAdjust(a, 0, i - 1);
  }
}

const arr = [13, 11, 10, 2, 8, 5];
heapSort(arr);
console.log('arr', arr);
