// Slowest Key
// from https://leetcode.com/problems/slowest-key/description/

function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let lastTime: number = 0;
    let longest: number = 0;
    let char: string = "a";
    
    for (let i = 0; i < releaseTimes.length; i++) {
        let curr = releaseTimes[i] - lastTime;
        if (curr > longest) {
            char = keysPressed[i];
            longest = curr;
        } else if (curr === longest) {
            if (keysPressed[i].charCodeAt(0) > char.charCodeAt(0)) {
                char = keysPressed[i];
            }
        }
        lastTime = releaseTimes[i];
    }

    return char;
};

// runtime 77th percentile
// memory 61st percentile