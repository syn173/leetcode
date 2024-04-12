function sortArr(arr) {
  const oddArr = []
  const evenArr = []
  for(let i = 0; i < arr.length; ++i) {
    if (arr[i] & 1) {
      oddArr.push(arr[i])
    } else {
      evenArr.push(arr[i])
    }
  }
  oddArr.sort()
  evenArr.sort((a, b) => b - a)

  // console.log(oddArr, evenArr)
  const res = []
  let i = 0, j = 0, k = 0;
  for(; i < oddArr.length && j < evenArr.length; ++i, ++j) {
    res[k++] = oddArr[i]
    res[k++] = evenArr[j]

  }
  for(; i < oddArr.length; ++i) {
    res[k++] = oddArr[i]
    if (i != oddArr.length - 1) {
      k++
    }

  }
  for(;j < evenArr.length; ++j) {
    k++
    res[k++] = evenArr[j]
  }
  console.log(res)
  return res
}

sortArr([3,2,1,4, 6])

function debounce(fn, delt) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delt);
  }
}