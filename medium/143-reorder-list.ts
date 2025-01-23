// Reorder List
// from https://leetcode.com/problems/reorder-list/description/

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

/**
 Do not return anything, modify head in-place instead.
 */

 // my solution
 function findEnd(head: ListNode | null): (ListNode | null)[] {
    if (!head || !head.next) return [head, null];

    let prev;
    while (head.next) {
        prev = head;
        head = head.next;
    }

    return [head, prev!];
}

function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    let point: ListNode | null | undefined = head;
    while (point?.next?.next) {
        let [endNode, prevNode] = findEnd(point);
        endNode!.next = point.next;
        point.next = endNode;
        if (prevNode) prevNode.next = null;
        point = point?.next?.next;
    }

    return;
};

// runtime 5th percentile
// memory 80th percentile

 // from neetcode https://neetcode.io/problems/reorder-linked-list
 function reorderListOpt(head: ListNode | null): void {
    if (!head || !head.next) return;

    let fast: ListNode | null = head.next;
    let slow: ListNode | null = head;

    while (fast?.next) {
        slow = slow!.next;
        fast = fast?.next?.next;
    }

    let second = slow!.next;
    slow!.next = null;
    let prev = null;
    while (second) {
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    let first: ListNode | null = head;
    second = prev;

    while (second) {
        let tmp1: ListNode | null = first!.next;
        let tmp2: ListNode | null = second.next;

        first!.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }

    return;
};

// runtime 100th percentile
// memory 86th percentile