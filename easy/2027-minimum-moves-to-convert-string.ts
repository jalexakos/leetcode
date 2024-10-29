// Minimum Moves to Convert String
// from https://leetcode.com/problems/minimum-moves-to-convert-string/description/

// CoPilot suggested this solution - it's more memory efficient than mine
function minimumMovesOpt(s: string): number {
    let moves = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'X') {
            moves++;
            i += 2;
        }
    }
    return moves;
};

// runtime 100th percentile
// memory 81st percentile

// My original solution
function minimumMoves(s: string): number {
    if (!s.includes("X")) return 0;

    let count = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] === "X") {
            count++;
            i += 3;
        } else {
            i++;
        }
    }

    return count;
};

// runtime 100th percentile
// memory 18th percentile