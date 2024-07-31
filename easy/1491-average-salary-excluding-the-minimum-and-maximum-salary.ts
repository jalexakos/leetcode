// Average Salary Excluding the Minimum and Maximum Salary
// from https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

function average(salary: number[]): number {
    let min = Infinity;
    let max = 0;
    let sum = 0;

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < min) min = salary[i];
        if (salary[i] > max) max = salary[i];
        sum += salary[i];
    }

    return (sum - (max + min)) / (salary.length - 2);
};

// runtime 74th percentile
// memory 84th percentile