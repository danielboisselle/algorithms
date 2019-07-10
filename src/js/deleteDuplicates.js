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
var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }
  
  let slow = head;
  let fast = head.next;
  
  while (fast) {
      if (slow.val !== fast.val) {
          slow.next = fast;
          slow = slow.next;
      }
      
      fast = fast.next;
  }
  
  return head;
};
