const LN = require('./assist/listNode');
const PriorityQueue = require('./datastructure/priorityQueue');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
  const len = lists.length;
  let head = new ListNode(0), cur = head;
  while(true) {
    let mi, mv = Infinity, k = 0;
    for(let i = 0; i < len; ++i) {
      if (!lists[i]) {
        ++k;
        continue;
      }
      if (lists[i].val < mv) {
        mi = i;
        mv = lists[i].val;
      }
    }

    if (k === len) {
      break;
    }
    head.next = lists[mi];
    head = head.next;
    lists[mi] = lists[mi].next;
  }
  return cur.next;
};

var mergeKLists2 = function (lists) {
  const len = lists.length;
  for (let step = 1; step < len; step <<= 1) {
    for (let i = 0; i < len; i += step * 2) {
      lists[i] = merge2List(lists[i], lists[i + step]);
    }
  }
  return len ? lists[0] : lists;
}

var mergeKLists = function (lists) {
  const pr = new PriorityQueue((l1, l2) => {
    return l2.val - l1.val;
  });
  const len = lists.length;
  for(let i = 0; i < len; ++i) {
    lists[i] && pr.push(lists[i]);
  }
  let head = new ListNode(0), ph;
  const res = head;
  while(!pr.empty()) {
    ph = pr.pop();
    head.next = ph;
    head = head.next;
    if (ph.next) {
      pr.push(ph.next);
    }
  }
  return res.next;
}


// const testData = [[1, 4, 5], [1, 3, 4], [2, 6]];
// mergeKLists(LN.makeList(testData));

var merge2List = function (l1, l2) {
  if (!l2) {
    return l1;
  }
  let head = new ListNode(0);
  const cur = head;
  while (l1 || l2) {
    if (!l1) {
      head.next = l2;
      l2 = l2.next;
    } else if (!l2) {
      head.next = l1;
      l1 = l1.next;
    } else {
      if (l1.val < l2.val) {
        head.next = l1;
        l1 = l1.next;
      } else {
        head.next = l2;
        l2 = l2.next;
      }
    }
    head = head.next;
  }
  return cur.next;
}







// const data = [
//   [-10, -7, -6, 0, 2, 2, 3],
//   [-9],
//   [0, 1, 3, 3],
//   [-10, -9, -9, -5, -2, 2, 3, 4],
//   [-9],
//   [-8, -6, -5, 3, 3],
//   [-10, -10, -5, -2, -1, 2, 2],
//   [4],
//   [-9, -5, -3, 0, 0]
// ];
const data = [
  [-8, -7, -7, -5, 1, 1, 3, 4],
  [-2],
  [-10, -10, -7, 0, 1, 3],
  [2]
]
function dou(k ,i) {
  this.k = k;
  this.i = i;
}
var t = function (lists) {
  const pr = new PriorityQueue((l1, l2) => {
    return l2.k - l1.k;
  });
  const len = lists.length;
  for (let i = 0; i < len; ++i) {
    const p = lists[i].shift();
    if (p !== undefined) {
      const next = new dou(p, i);
      pr.push(next);
    }
  }
  let head = [], ph, next;
  const res = head;
  while (!pr.empty()) {
    console.log('this.heaplist ori',pr.len, pr.heapList);
    ph = pr.pop();
    console.log('this.heaplist pop', pr.len, pr.heapList);
    head.push(ph.k);
    next = lists[ph.i].shift();
    console.log('next---', next);
    console.log('----')
    if (next !== undefined) {
      pr.push(new dou(next, ph.i));
    }
  }
  console.log('head---', head);

}
t(data);