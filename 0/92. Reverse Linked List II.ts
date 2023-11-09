/**
 * 92. Reverse Linked List II
 * 逆转子列表，注意维护前中后三个节点即可
 */

/**
Definition for singly-linked list.
**/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) {
    return head;
  }

  const root = new ListNode(null, head);
  let preLeft = root;

  let i;
  for (i = 1; i < left; i++) {
    preLeft = preLeft.next;
  }

  const leftNode = preLeft.next;

  let cur, pre, next;
  for (next = leftNode.next, pre = leftNode; i <= right; i++) {
    cur = next;
    next = next.next;
    cur.next = pre;
    pre = cur;
  }
  preLeft.next = cur;
  leftNode.next = next;
  return root.next;
}
