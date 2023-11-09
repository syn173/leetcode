/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let point = new ListNode(0);
  point.next = head;
  const res = point;
  while(point && point.next && point.next.next) {
    tp = point.next;
    point.next = tp.next;
    tp.next = tp.next.next;
    point.next.next = tp;
    point = point.next.next;
  }
  return res.next;
};
