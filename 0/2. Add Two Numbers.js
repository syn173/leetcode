/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var res = new ListNode(0), assist = 0;
  var ans = res;
  var a, b;
  while (l1 || l2) {
    a = l1 && l1.val || 0;
    b = l2 && l2.val || 0;
    res.next = new ListNode((a + b + assist) % 10);
    res = res.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);

    assist = parseInt((a + b + assist) / 10, 10);

  }
  if (assist > 0) {
    res.next = new ListNode(assist);
  }
  return ans.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);