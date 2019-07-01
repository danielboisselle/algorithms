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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let sortedList = [];
  
  while(l1 || l2) {
      if (!l1) {
          sortedList.push(l2.val)
          l2 = l2.next;
      } else if (!l2) {
          sortedList.push(l1.val)
          l1 = l1.next;
      } else if (l1.val < l2.val) {
          sortedList.push(l1.val)
          l1 = l1.next;
      } else {
          sortedList.push(l2.val);
          l2 = l2.next;
      }
  }
  
  let head = null;
  let list = null;
  
  for (key in sortedList) {
      if (!list) {
          list = new ListNode(sortedList[key]);
          head = list;
      } else {
          head.next = new ListNode(sortedList[key]);
          head = head.next;
      }
  }
  
  return list;
};
