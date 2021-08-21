/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k < 2) {
    return head;
  }
  let point = new ListNode(0);
  point.next = head;
  const res = point;
  while(true) {
    let i, stack = [], tp = point.next;
    for(i = 0; i < k && tp; ++i) {
      stack[i] = tp;
      tp = tp.next;
    }
    if (i < k) {
      break;
    }
    stack[0].next = tp;
    while(--i) {
      stack[i].next = stack[i-1];
    }
    point.next = stack[k-1];
    point = stack[0];
  }
  return res.next;
};

// from leetcode top
var reverseKGroup_from_leetcode_top = function (head, k) {
  if (!head || !head.next) return head;
  let start = head, count = 0;
  while (start && count < k) {
    start = start.next;
    count++;
  }
  if (count < k) return head;

  let previous = null, current = head, count_2 = 0;
  while (current && count_2 < k) {
    let next_head = current.next;
    current.next = previous;
    previous = current;
    current = next_head;
    count_2++;
  }
  head.next = reverseKGroup(current, k);
  return previous;
};