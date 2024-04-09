// from https://leetcode.com/problems/valid-palindrome-ii/description/

// from chatGPT
function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}

function isPalindrome(s: string, start: number, end: number): boolean {
    while (start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// runtime 49th percentile
// memory 72nd percentile