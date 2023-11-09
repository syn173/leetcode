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
var mergeTwoLists1 = function (l1, l2) {
  let newL = new ListNode(0);
  const head = newL;
  while(l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        newL.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        newL.next = new ListNode(l2.val);
        l2 = l2.next;
      }
    } else if (!l1) {
      newL.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      newL.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    newL = newL.next;
  }
  return head.next;
};

var mergeTwoLists = function (l1, l2) {
  let newL = new ListNode(0);
  const head = newL;
  while (l1 || l2) {
   if (!l1) {
      newL.next = l2;
      l2 = l2.next;
    } else if (!l2){
      newL.next = l1;
      l1 = l1.next;
    } else {
      if (l1.val < l2.val) {
        newL.next = l1;
        l1 = l1.next;
      } else {
        newL.next = l2;
        l2 = l2.next;
      }
    }
    newL = newL.next;
  }
  return head.next;
};