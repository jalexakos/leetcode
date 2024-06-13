// from https://leetcode.com/problems/day-of-the-week/description/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dayOfTheWeek(day: number, month: number, year: number): string {
    const date = new Date(String(month) + " " + String(day) + ", " + String(year));

    console.log(date.getDay());
    return days[date.getDay()];
};

// runtime 72nd percentile
// memory 45th percentile