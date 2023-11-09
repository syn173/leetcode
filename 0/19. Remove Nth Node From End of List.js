/**
 * Definition for singly-linked list.
**/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  let tHead = head;
  let len = 0;
  while (tHead) {
    ++len;
    tHead = tHead.next;
  }
  let res = new ListNode(0);
  let cursor = res, i = 0;
  while (head) {
    if (i == len - n) {
      head = head.next;
    }
    if (head) {
      res.next = new ListNode(head.val);
      head = head.next
    }
    res = res.next;
    ++i;
  }

  return cursor.next;
};

// input [1] 1

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let thead = new ListNode(0);
  thead.next = head;
  let h1 = thead, h2 = thead;
  for(let i = 0; i <= n; ++i) {
    h2 = h2.next;
  }
  while(h2) {
    h2 = h2.next;
    h1 = h1.next;
  }
  h1.next = h1.next.next;
  return thead.next;
}