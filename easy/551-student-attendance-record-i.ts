// from https://leetcode.com/problems/student-attendance-record-i/description/

function checkRecord(s: string): boolean {
    let absent = 0;
    let late = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            absent++;
            if (absent >= 2) {
                return false;
            }
            late = 0;
        } else if (s[i] === 'L') {
            late++;
            if (late >= 3) {
                return false;
            }
        } else {
            late = 0;
        }
    }

    return true;
};

// runtime 40th percentile
// memory 45th percentile