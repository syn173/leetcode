/**
 * multiply2 另一个参数去二分，结果失败，因为因数本身可能超出数字型上限
 * multiply3 尝试纯模拟 提交通过，但是时间空间开销太大，没必要维护每一次相乘的结果，可以在下一次计算时直接用上一次的结果，小技巧是通过i+j直接定位当前两个位数相乘应该在的位置
 * 最终 正解
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return "0";
    }
    const dig = [], len1 = num1.length, len2 = num2.length;
    let delt = 0, a, b, res, i, j;
    for(i = 0; i < len1; ++i) {
        delt = 0;
        a = +num1[len1 - i - 1];
        for(j  = 0; j <len2; ++j) {
            b = +num2[len2 - j - 1];
            res = (dig[i + j] || 0) + a * b + delt;
            dig[i + j] = res % 10;
            delt = parseInt(res / 10);
        }
        if (delt) {
            dig[i + j] = delt;
        }
    }
    return dig.reverse().join('');
};

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply3 = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return "0";
    }

    const res = [], len1 = num1.length, len2 = num2.length;
    let m = 0
    for(let i = len2 - 1; i >= 0; --i, ++m) {
        res[m] = [];
        const cur = num2[i];
        let delt = 0;
        for(let k = 0; k < m; ++k) {
            res[m].push(0);
        }

        for(let j = len1 - 1; j >= 0; --j) {
            const sum = cur * (+num1[j]) + delt;
            res[m].push(sum % 10);
            delt = parseInt(sum / 10);
        }
        if (delt > 0) {
            res[m].push(delt)
        }
    }
    const len = res.length;
    let sum = res[0];
    for(let i  = 1; i < len; ++i) {
        sum = bigAddArr(sum, res[i])
    }
    return sum.reverse().join('');
};

function bigAddArr(arr1, arr2) {
    const res = [], len1 = arr1.length, len2 = arr2.length;
    let i = 0, j = 0, delta = 0;
    while(i < len1 || j < len2) {
        const a = i < len1 ? arr1[i] : 0;
        const b = j < len2 ? arr2[j] : 0;
        const sum = a + b + delta;
        res.push(sum % 10);
        delta = parseInt(sum / 10);
        ++i;
        ++j;
    }
    if (delta > 0) {
        res.push(delta);
    }
    return res;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply2 = function(num1, num2) {
    if (+num1 === 0 || +num2 === 0) {
        return "0";
    }
    if (+num2 === 1) {
        return num1;
    }
    const half = multiply(num1, parseInt(num2 / 2));
    return (num2 % 2 === 0) ? bigAdd(half, half) : bigAdd(bigAdd(half, half), num1);
};

function bigAdd2(num1, num2) {
    let delta = 0;
    let pos1 = num1.length - 1;
    let pos2 = num2.length - 1;
    const res = [];
    while(pos1 >= 0 || pos2 >= 0) {
        const a = pos1 >= 0 ? +num1[pos1] : 0;
        const b = pos2 >= 0 ? +num2[pos2] : 0;
        res.push((a + b + delta) % 10) ;
        delta = parseInt((a + b + delta) / 10);
        --pos1;
        --pos2;
    }
    if (delta) {
        res.push(delta);
    }
    return res.reverse().join('');
}

console.log(multiply("123456789", "987654321"));
// console.log(multiply("123", "456"));
// console.log(multiply("99", "12"));

/*
input
"123456789"
"987654321"

Expected
121932631112635269
 */