
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function makeListNode(arr) {
  let cursor = new ListNode(0);
  const head = cursor;
  arr.forEach(a => {
    cursor.next = new ListNode(a);
    cursor = cursor.next;
  });
  return head.next;
}

function makeList(lists) {
  const result = [];
  lists.forEach(lt => {
    result.push(makeListNode(lt));
  })
  return result;
}

function toArray(head) {
  const arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

module.exports = {
  toArray,
  makeList,
}

