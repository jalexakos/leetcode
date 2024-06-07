// from https://leetcode.com/problems/add-binary/description/

// from ChatGPT
function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        
        result.push(sum % 2); // The current digit
        carry = Math.floor(sum / 2); // The carry
    }

    return result.reverse().join('');
}

// runtime 50th percentile
// memory 34th percentile