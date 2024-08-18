// Defuse the Bomb
// from https://leetcode.com/problems/defuse-the-bomb/description/

function decrypt(code: number[], k: number): number[] {
    if (k === 0) return new Array(code.length).fill(0);

    let answer: number[] = [];
    for (let i = 0; i < code.length; i++) {
        let kCopy = k;
        let sum = 0;
        let pos = i;
        if (kCopy > 0) {
            while (kCopy > 0) {
                pos++;
                kCopy--;
                if (pos > code.length - 1) {
                    pos = 0;
                }
                sum += code[pos];
            }
        } else {
            while (kCopy < 0) {
                pos--;
                kCopy++;
                if (pos < 0) {
                    pos = code.length - 1;
                }
                sum += code[pos];
            }
        }
        answer.push(sum);
    }

    return answer;
};

// runtime 24th percentile
// memory 78th percentile