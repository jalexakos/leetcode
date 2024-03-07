// from https://leetcode.com/problems/middle-of-the-linked-list/description

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

function middleNode(head: ListNode | null): ListNode | null {
    let track = head;
    let length = 0;
    while (track) {
        length++;
        track = track.next;
    }

    const midPoint = Math.floor(length / 2) + 1;
    // reset track to head
    track = head;
    let midPointTracker = 0;

    while (track) {
        midPointTracker++;
        if (midPointTracker === midPoint) return track;
        track = track.next;
    }
    return head;
};

// runtime 92nd percentile
// memory 25th percentile