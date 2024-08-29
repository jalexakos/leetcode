// Maximum Repeating Substring
// from https://leetcode.com/problems/maximum-repeating-substring

function maxRepeating(sequence: string, word: string): number {
    let count = 0;
    for (let i = 0; i <= sequence.length - word.length; i++) {
        let temp = 0;
        let k = i;
        while (sequence.slice(k, k + word.length) === word) {
            temp++;
            k += word.length;
        }
        if (temp > count) count = temp;
    }

    return count;
};

// runtime 81st percentile
// memory 87th percentile