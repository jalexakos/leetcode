// from https://leetcode.com/problems/arranging-coins/description/

function arrangeCoins(n: number): number {
    if (n === 1) return 1;
    let completedRows = 0;
    let targetN = n;
    for (let i = 1; i < n; i++) {
        if (targetN >= i) {
            targetN-=i;
            completedRows++;
        } else {
            break;
        }
    }

    return completedRows;
};

// runtime 45th percentile 
// memory 94th percentile