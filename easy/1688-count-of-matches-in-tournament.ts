// Count of Matches in Tournament
// from https://leetcode.com/problems/count-of-matches-in-tournament/description/

function numberOfMatches(n: number): number {
    let copyN = n;
    let count = 0;
    while (copyN > 1) {
        if (copyN % 2 === 0) {
            copyN /= 2;
            count += copyN;
        } else {
            copyN--;
            copyN /= 2;
            count += copyN;
            copyN++;
        }
    }

    return count;
};

// runtime 50th percentile
// memory 97th percentile