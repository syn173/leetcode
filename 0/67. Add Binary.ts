/**
 * 简单加法模拟
 */
function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  const res = [];
  for (; i >= 0 || j >= 0; --i, --j) {
    const av = i >= 0 ? Number(a.charAt(i)) : 0;
    const bv = j >= 0 ? Number(b.charAt(j)) : 0;
    const sum = carry + av + bv;
    res.unshift(sum % 2);
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join('');
}

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
