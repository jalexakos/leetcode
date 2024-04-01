// from https://leetcode.com/problems/palindrome-linked-list/description/

// Definition for singly-linked list can be found in easy/206-reverse-linked-list.ts

function isPalindromeLinkedList(head: ListNode | null): boolean {
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    let x = 0;
    let y = list.length - 1;
    while (x <= y){
        if (list[x] !== list[y]) return false;
        x++;
        y--;
    }

    return true;
};

// runtime 17th pecentile
// memory 60th percentile