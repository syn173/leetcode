/**
 *  简单加法模拟题
 */
function plusOne(digits: number[]): number[] {
  let digit = 1;
  for (let i = digits.length - 1; i >= 0 && digit; --i) {
    digits[i] = (digits[i] + 1) % 10;
    digit = digits[i] === 0 ? 1 : 0;
  }
  if (digit) {
    digits.unshift(1);
  }
  // console.log(digits);
  return digits;
}

plusOne([1, 2, 3]);
