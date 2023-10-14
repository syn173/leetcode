/**
 * 82. Remove Duplicates from Sorted List II
 * 链表处理，新增头节点统一处理
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
  if (!head || !head.next) {
    return head;
  }
  const headNode = new ListNode(null, head);
  let cur = headNode.next;
  let pre = headNode;
  while (cur) {
    if (cur.next && cur.next.val === cur.val) {
      while (cur.next && cur.next.val === cur.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }

  return headNode.next;
}

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const headNode = new ListNode(null, head);
  let cursor = headNode;
  while (cursor) {
    let next = cursor.next;
    while (next && next.next && next.val === next.next.val) {
      while (next && next.next && next.val === next.next.val) {
        next = next.next;
      }
      cursor.next = next.next;
      next = next.next;
    }
    cursor = next;
  }
  return headNode.next;
}
