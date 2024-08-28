// Largest Substring Between Two Equal Characters
// from https://leetcode.com/problems/largest-substring-between-two-equal-characters

function maxLengthBetweenEqualCharacters(s: string): number {
    let longest = -1;
    let hash: Record<string, number[]> = {};

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]] = [...hash[s[i]], i];
        } else {
            hash[s[i]] = [i];
        }
    }

    for (const num of Object.keys(hash)) {
        if (hash[num].length > 1) {
            let temp = hash[num][hash[num].length - 1] - hash[num][0] - 1;
            if (temp > longest) longest = temp;
        }
    }

    return longest;
};

// runtime 51st percentile
// memory 6th percentile