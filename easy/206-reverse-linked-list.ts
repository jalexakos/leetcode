// from https://leetcode.com/problems/reverse-linked-list

// Definition for singly-linked list.
class ListNode {
    val: number | undefined
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head){
        return head;
    }

    let reverse = head;
    let values = [];
    while (reverse.next) {
        values.push(reverse.val);
        reverse = reverse.next;
    }

    let temp = reverse;
    while (values.length > 0){
        temp.next = new ListNode;
        temp.next.val = values.pop();
        temp = temp.next;
    }

    return reverse;
};

// runtime 92nd percentile
// memory 6th percentile