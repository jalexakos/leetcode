// Count Items Matching a Rule
// from https://leetcode.com/problems/count-items-matching-a-rule/description/

let keys: Record<string,number> = {
    "type": 0,
    "color": 1,
    "name": 2
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let count = 0;
    let key: number = keys[ruleKey];
    for (let i = 0; i < items.length; i++) {
        if (items[i][key] === ruleValue) count++;
    }

    return count;
};

// runtime 99th percentile
// memory 67th percentile