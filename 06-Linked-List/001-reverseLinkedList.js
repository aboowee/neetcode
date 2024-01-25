/*
Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
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
 * @return {ListNode}
 */
var reverseList = function(head) {

  //Input head of linked list
  //Output new linked list

  //LOGIC
    //Iterate from head to next until end
      //Save current node
      //Make node become the .next of current new head
      //1 > 2 > 3 > 4 > 5 > null
      //head > 1
      //head > 2 > 1
      //head > 3 > 2 > 1

    let currentNode = head;
    //head > null
    //head > 1 > null
    let previousNode = null;

    while (currentNode) {
      let next = currentNode.next
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = next;
    }

    return previousNode;
};