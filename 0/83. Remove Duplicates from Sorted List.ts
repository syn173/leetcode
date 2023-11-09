/**
 * 83. Remove Duplicates from Sorted List
 * 简单链表操作
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const root = head;
  let cur = head;
  let pre = head;
  while (cur) {
    while (cur.next && cur.next.val === cur.val) {
      cur = cur.next;
    }
    pre.next = cur.next;
    cur = cur.next;
    pre = cur;
  }
  return root;
}
