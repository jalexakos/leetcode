// Remove Palindromic Subsequences
// from https://leetcode.com/problems/remove-palindromic-subsequences/description/
// from ChatGPT - not my solution
function removePalindromeSub(s: string): number {
    // Check if the string is already a palindrome
    const isPalindrome = (str: string): boolean => {
        return str === str.split('').reverse().join('');
    };

    // If the string is a palindrome, remove it in one step
    if (isPalindrome(s)) {
        return 1;
    }
    
    // If the string is not a palindrome, remove all 'a's and then all 'b's
    return 2;
}

// runtime 91st percentile
// memory 54th percentile

// my failed solution:
function deleteArrIdx(arr: any[], indices: number[]): any[] {
    return arr.filter((elem, idx) => !indices.includes(idx));
}

function removePalindromeSubFailed(s: string): number {
    let reverseS = s.split('').reverse().join('');
    if (reverseS === s) return 1;
    let steps = 0;
    let arrS = s.split('');
    
    while (arrS.length > 0) {
        let indices: number[] = [];
        let left = 0;
        let right = arrS.length - 1;
        while (left <= right) {
            if (arrS[left] === arrS[right]) {
                indices.push(left,right);
                left++;
                right--;
            } else {
                right--;
            }
        }
        if (indices.length === 0) indices.push(left);
        arrS = deleteArrIdx(arrS,indices);
        steps++;
    }

    return steps;
};