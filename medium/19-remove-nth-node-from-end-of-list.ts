// Remove Nth Node From End of List
// from https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 0;
  let point = head;
  while (point !== null) {
    count++;
    point = point.next;
  }

  point = head;
  let prev = head;

  while (point !== null) {
    if (count === n) {
      if (prev === point) {
        return point.next;
      }
      prev!.next = point.next;
      return head;
    }
    count--;
    prev = point;
    point = point.next;
  }

  return head;
}

// runtime 100th percentile
// memory 46th percentile
