/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //LOGIC
      //while loop through l1 and l2
      //add both values, if above 10, save remainder + 1
      //keep going until finish of both list
      //return head;

    let remainder = 0;
    let pointer1 = l1;
    let pointer2 = l2;
    let dummyNode = new ListNode();
    let pointerSum = dummyNode;

    while (pointer1 || pointer2 || remainder) {

      if (pointer1 && pointer2) {
        let sum = pointer1.val + pointer2.val + remainder;
        if (sum >= 10) {
          pointerSum.next = new ListNode(sum%10);
          remainder = 1;
        } else {
          pointerSum.next = new ListNode(sum);
          remainder = 0;
        }
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
      } else if (pointer1) {
        let sum = pointer1.val + remainder;
        if (sum >= 10) {
          pointerSum.next = new ListNode(sum%10);
          remainder = 1;
        } else {
          pointerSum.next = new ListNode(sum);
          remainder = 0;
        }
        pointer1 = pointer1.next;
      } else if (pointer2) {
        let sum = pointer2.val + remainder;
        if (sum >= 10) {
          pointerSum.next = new ListNode(sum%10);
          remainder = 1;
        } else {
          pointerSum.next = new ListNode(sum);
          remainder = 0;
        }
        pointer2 = pointer2.next;
      } else {
        pointerSum.next = new ListNode(remainder);
        remainder = 0;
      }
      pointerSum = pointerSum.next;
    }

    return dummyNode.next;
};

var addTwoNumbers = function(l1, l2) {

  let remainder = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  let dummyNode = new ListNode();
  let pointerSum = dummyNode;

  while (pointer1 || pointer2 || remainder) {

    let sum = (pointer1 ? pointer1.val : 0) + (pointer2 ? pointer2.val : 0) + remainder;
    if (sum >= 10) {
      pointerSum.next = new ListNode(sum%10);
      remainder = 1;
    } else {
      pointerSum.next = new ListNode(sum);
      remainder = 0;
    }

    pointer1 ? pointer1 = pointer1.next : null;
    pointer2 ? pointer2 = pointer2.next : null;

    pointerSum = pointerSum.next;
  }

  return dummyNode.next;
};