// from https://leetcode.com/problems/divisor-game/description/

function divisorGame(n: number): boolean {
    let num = n;
    let x = 1;
    let answer = false;
    
    while (num > 0 && x < num) {
        if (num % x === 0) {
            answer = !answer;
            num -= x;
            x = 1;
        } else {
            x++;
        }
    }

    return answer;
};

// runtime 76th percentile
// memory 86th percentile