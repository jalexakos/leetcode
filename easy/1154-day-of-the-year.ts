// from https://leetcode.com/problems/day-of-the-year/description/

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function dayOfYear(date: string): number {
    let day = Number(date.slice(8));
    let month = Number(date.slice(5,7));
    let year = Number(date.slice(0,4));
    let leapYear = (((year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) && month > 2) ? 1 : 0)
    let dayTotal = leapYear + day;

    dayTotal = daysInMonth.slice(0, month - 1).reduce((x,y) => x + y, dayTotal);
    

    return dayTotal;
};

// runtime 82nd percentile
// memory 53rd percentile