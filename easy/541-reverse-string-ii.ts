// from https://leetcode.com/problems/reverse-string-ii/description/

function reverseStr(s: string, k: number): string {
    if (s.length === 1) return s;
    if (s.length < k) return s.split('').reverse().join('');

    let sSplit: Array<string> = s.split('');

    let kCopy = k;
    let start = 0;

    let answer: Array<string> = [];

    // tracking whether we've done the reverse
    let reversed = false;

    while (start < s.length) {
        if (reversed) {
            answer = answer.concat(sSplit.slice(start,kCopy));
        } else {
            answer = answer.concat(sSplit.slice(start,kCopy).reverse());
        }

        reversed = !reversed;
        start += k;
        kCopy += k;
    }

    return answer.join('');
};

// runtime 9th percentile
// memory 11th percentile