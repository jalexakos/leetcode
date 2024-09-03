// Latest Time by Replacing Hidden Digits
// from https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/

let placeMap: Record<number,string> = {
    0: "2",
    1: "9",
    3: "5",
    4: "9"
}

function maximumTime(time: string): string {
    let answer = "";

    for (let i = 0; i < time.length; i++) {
        if (time[i] === "?") {
            if (i === 1) {
                if (answer[answer.length - 1] === "2") answer += "3";
                else answer += placeMap[i];
            } else if (i === 0) {
                if (Number(time[1]) > 3) answer += "1";
                else answer += placeMap[i];
            } else answer += placeMap[i];
        } else answer += time[i];
    }

    return answer;
};

// runtime 31st percentile
// memory 87th percentile