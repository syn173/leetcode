/**
86. Partition List
链表操作，维护好前后节点，链表处理的关键都是把关系梳理清了
因为要保证原来的顺序，链表是好处理的
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const root = new ListNode(null, head);
  let pre = root;
  let left = root;
  while (head) {
    // console.log('start', root, left.val, pre.val, head.val);
    while (head && head.val >= x) {
      pre = head;
      head = head.next;
    }
    if (!head) {
      break;
    }
    // console.log('mid', root, left.val, pre.val, head && head.val);
    if (left.next !== head) {
      const t = left.next;
      left.next = head;
      left = head;
      pre.next = head.next;
      head.next = t;
    } else {
      left = head;
      pre = head;
    }
    head = pre.next;
    // console.log('end', root, left.val, pre.val, head && head.val);
  }
  return root.next;
}
