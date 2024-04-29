// from https://leetcode.com/problems/shortest-distance-to-a-character/description/

function shortestToChar(s: string, c: string): number[] {
    let charMap: Record<string,Array<number>> = {};
    let answer: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            if (charMap[c]) charMap[c].push(i);
            else charMap[c] = [i]; 
        }
    }

    for (let x = 0; x < s.length; x++) {
        let shortestDistance = s.length + 1;
        charMap[c].forEach((elem) => {
            if (Math.abs(x - elem) < shortestDistance){
                shortestDistance = Math.abs(x - elem);
            }
        })

        answer.push(shortestDistance);
        shortestDistance = s.length + 1;
    }

    return answer;
};

// runtime 69th percentile
// memory 88th percentile