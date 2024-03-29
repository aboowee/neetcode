/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz


Follow up: Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //Count through list
    //Once hit length - n, replace node

    let pointer = head;
    let secondPointerRun = head;
    let size = 0;

    while (pointer) {
      size++;
      pointer = pointer.next;
    }

    let index = size - n;
    let increment = 0;

    if (index === 0) {
      return head ? head = head.next : null;
    }

    while (increment < index) {
      if (increment === index - 1) {
        secondPointerRun.next = secondPointerRun.next.next;
      }
      secondPointerRun = secondPointerRun.next;
      increment++;
    }

    return head;
};