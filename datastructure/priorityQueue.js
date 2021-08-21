class PriorityQueue {
  constructor(compare) {
    if (compare) {
      this.compare = compare;
    }
    this.heapList = [];
    this.len = 0;
  }

  heapAdjust(s) {
    const tc = this.heapList[s];
    for(let j = s * 2 + 1; j < this.len; j = s * 2 + 1) {
      if (j < this.len && this.compare(this.heapList[j], this.heapList[j+1]) < 0) {
        j++;
      }
      if (this.compare(this.heapList[j], tc) < 0) {
        break;
      }
      this.heapList[s] = this.heapList[j];
      s = j;
    }
    this.heapList[s] = tc;
  }

  push(node) {
    this.heapList[this.len++] = node;
    this.upAdjust();
    return this;
  }

  pop() {
    if (this.len <= 0) {
      return null;
    }
    const head = this.heapList[0];
    this.heapList[0] = this.heapList[--this.len];
    this.heapAdjust(0);
    return head;
  }

  upAdjust() {
    let cI = this.len - 1;
    let pI = (cI - 1) >> 1;
    const tc = this.heapList[cI];
    while(cI > 0 && this.compare(tc, this.heapList[pI]) > 0) {
      this.heapList[cI] = this.heapList[pI];
      cI = pI;
      pI = (pI - 1) >> 1;
    }
    this.heapList[cI] = tc;
  }

  empty() {
    return this.len === 0;
  }

  compare(a, b) {
    return a - b;
  }
}

module.exports = PriorityQueue;

// const pr = new PriorityQueue();
// pr.push(3).push(1).push(5).push(11).push(8);
// let h;
// while((h = pr.pop()) !== null) {
//   console.log(h);
// }

