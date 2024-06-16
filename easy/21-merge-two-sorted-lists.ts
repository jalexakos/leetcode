// from https://leetcode.com/problems/merge-two-sorted-lists/description/

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null { 
    if (!list1 && !list2) {
        return null;
    }

    let mergedList = new ListNode();
    let temp = mergedList;
    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val! > list2.val!) {
                temp.val = list2.val;
                list2 = list2.next;
            } else {
                temp.val = list1.val;
                list1 = list1.next;
            }
        } else if (list1) {
            temp.val = list1.val;
            list1 = list1.next;
        } else {
            temp.val = list2?.val;
            if (list2) {
                list2 = list2?.next;
            }
        }

        if (list1 || list2) {
            temp.next = new ListNode();
            temp = temp.next;
        }
    }

    return mergedList;
};

// runtime 62nd percentile
// memory 82nd percentile