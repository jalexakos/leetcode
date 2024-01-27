// Definition for singly-linked list can be found in easy/206-reverse-linked-list.ts
 
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let temp = head;
    let prev = head;
    while (temp){
        if (temp.val === val){
            if (temp.val === head?.val){
                head = temp.next;
                temp = head;
                prev = head;
            } else {
                if (prev){
                    prev.next = temp.next;
                    temp = prev;
                }
            }
        } else {
            prev = temp;
            temp = temp.next;
        }
    }

    return head;
};

// runtime 25th percentile
// memory 6th percentile