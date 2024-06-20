// from https://leetcode.com/problems/group-anagrams/description/

function countCharacters(word: string): Map<string, number> {
    const charCountMap = new Map<string, number>();

    for (const char of word) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char)! + 1);
        } else {
            charCountMap.set(char, 1);
        }
    }

    return charCountMap;
}

function groupAnagrams(strs: string[]): string[][] {
    let answer: string[][] = [];
    let maps: Array<Map<string,number>> = [];
    
    for (let i = 0; i < strs.length; i++) {
        let newMap = countCharacters(strs[i]);
        let same = false;

        for (let x = 0; x < maps.length; x++) {
            if (newMap.size !== maps[x].size) continue;
            
            same = true;

            newMap.forEach((v,k) => {
                if (maps[x].has(k)) {
                    if (maps[x].get(k) !== v) {
                        same = false;
                    }
                } else {
                    same = false;
                }
            })

            if (same) {
                answer[x].push(strs[i]);
                break;
            }
        }

        if (!same || answer.length === 0 && maps.length === 0) {
            answer.push([strs[i]]);
            maps.push(newMap);
        }
    }
    return answer;
};

// runtime 5th percentile
// memory 5th percentile

// from chatGPT
function groupAnagramsOpt(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }

    return Array.from(map.values());
};

// runtime 72nd percentile
// memory 89th percentile