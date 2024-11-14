// Sort the People
// from https://leetcode.com/problems/sort-the-people/description/

function sortPeople(names: string[], heights: number[]): string[] {
    let sortedHeights = [...heights].sort((a,b) => b - a);
    let answer: string[] = [];

    for (let i = 0; i < sortedHeights.length; i++) {
        let idx = heights.indexOf(sortedHeights[i]);
        answer.push(names[idx]);
    }
    
    return answer;
};

// runtime 43rd percentile
// memory 27th percentile