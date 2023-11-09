/**
 * 简单链表处理，看了下别人的提交，可以不使用头结点的
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let endNode = head;
  let count = 1;
  while (endNode.next) {
    ++count;
    endNode = endNode.next;
  }
  k = k % count;
  if (!k) {
    return head;
  }
  k = count - k - 1;

  let cur = head;
  while (k--) {
    cur = cur.next;
  }

  const newHead = new ListNode(null, head);
  endNode.next = head;
  newHead.next = cur.next;
  cur.next = null;
  return newHead.next;
}
