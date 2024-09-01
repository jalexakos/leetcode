// Number of Students Unable to Eat Lunch
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/

function countStudents(students: number[], sandwiches: number[]): number {
    let shifted = 0;
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            shifted = 0;
        } else {
            let student: number = students.shift() || 0;
            students = [...students, student];
            shifted++;
        }

        if (shifted > students.length) break;
    }

    return students.length;
};

// runtime 12th percentile
// memory 12th percentile