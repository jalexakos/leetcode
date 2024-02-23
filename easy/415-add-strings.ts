// from https://leetcode.com/problems/add-strings/description/

// my first effort
function addStrings(num1: string, num2: string): string {
    let total = 0;
    const numHash: Record<string, number> = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
    };

    let shortestStrLength = num1.length < num2.length ? num1.length : num2.length;

    let num1Flipped = num1.split('').reverse().join('');
    let num2Flipped = num2.split('').reverse().join('');
    for (let i = 0; i < shortestStrLength; i++) {
        total += ((numHash[num1Flipped[i]] * 10**i) + (numHash[num2Flipped[i]] * 10**i));
    }

    if (num1Flipped.length > num2Flipped.length) {
        for (let i = num2Flipped.length; i < num1Flipped.length; i++) {
            total += (numHash[num1Flipped[i]] * 10**i);
        }
    } else if (num1Flipped.length < num2Flipped.length) {
        for (let i = num1Flipped.length; i < num2Flipped.length; i++) {
            total += (numHash[num2Flipped[i]] * 10**i);
        } 
    }

    return String(total);
};

// from chatGPT
function addStringsFromChatGPT(num1: string, num2: string): string {
    let total = '';
    let carry = 0;
    const numHash: Record<string, number> = {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    };

    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? numHash[num1[i]] : 0;
        const digit2 = j >= 0 ? numHash[num2[j]] : 0;
        const sum = digit1 + digit2 + carry;
        
        carry = Math.floor(sum / 10);
        total = String(sum % 10) + total;

        i--;
        j--;
    }

    return total;
}
