// from https://leetcode.com/problems/baseball-game/description/

function calPoints(operations: string[]): number {
    let answer = [];
    for (let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case '+':
                if (answer.length === 0) break;
                let y: number = Number(answer[answer.length - 2]);
                let x: number = Number(answer[answer.length - 1]);
                answer.push((x + y));
                break;
            case 'D':
                if (answer.length === 0) break;
                let double: number = Number(answer[answer.length - 1]);
                answer.push((double * 2));
                break;
            case 'C':
                if (answer.length === 0) break;
                answer.pop();
                break;
            default:
                answer.push(Number(operations[i]));
                break;
        }
    }
    return answer.reduce((a,b) => a + b, 0);
};


// runtime 95th percentile
// memory 18th percentile